/* eslint-disable @typescript-eslint/ban-ts-comment */
import { Logger } from '@nestjs/common';

//@ts-ignore
import retry from 'async-retry';
//@ts-nocheck
import {
  Consumer,
  EachMessagePayload,
  Kafka,
  KafkaMessage,
  Message,
  //@ts-ignore
} from 'kafkajs';
import { EGroupId, ETopics } from '../interfaces';

export interface Event {
  data: any;
  topic: ETopics;
}

export abstract class KafkaConsumer<T extends Event> {
  abstract topic: T['topic'];
  abstract groupId: EGroupId;
  abstract onMessage(data: T['data'], msg: Message): void;
  protected kafkaClient: Kafka;
  private logger!: Logger;
  private consumer: Consumer;
  // protected ackWait = 5 * 1000;

  constructor(kafkaClient: Kafka) {
    this.kafkaClient = kafkaClient;
  }

  async connect(): Promise<void> {
    // Retrieve connection even if it's fail
    try {
      await this.consumer.connect(); // Try 5 times and if not working => throw an error
    } catch (err) {
      this.logger.error('failed to connect to kafka', err);
      // Add a break tim
      await this.connect();
    }
  }

  createConsumer() {
    this.consumer = this.kafkaClient.consumer({
      groupId: this.groupId,
    });
    this.logger = new Logger(`${this.topic}-${this.groupId}`);
  }

  // Similar to consume
  async listen(): Promise<void> {
    await this.createConsumer();
    await this.connect();
    await this.consumer.subscribe({
      topics: [this.topic],
      fromBeginning: true,
    });
    await this.consumer.run({
      eachMessage: async (messagePayload: EachMessagePayload) => {
        const { topic, partition, message } = messagePayload;
        const prefix = `${topic}[${partition} | ${message.offset}] / ${message.timestamp}`;
        this.logger.debug(`- ${prefix} ${message.key}#${message.value}`);
        try {
          await retry(
            async () => {
              const parsedData = this.parseMessage(message);
              this.onMessage(parsedData, message);
            },
            {
              retries: 3,
              onRetry: (err: Error, attempt: number) => {
                this.logger.error(
                  `Error consuming message, executing retry ${attempt}/3`,
                  err,
                );
              },
            },
          );
        } catch (err) {
          this.logger.error(`Error consuming message, Adding to DQL...`, err);
        }
      },
    });
  }

  async disconnect(): Promise<void> {
    await this.consumer.disconnect();
  }

  // // How to parse a buffer data.toString('utf8')
  parseMessage(msg: KafkaMessage) {
    const data = msg.value;
    return typeof data === 'string'
      ? JSON.parse(data)
      : JSON.parse(data.toString('utf8'));
  }
}

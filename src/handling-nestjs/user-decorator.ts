import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { TUser } from '../interfaces';

export const User = createParamDecorator(
  (data: unknown, ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest();
    return request.currentUser as TUser;
  },
);

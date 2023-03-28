export enum EMessageErrors {
  DATABASE_CONNECTION = "Database connection error",
  ALREADY_USERNAME = "Username already in use",
  INVALID_CREDENTIALS = "Invalid credentials",
  NOT_AUTHORIZED = "Not authorized",
  NOT_FOUND = "Not found",
  MISSING_ATTRIBUTES = "Missing attributes",
  EMPTY_ATTRIBUTES = "The body of the request is empty",
}

export enum EMessageSuccess {
  SETTINGS_RETRIEVED = "Settings successfully retrieved",
  SETTINGS_CREATED = "Settings successfully created",
  SETTINGS_UPDATED = "Settings successfully updated",
}

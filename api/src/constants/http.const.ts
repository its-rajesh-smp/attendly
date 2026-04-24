export const HttpStatus = {
  OK: 200,
  CREATED: 201,
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  INTERNAL_SERVER_ERROR: 500,
  USER_NOT_FOUND: 404,
  USER_ALREADY_EXISTS: 409,
  INVALID_PASSWORD: 401,
  VALIDATION_ERROR: 400,
  ALREADY_RSVPED: 400,
  HAVENT_RSVPED: 400,
} as const;

export const ErrorMessages = {
  BAD_REQUEST: "Bad request",
  UNAUTHORIZED: "User Unauthorized",
  FORBIDDEN: "Forbidden",
  NOT_FOUND: "Not found",
  BAD_GATEWAY: "Bad gateway",
  SERVICE_UNAVAILABLE: "Service unavailable",
  INTERNAL_SERVER_ERROR: "Something went wrong",
  USER_NOT_FOUND: "User not found",
  USER_ALREADY_EXISTS: "User already exists",
  INVALID_PASSWORD: "Invalid password",
  VALIDATION_ERROR: "Validation error",
  ALREADY_RSVPED: "Already RSVPed",
  HAVENT_RSVPED: "Haven't RSVPed",
} as const;

export const ErrorMessagesToKeyMap: { [key: string]: string } = Object.entries(
  ErrorMessages
).reduce(
  (acc, [key, value]) => ({
    ...acc,
    [value]: key,
  }),
  {}
);

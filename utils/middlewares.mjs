const DEFAULT_TIMEOUT = 1000;  // ms

export const brakeMiddleware = (req, res, next) => {
  setTimeout(next, DEFAULT_TIMEOUT);
};

const DEFAULT_TIMEOUT = 1000;

export const brakeMiddleware = (req, res, next) => {
  console.log(`Response for ${req.url} with a delay of ${DEFAULT_TIMEOUT}ms`);

  setTimeout(next, DEFAULT_TIMEOUT);
};

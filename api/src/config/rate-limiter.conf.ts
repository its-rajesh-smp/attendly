import rateLimit from "express-rate-limit";

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  limit: 1000, // Limit each IP to 1000 requests per `window` (here, per 15 minutes).
  standardHeaders: "draft-8",
  legacyHeaders: false, // Disable the `X-RateLimit-*` headers.
});

export default limiter;

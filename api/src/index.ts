import "module-alias/register";
import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import limiter from "./config/rate-limiter.conf";
import ErrorHandler from "./middlewares/error-handler.middleware";
import router from "./routes";
import { EnvUtil } from "./utils";

/* Config */
dotenv.config({
  path: process.env.NODE_ENV === "production" ? ".env.prod" : ".env.dev",
});

export const app = express();

/* Middlewares */
app.use(cors({ origin: "*" })); // TODO: Set the origin
app.use(limiter);
app.use(express.json());

/* Routes */
app.use("/api", router);

/* Global Error Handler */
app.use(ErrorHandler);

/* Starting Server */
const port = EnvUtil.getEnv("PORT") || 3000;

app.listen(port, async () => {
  console.log(`🚀 Server started on ${port}`);
});

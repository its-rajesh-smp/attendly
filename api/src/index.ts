import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import limiter from "./config/rate-limiter.conf";
import ErrorHandler from "./middlewares/error-handler.middleware";
import router from "./routes";

dotenv.config();

export const app = express();

app.use(cors({ origin: "*" }));
app.use(limiter);
app.use(express.json());

app.get("/health", (_req, res) => {
  res.status(200).json({ ok: true });
});

app.use("/api", router);
app.use(ErrorHandler);

export const startServer = () => {
  const port = Number(process.env.PORT || 3000);

  return app.listen(port, () => {
    console.log(`Server started on ${port}`);
  });
};

if (require.main === module) {
  startServer();
}

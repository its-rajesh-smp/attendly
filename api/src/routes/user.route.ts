import { UserController } from "@/controllers";
import { AuthMiddleware } from "@/middlewares";
import express from "express";

const router = express.Router();

router.get("/me", AuthMiddleware, UserController.getUser);
router.post("/login", UserController.loginUser);
router.post("/register", UserController.registerUser);

export default router;

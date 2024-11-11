import express from "express";
import { UserController } from "./User.controller";

const router = express.Router()


router.post("/register", UserController.createUser);

export const userRoutes = router;
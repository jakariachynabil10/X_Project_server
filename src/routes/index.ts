import express from "express";
import { userRoutes } from "../modules/User/User.route";
const router = express.Router();
const moduleRoutes = [
    {
      path: "/api",
      route: userRoutes,
    },
  ];
  
  moduleRoutes.forEach((route) => router.use(route.path, route.route));
export default router;
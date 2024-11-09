import express from "express";
const router = express.Router();
const moduleRoutes = [
    {
      path: "/api",
    //   route: userRoutes,
    },
    {
      path: "/api",
    //   route: PetsRoute,
    },
    {
      path: "/api",
    //   route: AdoptionRequestRoute,
    },
  ];
  
  moduleRoutes.forEach((route) => router.use(route.path, route.route));
export default router;
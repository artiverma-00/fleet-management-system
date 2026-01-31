import express from "express";
import rateLimiter from "../middlewares/ratelimiter.middleware.js";
import * as controller from "../controllers/vehicle.controller.js";

const router = express.Router();

router.post("/add", rateLimiter, controller.addVehicle);
router.patch("/assign-driver/:vehicleId", controller.assignDriver);
router.get("/:vehicleId", controller.getVehicle);

export default router;

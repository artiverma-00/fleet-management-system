import express from "express";
import * as controller from "../controllers/trip.controller.js";

const router = express.Router();

router.post("/create", controller.createTrip);
router.patch("/update/:tripId", controller.updateTrip);
router.get("/:tripId", controller.getTrip);
router.delete("/delete/:tripId", controller.deleteTrip);
router.patch("/end/:tripId", controller.endTrip);

export default router;

import express from "express";
import * as controller from "../controllers/analytics.controller.js";

const router = express.Router();

router.get("/", controller.getAnalytics);

export default router;

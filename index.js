import dotenv from "dotenv";
dotenv.config();
import express from "express";
import logger from "./middlewares/logger.midddleware.js";
import notFound from "./middlewares/notFound.midddleware.js";

const app = express();

app.use(express.json());
app.use(logger);

import userRoutes from "./routes/user.routes.js";
import vehicleRoutes from "./routes/vehicle.routes.js";
import tripRoutes from "./routes/trip.routes.js";
import analyticsRoutes from "./routes/analytics.routes.js";

app.use("/users", userRoutes);
app.use("/vehicles", vehicleRoutes);
app.use("/trips", tripRoutes);
app.use("/analytics", analyticsRoutes);

app.use(notFound);

app.listen(process.env.PORT, ()=>{
              console.log(`Server running on port ${process.env.PORT}` );

});
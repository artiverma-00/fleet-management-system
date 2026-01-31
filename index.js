require("dotenv").config();
const express = require("express");
const app = express();

const logger = require("./middlewares/logger.midddleware");
const notFound = require("./middlewares/notFound.midddleware");

app.use(express.json());
app.use(logger);

app.use("/users", require("./routes/user.routes"));
app.use("/vehicles", require("./routes/vehicle.routes"));
app.use("/trips", require("./routes/trip.routes"));
app.use("/analytics", require("./routes/analytics.routes"));

app.use(notFound);

app.listen(process.env.PORT, ()=>{
              console.log(`Server running on port ${process.env.PORT}` );

});
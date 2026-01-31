import fs from "fs";

export default (req, res, next) => {
  const log = `${req.method} ${req.url} ${new Date().toISOString()}\n`;
  fs.appendFileSync("logs.txt", log);
  next();
};

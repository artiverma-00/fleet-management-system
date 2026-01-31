const requests = {};

export default (req, res, next) => {
  const ip = req.ip;
  const time = Date.now();

  requests[ip] = requests[ip]?.filter(t => time - t < 60000) || [];
  if (requests[ip].length >= 3) {
    return res.status(429).json({
      message: "Rate limit exceeded"
    });
  }
  requests[ip].push(time);
  next();
};
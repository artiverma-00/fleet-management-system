const request ={};
module.exports=(req, res, next)=>{
              const ip= req.ip;
              const time= Date.now();

              requests[ip] = requests[ip]?.filter(t=>time-t<60000)||[];
              if(requests[ip].lenght>=3){
                            return res.status(429).json({
                                          message:"Rate limit exceeded"
                            })
              
              }
              requests[ip].push(time);
              next();
};
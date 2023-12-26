const redis = require("redis");

let redisClient;

async function inicializeDatabase() {
  redisClient = redis.createClient({
    host: "redis", // use the service name from docker-compose as host
    port: 6379, // default Redis port
  });
  redisClient.on("error", (error) => console.error(`Error : ${error}`));
  await redisClient.connect();
  console.log("connection established");
}

module.exports = { redisClient, inicializeDatabase };

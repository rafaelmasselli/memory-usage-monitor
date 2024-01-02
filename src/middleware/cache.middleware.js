const redis = require("redis");
const memoryIntensiveOperation = require("../util/memoryIntensiveOperation");

class CacheMiddleware {
  constructor() {
    this.redisClient = null;
  }

  async inicializeDatabase() {
    try {
      this.redisClient = redis.createClient({
        host: "redis",
        port: 6379,
      });

      this.redisClient.on("error", (error) => {
        console.error(`Erro na conexão com o Redis: ${error}`);
      });

      await new Promise((resolve, reject) => {
        this.redisClient.on("connect", resolve);
        this.redisClient.on("error", reject);
      });

      console.log("Conexão estabelecida com o Redis");
    } catch (error) {
      console.error(`Erro ao inicializar o Redis: ${error}`);
      throw error;
    }
  }

  async #handleCache(req, res, next, keyCache) {
    if (this.redisClient.get) {
      try {
        const dataDoCache = await this.redisClient.get(keyCache);
        if (dataDoCache) {
          res.send(`Dados do cache (Redis): ${dataDoCache}`);
        } else {
          const resultOperation = memoryIntensiveOperation();
          await this.redisClient.setex(
            keyCache,
            60,
            JSON.stringify(resultOperation)
          );
          next();
        }
      } catch (error) {
        console.error(`Erro ao obter dados do cache do Redis: ${error}`);
        next();
      }
    } else {
      console.error("client ou client.get não está definido");
      next();
    }
  }

  async handle(req, res, next) {
    const keyCache = req.url;

    if (!this.redisClient) {
      try {
        await this.inicializeDatabase();
        await this.#handleCache(req, res, next, keyCache);
      } catch (error) {
        console.error("Falha ao inicializar o Redis:", error);
        next();
      }
    } else {
      await this.#handleCache(req, res, next, keyCache);
    }
  }
}

module.exports = CacheMiddleware;

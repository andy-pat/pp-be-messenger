const ENV = process.env.NODE_ENV || "development";

const baseConfig = {
  client: "pg",
  migrations: {
    directory: "./db/migrations",
  },
  seeds: {
    directory: "./db",
  },
};

const customConfig = {
  development: {
    connection: {
      database: "messenger",
      username: "andy",
      password: "fuckpsql",
    },
  },
};

module.exports = { ...customConfig[ENV], ...baseConfig };

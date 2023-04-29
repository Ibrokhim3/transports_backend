const pg = require("pg");

const { Pool } = pg;

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "transports_db",
  password: "2626",
  port: 5432,
});

module.exports = pool;

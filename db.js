import pg from 'pg';
import dotenv from "dotenv";

dotenv.config()

const { Pool } = pg;

const user = 'postgres';
const password = process.env.SENHA_DB;
const host = 'localhost';
const port = 5432;
const database = process.env.DATABASE;

const connection = new Pool({
  user,
  password,
  host,
  port,
  database
});

export {
    connection
}
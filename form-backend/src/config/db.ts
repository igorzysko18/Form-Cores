import pgPromise from 'pg-promise';
import 'dotenv/config'
const pgp = pgPromise();

const db = pgp({ 
  connectionString: `postgresql://postgres:1234@${process.env.POSTGRES_DB}:5432/postgres`,
});

export default db;

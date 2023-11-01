import pgPromise from 'pg-promise';

const pgp = pgPromise();

const db = pgp({
  connectionString: 'postgresql://postgres:1234@localhost:5432/postgres',
});

export default db;

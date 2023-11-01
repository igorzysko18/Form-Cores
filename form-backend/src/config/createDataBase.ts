import pgPromise from 'pg-promise';
import db from './db';

const pgp = pgPromise();

async function createTables() {
  try {
    await db.none(`
      CREATE TABLE IF NOT EXISTS colors (
        id SERIAL PRIMARY KEY,
        name VARCHAR(255) NOT NULL
      )
    `);

    await db.none(`
      INSERT INTO colors (name)
      SELECT 'Vermelho' WHERE NOT EXISTS (SELECT 1 FROM colors WHERE name = 'Vermelho');
    `);

    await db.none(`
      INSERT INTO colors (name)
      SELECT 'Laranja' WHERE NOT EXISTS (SELECT 1 FROM colors WHERE name = 'Laranja');
    `);

    await db.none(`
      INSERT INTO colors (name)
      SELECT 'Amarelo' WHERE NOT EXISTS (SELECT 1 FROM colors WHERE name = 'Amarelo');
    `);

    await db.none(`
      INSERT INTO colors (name)
      SELECT 'Verde' WHERE NOT EXISTS (SELECT 1 FROM colors WHERE name = 'Verde');
    `);

    await db.none(`
      INSERT INTO colors (name)
      SELECT 'Azul' WHERE NOT EXISTS (SELECT 1 FROM colors WHERE name = 'Azul');
    `);

    await db.none(`
      INSERT INTO colors (name)
      SELECT 'Anil' WHERE NOT EXISTS (SELECT 1 FROM colors WHERE name = 'Anil');
    `);

    await db.none(`
      INSERT INTO colors (name)
      SELECT 'Violeta' WHERE NOT EXISTS (SELECT 1 FROM colors WHERE name = 'Violeta');
    `);

    await db.none(`
      CREATE TABLE IF NOT EXISTS forms (
        id SERIAL PRIMARY KEY,
        name VARCHAR(100) NOT NULL,
        cpf VARCHAR(14) NOT NULL,
        email VARCHAR(100) NOT NULL,
        color VARCHAR(40) NOT NULL,
        observation TEXT
      )
    `);

    console.log('Tabelas criadas com sucesso!');
  } catch (error) {
    console.error('Erro ao criar tabelas:', error);
  }
}

export default createTables;

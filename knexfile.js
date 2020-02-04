const pgUser = process.env.PG_USER || 'jonathan';
const pgDb = process.env.PG_DB || 'droom';

const prodConnection = `postgres://${pgUser}@localhost/${pgDb}`;

module.exports = {
  development: {
    client: 'sqlite3',
    connection: {
      filename: './data/droom.db3'
    },
    useNullAsDefault: true,
    migrations: {
      directory: './data/migrations'
    },
    seeds: {
      directory: './data/seeds'
    },
    pool: {
      afterCreate: (conn, done) => {
        conn.run('PRAGMA foreign_keys = ON', done);
      }
    }
  },

  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL || prodConnection,
    pool: {
      min: 2,
      max: 20
    },
    migrations: {
      directory: './data/migrations'
    },
    seeds: {
      directory: './data/seeds'
    }
  }
};


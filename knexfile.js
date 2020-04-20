// Update with your config settings.

module.exports = {

  development: {
    client: 'pg',
    connection: {
      host: 'localhost',
      user: 'postgres',
      password: 'admin',
      database: 'ToDo_Api'
    },
    migrations: {
      directory: __dirname + '/src/database/migrations'
    }
  },

  staging: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user: 'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'pg',
    connection: {
      host: 'ec2-52-86-33-50.compute-1.amazonaws.com',
      database: 'd4iadslmvhcimq',
      user:'miyifulaqjktug',
      password: '74856ba35e5aac0fe99f1d0c8605d5d19be2d24e1069d11d395ab31552106c07',
      port:5432
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      directory: __dirname + '/src/database/migrations'
    },
    seeds: {
      directory: './src/database/seeds'
    }
  }

};

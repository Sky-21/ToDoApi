import knex from 'knex'

import config from '../../knexfile'

const env = process.env.DB_ENV || 'production'

const connection = knex(config[env])

export default connection

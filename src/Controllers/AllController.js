import connection from '../database/connection'

module.exports = {
  async index(req, res){
    const [...todos] = await connection('todo').returning('*').select('*')

    return res.json(todos)

  }
}

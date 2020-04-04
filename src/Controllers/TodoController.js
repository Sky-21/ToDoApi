import connection from '../database/connection'


module.exports = {

  async index(req, res){

    const { Cat_id } = req.params

    const [...todos] = await connection('todo').where('Cat_id' , Cat_id).select('*')

    return res.json(todos)
  },

  async store(req, res){
    const {title , content , Cat_id} = req.body

    const ver = await connection('categories').where('id' , Cat_id).select('*').first()

    if(!ver){
      return res.json({error: "essa categoria não existe"})
    }

    const [Todo] = await connection('todo').returning('*').insert({
      title,
      content,
      Cat_id
    })

    return res.json({Todo})
  },

  async update(req, res){
    const { Cat_id , title ,content } = req.body
    const { id } = req.params
    const [updated] = await connection('todo').returning('*').where('id', id).update({Cat_id, title, content})
    return res.json(updated)
  },

  async delete(req, res){
    const { id } = req.params
    const [ver] = await connection('todo').returning('id').where('id', id).select('*')
    if(!ver){
      return res.json({error:'Essa Do não existe'})
    }


    await connection('todo').where('id', id).delete()

    return res.json({ok: 'delete'})
  }
}

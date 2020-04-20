import Connection from '../database/connection'
import connection from '../database/connection'


module.exports = {
  async store(req, res){
    const { title } = req.body

    const ver = await connection('categories').where('title', title).select('*').first()
    console.log(ver)
    if(ver){
      return res.status(405).json({error: 'Essa categoria Já existe'})
    }



    const [id] = await connection('categories').returning('id').insert({
      title
    })

    return res.json({title, id})
  },
  async index(req, res){

    const categories = await connection('categories').select('*')

    return res.json(categories)
  },

  async update(req, res){
    const { id } = req.params
    const { title } = req.body

    const uptaded = await connection('categories').returning('id').where('id', id).update({title})

    return res.json({ok : 'update'})
  },
  async delete(req, res){

    const {id} = req.params
    const [cat] = await connection('categories').returning('id').where('id', id).select('*')

    if(!cat){
      return res.json({error: 'Essa categoria não existe'}).status(400)
    }

    const [title] = await connection('categories').returning('title').where('id', id).delete()


    return res.json({title})
  }


}

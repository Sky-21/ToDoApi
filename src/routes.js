import { Router} from 'express'

import connection from './database/connection'

import CategorieController from './Controllers/CategorieController'
import ToDoController from './Controllers/TodoController'
import AllController from './Controllers/AllController'


const routes = Router()

routes.post('/categories', CategorieController.store)

routes.get('/categories', CategorieController.index)

routes.put('/categories/:id', CategorieController.update)

routes.delete('/categories/:id', CategorieController.delete)


routes.post('/todos' , ToDoController.store)

routes.get('/todos/:Cat_id', ToDoController.index)

routes.put('/todos/:id', ToDoController.update)

routes.delete('/todos/:id', ToDoController.delete)

routes.get('/todos', AllController.index)


export default routes

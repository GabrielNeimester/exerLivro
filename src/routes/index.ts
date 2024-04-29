import { Router } from 'express'
import livrosRoutes from './livros/livros.routes'


const routes = Router()

routes.use('/livros', livrosRoutes)


export default routes
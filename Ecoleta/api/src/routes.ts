import express from "express"
import multer from 'multer'

import multerConfig from './config/multer'
import PointController from "./controllers/PointController"
import ItemController from "./controllers/ItemController"

const routes = express.Router()
const upload = multer(multerConfig)

const pointController = new PointController
const itemController = new ItemController

routes.get("/items", itemController.index)

routes.post('/points', upload.single('image'), pointController.create)

routes.get('/points', pointController.index)
routes.get('/points/:id', pointController.show)

export default routes

import express from 'express'
import visitorControllers from '../controllers/visitorControllers.js'
const router = express.Router()

router.post("/send" , visitorControllers)

export default router
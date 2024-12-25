import express from 'express'
import { loginController, registerController } from '../Controller/userController.js'
const router = express.Router()
import upload from '../middleware/upload.js'

router.post('/register', upload.single('resume') , registerController)
router.post('/login', loginController)







export default router
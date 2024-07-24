import express from 'express'
import { CreateUser } from '../controllers/authController.js'
const router = express.Router();

router.route('/user/create').post(CreateUser)
export default router;
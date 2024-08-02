import express from 'express'
const router = express.Router();
import { Ban, Unban, Kick } from '../controllers/userController.js'

router.route('/ban').post(Ban)
router.route('/kick').post(Kick)
router.route('/unban').post(Unban)

export default router;
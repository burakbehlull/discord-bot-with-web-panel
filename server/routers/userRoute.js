import express from 'express'
const router = express.Router();
import { Ban, Unban, Kick, Timeout, AddRoles } from '../controllers/userController.js'

router.route('/ban').post(Ban)
router.route('/kick').post(Kick)
router.route('/unban').post(Unban)
router.route('/timeout').post(Timeout)
router.route('/addRoles').post(AddRoles)

export default router;
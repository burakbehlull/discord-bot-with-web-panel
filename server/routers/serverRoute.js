import express from 'express'
const router = express.Router();
import { GetRolesAll } from '../controllers/serverController.js'

router.route('/roles').post(GetRolesAll)

export default router;
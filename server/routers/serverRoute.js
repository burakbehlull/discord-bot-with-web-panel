import express from 'express'
const router = express.Router();
import { Index, GetRolesAll,GetChannelAll } from '../controllers/serverController.js'

router.route('/').post(Index)
router.route('/roles').post(GetRolesAll)
router.route('/channels').post(GetChannelAll)

export default router;
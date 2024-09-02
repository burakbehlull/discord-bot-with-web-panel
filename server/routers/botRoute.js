import express from 'express'
const router = express.Router();
import { BotStatus, BotPresence, Servers } from '../controllers/botController.js'
router.route('/servers').get(Servers)
router.route('/status').post(BotStatus)
router.route('/presence').post(BotPresence)
export default router;
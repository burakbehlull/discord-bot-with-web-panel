import express from 'express'
const router = express.Router();
import { BotStatus, BotPresence } from '../controllers/botController.js'
router.route('/status').post(BotStatus)
router.route('/presence').post(BotPresence)
export default router;
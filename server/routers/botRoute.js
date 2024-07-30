import express from 'express'
const router = express.Router();
import { BotSettings } from '../controllers/botController.js'
router.route('/settings').post(BotSettings)
export default router;
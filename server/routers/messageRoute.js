import express from 'express'
const router = express.Router();

import { SendUserDm, GetServerMessages, SendServerDm, GetUserMessages } from '../controllers/messageController.js'

router.route('/user/send').post(SendUserDm)
router.route('/user/all').post(GetUserMessages)
router.route('/server/all').post(GetServerMessages)
router.route('/server/send').post(SendServerDm)

export default router;
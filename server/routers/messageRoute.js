import express from 'express'
const router = express.Router();

import { SendUserDm, GetServerMessages, SendServerDm, GetUserMessages, MessageReply } from '../controllers/messageController.js'

router.route('/user/send').post(SendUserDm)
router.route('/user/all').post(GetUserMessages)
router.route('/server/all').post(GetServerMessages)
router.route('/server/send').post(SendServerDm)
router.route('/reply').post(MessageReply)

export default router;
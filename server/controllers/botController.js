// bot controller

import { bot } from '../index.js'

const BotSettings = async (req,res)=> {
    const { status } = req.body

    try {
        await bot.client.user.setStatus(status)
        console.log('başarılı')
        return res.json({
            success: true,
        })
    } catch (err) {
        console.log(err)
        return
    }
}

export {
    BotSettings
}
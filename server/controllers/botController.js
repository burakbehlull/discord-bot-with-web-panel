// bot controller
import { bot } from '../index.js'

const BotStatus = async (req,res)=> {
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

const BotPresence = async (req,res)=> {
    const { name, type } = req.body

    try {
        await bot.client.user.setPresence({
			activities: [
                {
                    name: name,
                    type: Number(type)
                }
            ],
			shardId: 0
		})

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
    BotStatus,
    BotPresence,
}
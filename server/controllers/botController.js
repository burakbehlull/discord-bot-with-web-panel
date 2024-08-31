// bot controller
import { bot } from '../index.js'

const Servers = async (req, res)=>{
    try {
		const servers = await bot.client.guilds.cache
		
        console.log('başarılı')
        return res.json({
			servers: servers,
            success: true
        })
    } catch (err) {
        console.log("Hata: ", err.message)
        return
    }
}

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
	Servers,
    BotStatus,
    BotPresence,
}
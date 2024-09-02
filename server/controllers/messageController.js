import { bot } from '../index.js'

const GetServerMessages = async (req,res) => {
    const { serverId, channelId } = req.body
    try {
        const guild = await bot.client.guilds.cache.get(serverId);
        const channel = await guild.channels.fetch(channelId)
        const messages = await channel.messages.fetch({ limit: 100 })
        return await res.json({
            success: true,
            message: 'Başarılı',
            messages: messages
        })
    } catch (err) {
        console.log("Hata:", err.message)
        return await res.json({
            success: true,
            message: 'Başarısız',
            error: err.message
        })
    }
}

const SendUserDm = async (req, res) => {
    const { userId, content } = req.body
    try {
        const user = await bot.client.users.cache.get(userId)
        await user.send(content)
        return await res.json({
            success: true,
            message: 'DM Başarıyla gönderildi.',
            user: user,
            content: content
        })
    } catch (err) {
        console.log("Hata: ", err.message)
        return await res.json({
            success: true,
            message: 'Başarısız',
            error: err.message
        })
    }
}

const SendServerDm = async (req,res)=> {
    const { serverId, channelId, content } = req.body
    try {
        const guild = await bot.client.guilds.cache.get(serverId)
        const channel = await guild.channels.fetch(channelId)
        await channel.send(content)
        return await res.json({
            success: true,
            message: 'Başarılı',
            channel: channel,
            content: content
        })
    } catch (err) {
        console.log("Hata: ", err.message)
        return await res.json({
            success: true,
            message: 'Başarısız',
            error: err.message
        })
    }   
}

const GetUserMessages = async (req,res) => {
    const { userId } = req.body
    try {
        const user = await bot.client.users.cache.get(userId)
        const dm = await user.createDM()
        const messages = await dm.messages.fetch({ limit: 100 })
        return await res.json({
            success: true,
            message: 'Başarılı',
            messages: messages
        })
    } catch (err) {
        console.log('Hata: ', err.message)
        return await res.json({
            success: true,
            message: 'Başarısız',
            error: err.message
        })
        
    }
}

export {
    GetUserMessages,
    GetServerMessages,
    SendUserDm,
    SendServerDm
}



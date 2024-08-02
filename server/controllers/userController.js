// bot controller
import 'dotenv/config'
import { bot } from '../index.js'

const Ban = async (req,res)=> {
    const { serverId, userId, reason } = req.body
    const isServerId = serverId || process.env.SERVER_ID
    const server = await bot.client.guilds.fetch(isServerId)
    
    if(!server) return res.json({
            success: true,
            message: 'Server ID yok.'
        })
    
    if(!userId) return res.json({
            success: true,
            message: "Kullanıcı ID'si yok."
        })
    
    await server.members.ban(userId, {
        reason
    })
    .then((res)=>console.log('Banlandı', res))
    .catch(err=> console.log('Hata', err))

    return res.json({
        message: 'Kullanıcı banlandı',
        success: true,

    })

}

const Kick = async (req,res)=> {
    const { serverId, userId, reason } = req.body
    const isServerId = serverId || process.env.SERVER_ID
    const server = await bot.client.guilds.fetch(isServerId)
    
    if(!server) return res.json({
            success: true,
            message: 'Server ID yok.'
        })
    
    if(!userId) return res.json({
            success: true,
            message: "Kullanıcı ID'si yok."
        })
    
    await server.members.kick(userId, {
        reason
    })
    .then((res)=>console.log('Atıldı', res))
    .catch(err=> console.log('Hata', err))

    return res.json({
        message: 'Kullanıcı Atıldı',
        success: true,

    })

}

const Unban = async (req,res)=> {
    const { serverId, userId, reason } = req.body
    const isServerId = serverId || process.env.SERVER_ID
    const server = await bot.client.guilds.fetch(isServerId)
    
    if(!server) return res.json({
            success: true,
            message: 'Server ID yok.'
        })
    
    if(!userId) return res.json({
            success: true,
            message: "Kullanıcı ID'si yok."
        })
    
    await server.members.unban(userId, {
        reason
    })
    .then((res)=>console.log('Banı açıldı', res))
    .catch(err=> console.log('Hata', err))

    return res.json({
        message: 'Kullanıcının banı açıldı.',
        success: true,

    })

}


export {
    Ban,
    Kick,
    Unban

}
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


const Timeout = async (req,res)=> {
    const { serverId, userId, time, reason } = req.body
    const isServerId = serverId || process.env.SERVER_ID
    try {
        const server = await bot.client.guilds.fetch(isServerId)
        const user = await server.members.cache.get(userId)
        
        if(!server) return res.json({
                success: true,
                message: 'Server ID yok.'
            })
        
        if(!userId) return res.json({
                success: true,
                message: "Kullanıcı ID'si yok."
            })
        await user.timeout(Number(time), reason)
    
        return res.json({
            message: 'Kullanıcıya zamanaşımı uygulandı',
            success: true,
    
        })
    } catch (err) {
        console.log('error', err)
    }

}


const UserRolesActions = async (req,res)=> {
    const { serverId, userId, roles, isDelete } = req.body
    const isServerId = serverId || process.env.SERVER_ID
    try {
        const server = await bot.client.guilds.fetch(isServerId)
        var user = await server.members.cache.get(userId)
		
        if(!server) return res.json({
                success: true,
                message: 'Server ID yok.'
        })
        
        if(!userId) return res.json({
                success: true,
                message: "Kullanıcı ID'si yok."
        })

		
		roles.map(async (role)=>{
			let target = await server.roles.fetch(role)
			if(!target) return res.json({
				success: true,
				message: "Role yok."
			})
			if(isDelete){
				await user.roles.add(target)
				return
			} 
			await user.roles.remove(target)
			
			
		})
        
    
        return res.json({
            message: 'Roller eklendi.',
            success: true,
    
        })
    } catch (err) {
        console.log('error', err)
    }

}

export {
    Ban,
    Kick,
    Unban,

    Timeout,
	UserRolesActions

}
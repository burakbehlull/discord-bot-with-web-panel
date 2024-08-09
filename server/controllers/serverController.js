import 'dotenv/config'
import { bot } from '../index.js'


const Index = async (req,res)=> {
    const { serverId } = req.body
    const isServerId = serverId || process.env.SERVER_ID
    try {
		if(!serverId) return res.json({
                success: true,
                message: "Server ID'si yok."
        })
        const server = await bot.client.guilds.fetch(isServerId)
        
        const roles = await server.roles.fetch()
        const channels = await server.channels.fetch()
        const members = await server.members.fetch()
		
        if(!server) return res.json({
                success: true,
                message: 'Böyle bir Server yok.'
        })
        
        
        
    
        return res.json({
            message: 'Veriler başarıyla getirildi',
            success: true,
			channels: channels,
            roles: roles,
            members: members
        })

    } catch (err) {
        console.log('error', err)
    }

}


const GetRolesAll = async (req,res)=> {
    const { serverId } = req.body
    const isServerId = serverId || process.env.SERVER_ID
    try {
		if(!serverId) return res.json({
                success: true,
                message: "Serveer ID'si yok."
        })
        const server = await bot.client.guilds.fetch(isServerId)
        const serverRoles = await server.roles.fetch()
		
        if(!server) return res.json({
                success: true,
                message: 'Böyle bir Server yok.'
         })
        
        
        
    
        return res.json({
            message: 'Roller başarıyla alındı.',
            success: true,
			data: serverRoles
    
        })
    } catch (err) {
        console.log('error', err)
    }

}


const GetChannelAll = async (req,res)=> {
    const { serverId } = req.body
    const isServerId = serverId || process.env.SERVER_ID
    try {
		if(!serverId) return res.json({
                success: true,
                message: "Serveer ID'si yok."
        })
        const server = await bot.client.guilds.fetch(isServerId)
        const serverChannels = await server.channels.fetch()
		
        if(!server) return res.json({
                success: true,
                message: 'Böyle bir Server yok.'
         })
        
        
        
    
        return res.json({
            message: 'Roller başarıyla alındı.',
            success: true,
			data: serverChannels
    
        })
    } catch (err) {
        console.log('error', err)
    }

}

export {
    Index,
    GetRolesAll,
    GetChannelAll
}
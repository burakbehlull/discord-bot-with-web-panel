import 'dotenv/config'
import { bot } from '../index.js'


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

export {
    GetRolesAll
}
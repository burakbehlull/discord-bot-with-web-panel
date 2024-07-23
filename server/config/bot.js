import { Client, GatewayIntentBits } from 'discord.js'

export default function Bot(token){
    const client = new Client({
        intents: Object.keys(GatewayIntentBits).map((intent) => GatewayIntentBits[intent])
    })
    client.login(token)
    
}
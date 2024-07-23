import { Client, GatewayIntentBits } from 'discord.js'

export default function Bot(token){
    const client = new Client({
        intents: Object.keys(GatewayIntentBits).map((intent) => GatewayIntentBits[intent])
    })
    client.login(token)
    .then(()=> console.log('Giriş yapıldı'))
    .catch(err=> {
        console.log('Hata: ', err)
    })
    return client
}
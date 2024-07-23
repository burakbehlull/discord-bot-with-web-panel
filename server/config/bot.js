import { ActivityType, Client, GatewayIntentBits } from 'discord.js'

export default class Bot {
    constructor(token){
        this.token = token
        this.client = new Client({
            intents: Object.keys(GatewayIntentBits).map((intent) => GatewayIntentBits[intent])
        })
    }
    connect() {
        this.client.login(this.token)
        .then(()=> console.log('Giriş yapıldı'))
        .catch(err=> {
            console.log('Hata: ', err)
        })
    }
}
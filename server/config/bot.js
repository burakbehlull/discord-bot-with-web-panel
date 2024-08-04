import { Client, GatewayIntentBits } from 'discord.js'
import { fileURLToPath, pathToFileURL } from 'node:url'
import path from 'node:path'
import fs from 'fs'

export default class Bot {
    constructor(){
        this.client = new Client({
            intents: Object.keys(GatewayIntentBits).map((intent) => GatewayIntentBits[intent]),
        })
    }
    connect() {
        this.client.login(process.env.TOKEN)
        .then(()=> console.log('Giriş yapıldı'))
        .catch(err=> {
            console.log('Hata: ', err)
        })
    }
    async events(){
        const filename = fileURLToPath(import.meta.url)
        const dirname = path.dirname(filename)
        const eventsPath = path.join(dirname, '..', 'events')
        const eventsFiles = fs.readdirSync(eventsPath).filter((file) => file.endsWith('.js'));
        for (const file of eventsFiles) {
            const filePath = path.join(eventsPath, file)
            console.log(filePath)
            const fileUrl = pathToFileURL(filePath).href
            console.log(fileUrl)
            const event = await import(fileUrl)
            console.log(`${event.default?.name} yüklendi..`)

            if(event.default?.once){
                this.client.once(event.default.name, (...props)=> event.default?.func(this.client, ...props))
            } else {
                this.client.on(event.default.name, (...props)=> event.default?.func(this.client, ...props))

            }
        }
    }
}
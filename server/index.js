import express from 'express'
import cors from 'cors'
import morgan from 'morgan'
import 'dotenv/config'
import { DB, Bot } from './config/index.js'
import { authRoute, botRoute, userRoute } from './routers/index.js'
const app = express()

app.use(express.static('public'))
app.use(express.urlencoded({ extended:true }))
app.use(express.json())


app.use(cors({
    origin: true,
	credentials: true
}))
app.use(morgan('dev'))

DB()

export const bot = new Bot()
bot.connect()
bot.events()

app.get('/',(req,res)=>{
    res.send('hello public bot with web panel!')
})
app.use('/auth', authRoute)
app.use('/bot', botRoute)
app.use('/user', userRoute)

app.listen(process.env.PORT, ()=>{
    console.log(`Server is ${process.env.PORT} port started`)
})
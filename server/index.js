import express from 'express'
import cors from 'cors'
import morgan from 'morgan'
import 'dotenv/config'
import { Bot } from './config/index.js'

const app = express()

app.use(express.static('public'))
app.use(express.urlencoded({ extended:true }))
app.use(express.json())


app.use(cors({
    origin: true,
	credentials: true
}))
app.use(morgan('dev'))

const bot = new Bot(process.env.TOKEN)
bot.connect()

app.get('/',(req,res)=>{
    res.send('hello public bot with web panel!')
})

app.listen(process.env.PORT, ()=>{
    console.log(`Server is ${process.env.PORT} port started`)
})
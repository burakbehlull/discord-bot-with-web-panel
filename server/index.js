import express from 'express'
import cors from 'cors'
import 'dotenv/config'


const app = express()

app.use(express.static('public'))
app.use(express.urlencoded({extended:true}))
app.use(express.json())

app.use(cors({
    origin: true,
	credentials: true
}))

app.get('/',(req,res)=>{
    res.send('hello public bot with web panel!')
})

app.listen(process.env.PORT, ()=>{
    console.log(`Server is ${process.env.PORT} port started`)
})
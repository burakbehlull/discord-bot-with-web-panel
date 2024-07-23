const express = require('express')
require('dotenv').config()


const app = express()

app.get('/',(req,res)=>{
    res.send('hello public bot with web panel!')
})

app.listen(process.env.PORT, ()=>{
    console.log(`Server is ${process.env.PORT} port started`)
})
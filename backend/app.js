const express = require('express')
const cors = require('cors');
const { db } = require('./db/db');
const app = express()
const mongoose = require('mongoose')
const User = require('./models/userModel.js')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')

require('dotenv').config()

const PORT = process.env.PORT

//middlewares
app.use(express.json())
app.use(cors())


app.get('/',(req,res)=>{
    res.send('hELLO')
})

//routes

app.use('/api/v1', require('./routes/transactions'));
app.use('/api/users', require('./routes/userRoutes'));


const server = () => {
    db()
    app.listen(PORT, () => {
        console.log('listening to port:', PORT)
    })
}

server()
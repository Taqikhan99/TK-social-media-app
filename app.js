const { request } = require('express')
const express = require('express')
const mongoose=require('mongoose')
const helmet=require('helmet')
const dotenv= require('dotenv')
const cors= require('cors')
const morgan = require('morgan');
const userRouter = require('./routes/users.routes')
const authRouter = require('./routes/auth.routes')


const app = express()

dotenv.config()

// middlewares
app.use(cors())
app.use(express.json())
app.use(helmet())
app.use(morgan('common'))


// routers
app.use('/users',userRouter)
app.use('/auth',authRouter)

mongoose.connect(process.env.MONGO_URL)
.then(()=>console.log('Successfully connected to database!'))
.then(()=>app.listen(8000))
.catch((err)=>console.log(err))

// starting SERV

// app.listen(8000,()=>console.log(`Server running at port 8000`))
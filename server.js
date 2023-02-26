const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
const bodyParser = require("body-parser")
const dotenv =require('dotenv')
const connectDb = require('./config/connectDb')

dotenv.config()

//database
connectDb()

const PORT=8080||process.env.PORT


const app = express()

app.use(
    bodyParser.urlencoded({
        extended: false
    })
);

app.use(bodyParser.json());
app.use(morgan('dev'))
app.use(express.json())
app.use(cors())


//routes
app.use('/api/v1/users', require('./routes/userRoute'))



//listening server
app.listen(PORT,()=>{
    console.log(`server is running on port ${PORT}`)
})
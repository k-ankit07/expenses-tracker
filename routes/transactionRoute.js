const express= require('express')
const { addTransaction, getAllTransaction } = require('../controllers/transcationController')


const router = express.Router()

//routes
//add transaction
router.post('/add-transaction', addTransaction)

//get transaction
router.post('/get-transaction', getAllTransaction)

module.exports= router
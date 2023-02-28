const express= require('express')
const { addTransaction, getAllTransaction,editTransaction } = require('../controllers/transcationController')


const router = express.Router()

//routes
//add transaction
router.post('/add-transaction', addTransaction)

//edit transaction
router.post('/edit-transaction', editTransaction)

//get transaction
router.post('/get-transaction', getAllTransaction)

module.exports= router
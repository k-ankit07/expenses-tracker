const { async } = require('rxjs')
const transactionsModel = require('../models/transaction')

const getAllTransaction = async(req,res) =>{
    try {
        const transactions = await transactionsModel.find({userId:req.body.userId})
        res.status(200).json(transactions)
    } catch (error) {
        console.log(error)
        res.status(500).json(error)
    }

}
 
const addTransaction = async(req,res) =>{
    try {
        const newTransaction = new transactionsModel(req.body)
        await newTransaction.save()
        res.status(201).send('Transactions Created')
    } catch (error) {
        console.log(error)
        res.status(500).json(error)
        
    }

}

module.exports = {getAllTransaction,addTransaction}
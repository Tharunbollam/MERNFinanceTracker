const asyncHandler = require('express-async-handler')

const ExpenseSchema = require("../models/ExpenseModel")

const User = require('../models/userModel')

const addExpense=asyncHandler(async (req, res) => {
   
    const {title, amount, category, description, date}  = req.body

    const user=req.user.id;

    const income = ExpenseSchema({
        user,
        title,
        amount,
        category,
        description,
        date
    })

    try {
        //validations
        if(!title || !category || !description || !date){
            return res.status(400).json({message: 'All fields are required!'})
        }
        if(amount <= 0 || !amount === 'number'){
            return res.status(400).json({message: 'Amount must be a positive number!'})
        }
        await income.save()
        res.status(200).json({message: 'Expense Added'})
    } catch (error) {
        res.status(500).json({message: 'Server Error'})
    }

    console.log(income)
})





const getExpense=asyncHandler(exports.getExpense = async (req, res) =>{
    try {
        const expenses = await ExpenseSchema.find({user:req.user.id}).sort({createdAt: -1})
        res.status(200).json(expenses)
    } catch (error) {
        res.status(500).json({message: 'Server Error'})
    }
})



const deleteExpense=asyncHandler(exports.deleteExpense = async (req, res) =>{
    const {id} = req.params;

    const item=await ExpenseSchema.findById(id);

    if(!item){
        res.status(400)
        throw new Error('Goal not found')
    }

    if (!req.user) {
        res.status(401)
        throw new Error('User not found')
    }

    if (item.user.toString() !== req.user.id) {
        res.status(401)
        throw new Error('User not authorized')
    }
    
    ExpenseSchema.findByIdAndDelete(id)
        .then((income) =>{
            res.status(200).json({message: 'Expense Deleted'})
        })
        .catch((err) =>{
            res.status(500).json({message: 'Server Error'})
        })
})





module.exports={
    addExpense,
    getExpense,
    deleteExpense
}
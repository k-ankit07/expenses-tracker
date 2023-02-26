const users = require('../models/users.js')


const loginController = async(req,res)=>{
    try {
        const {email,password}= req.body
        const user = await users.findOne({email,password})
        if(!user){
            res.status(400).send('User Not Found')
        }
        res.status(200).json({
            success:true,
            user,
        })
    } catch (error) {
        res.status(400).json({
            success:false,
            error,
        })
    }
}
const registerController = async(req,res)=>{
    try {
        const newUser = new users(req.body)
        await newUser.save()
        res.status(201).json({
            success:true,
            newUser,
        })
    } catch (error) {
        res.status(400).json({
            success:false,
            error,
        })
    }

}
module.exports = { loginController, registerController };
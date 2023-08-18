const express = require("express");

const router = express.Router();

const User = require("../models/User");

//  for signin when user hits the api it calls and perform the certain action to store in database atlas (mongodb)
router.post('/signup',async(req,res)=>
{
    try {
        const { email , password , confirmpassword  } = req.body;

        const newUser = new User({email , password , confirmpassword});
        console.log(newUser);
        await newUser.save();

        res.status(201).json ({message:'User Registered Successfullyy'});


    } 
    catch (error) 
    {
        console.error(error);
        res.status(500).json({message:'Internal Servar error'});
        
    }
});
//  when user login in this api hits 
// router.post('/login',async(req,res)=>{
    
// try
//  {
//     const {email , password} = req.body;

//     const checkUser = await User.findOne( { email } );
    
    
//     if(!checkUser)
//     {
//         res.status(401).json( { message :'User' } )
//     }

// } 
// catch (error)
//  {
    
// }

// })




module.exports=router;


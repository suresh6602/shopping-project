
const mongoose = require("mongoose");
const bcyrpt = require("bcrypt");
const createSchema = new mongoose.Schema(
    {
        email: {type: String, required:true , unique: true},

        password: {type: String , required : true},

        confirmpassword : { type:String , required:true }
    }
);
// for comparing the password  in database..............

// createSchema.methods.comPassword = async function(UserPassword)
// {
//     return await bcyrpt.compare(UserPassword , this.password);
// };
const User = mongoose.model('User',createSchema);

module.exports=User;
const mongoose =require("mongoose");

const developerSchema = mongoose.Schema({
    username:{
        type:String,
        //required :true
    },
    authKey:{
        type:String
    },
    password:{
        type:String,

    }
});
module.exports=mongoose.model('developer',developerSchema);
// module.exports = mongoose.model('user', userSchema);

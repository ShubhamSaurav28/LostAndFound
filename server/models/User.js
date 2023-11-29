const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username : {
        type : String,
        required : true,
        trim : true,
    },
    useremail : {
        type : String,
        required : true,
        trim : true,
        unique : true,
    },
    phoneno : {
        type : Number,
        required : true,
        trim : true,
    },
    password : {
        type  : String,
        required : true,
        trim : true,
    },
    // lostItems : [
    //     {
    //         type : mongoose.Schema.Types.ObjectId,
    //         ref : 'LostItem'
    //     }
    // ],
    // foundItems : [
    //     {
    //         type : mongoose.Schema.Types.ObjectId,
    //         ref : 'FoundItem'
    //     }
    // ]

})


let User = new mongoose.model('User',userSchema);
module.exports = User;
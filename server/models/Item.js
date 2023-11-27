const mongoose = require('mongoose');
const {Schema,model} = mongoose;


const itemSchema =new mongoose.Schema({
    itemname : {
        type : String,
        required : true,
        trim : true,
    },
    description: {
        type : String,
        trim : true,
    },
    catagory: {
        type : String,
    },
    useremail: {
        type : String
    },
    lof:{
        type : String
    },
    cover:{
        type : String,
    },
    by:{type:Schema.Types.ObjectId, ref:'User'},
    // img: {
    //     type : String
    // },


},{
    timestamps: true,
  })

let Item = new mongoose.model('Item',itemSchema);
module.exports = Item;
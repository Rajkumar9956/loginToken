
const mongoose = require('mongoose');

const ProductScheme = new mongoose.Schema({
    srNo:{
        type:String,
        // required:true/
    },
    customerName:{
        type:String,
        // required:true
    },
    productName:{
        type:String,
        // required:true
    },
    price:{
        type:Number,
        // required:true
    },
    numberOfProduct:{
        type:Number,
        // required:true
    },
    mobile:{
        type:String,
        // required:true
    },
   
    totalPrice:{
        type:Number,
        required:true
    },
    paidAmount:{
        type:Number
    },
    remainingAmount:{
        type:Number
    },
    lastPaymentDate:{
        type:String,
        // required:true
    }
}
,{
    timestamps:true
}
)
const user = mongoose.model('product',ProductScheme)

module.exports =user;
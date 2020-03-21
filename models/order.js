const mongoose=require('mongoose');

const deliverySchema= new mongoose.Schema({
    date:{
        type:Date
    },
    time:{
        type:String
    },
    delType:{
        type:String
    }
});

const orderSchema = new mongoose.Schema({
    itemID : {
        type :String
    },
    deliveryAdd:{
        type :String
    },
    delivery:deliverySchema,
    message:{
        type:String
    },
    addons:{
        type:String
    },
    orderTotal:{
        type:Number
    }
});

const Order=mongoose.model('Order',orderSchema);

module.exports = Order;
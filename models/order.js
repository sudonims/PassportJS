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
    deliverTo : {
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
    price:{
        type:Number
    },
    currency:{
        type:String
    }
});

const Order=mongoose.model('Order',orderSchema);
const Delivery = mongoose.model('Delivery',deliverySchema);
module.exports = {
    Order:Order,
    Delivery:Delivery
}
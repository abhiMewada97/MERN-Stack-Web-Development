const mongoose = require('mongoose');
const {Schema} = mongoose;

main().then (()=>{
    console.log("connection successful");
}).catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/relationDemo');
}

const orderSchema = new Schema ({
    item: String,
    price: Number,
});

const customerSchema = new Schema ({
    name: String,
    orders: [
        {
            type: Schema.Types.ObjectId,
            ref: "Order",
        },
    ],
});

const Order = mongoose.model("Order",orderSchema);
const Customer = mongoose.model("Customer",customerSchema);

const findCustomer = async ()=> {
    
    let result = await Customer.find({}).populate("orders");  
    console.log(result[0]);
};

// findCustomer();

const addCust = async () => {
    let newCust = new Customer({
        name: "Karab Arjun",
    });

    let newOrder = new Order({
        item: "Pizza",
        price: 250,
    });

    newCust.orders.push(newOrder);

    let result1 = await newCust.save();
    let result2 = await newOrder.save();
    console.log("Added Customer");
};

const deleteCust = async ()=> {
    let data = await Customer.findByIdAndDelete('65a5e8b17ee9da1b8a50867c');
    console.log(data);
}

// addCust();
deleteCust();

// const addOrder = async ()=> {

//     let result = await Order.insertMany([
//         {item: "Samosha", price: 12},
//         {item: "Chips", price: 10},
//         {item: "Chocolate", price: 40},
//     ]);
//     console.log(result);
// };

// addOrder();
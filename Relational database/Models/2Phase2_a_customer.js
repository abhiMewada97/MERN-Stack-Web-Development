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

customerSchema.pre("findOneAndDelete", async() =>{
    console.log("Pre Middleware ");
});

// customerSchema.post("findOneAndDelete", async() =>{
//     console.log("Post Middleware ");
// });

customerSchema.post("findOneAndDelete", async (customer) => {
    if(customer.orders.length) {
        let res = await Order.deleteMany({_id: {$in: customer.orders}});
        console.log(res);
    }
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
        name: "Arjun",
    });

    let newOrder = new Order({
        item: "chalo food",
        price: 200,
    });

    newCust.orders.push(newOrder);

    let result1 = await newCust.save();
    let result2 = await newOrder.save();
    console.log("Added Customer");
};

const delCust = async ()=> {
    let data = await Customer.findByIdAndDelete('65a5f91aae5e1db74bd611b4');
    console.log(data);
}

// addCust();
delCust();

// const addOrder = async ()=> {

//     let result = await Order.insertMany([
//         {item: "Samosha", price: 12},
//         {item: "Chips", price: 10},
//         {item: "Chocolate", price: 40},
//     ]);
//     console.log(result);
// };

// addOrder();
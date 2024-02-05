const dotenv = require("dotenv");

dotenv.config();

const mongoose = require('mongoose');
const pass = process.env.password;
// console.log(pass);
exports.connectMongoose =()=>{
    mongoose.set("strictQuery", false);
    mongoose.connect(`mongodb+srv://raghava:${pass}@cluster0.mwu6aa5.mongodb.net/habittracker`)
    .then((e)=>console.log("Connected to Mongodb => Habit-Tracker"))
    .catch((e)=>console.log("Error in connecting to MongoDB: ", e));
}

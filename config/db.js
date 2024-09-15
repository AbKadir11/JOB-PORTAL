import mongoose from "mongoose";

// import pkg from 'mongoose';
// const { Connection, Mongoose } = pkg;
import colors from 'colors';

//const mongoose = require('mongoose');
//const Connection = mongoose.Connection;

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URL)
        console.log(`Connected to MongoDB Database ${mongoose.connection.host}`.bgMagenta.white)
    } catch (error) {
        console.log(`MongoDB Error ${error}`.bgRed.white)
    }
} 


export default connectDB;
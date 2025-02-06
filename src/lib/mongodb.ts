import { error } from "console";
import mongoose from "mongoose";
import { Monofett } from "next/font/google";
import { buffer } from "stream/consumers";
const MONOGODB_URI  = process.env.MONGO;

if(!MONOGODB_URI){
    throw new Error ("please define mongo enviroment variable")
}
async function connectToDatabase() {
    try {
        if (mongoose.connection.readyState === 1) {
            return mongoose;
        }
        const opts = {
            bufferCommands: false,
        };
        await mongoose.connect(MONOGODB_URI!, opts);
        console.log("Connected to MongoDB");
        
    } catch (err) {
        console.error("Failed to connect to MongoDB", err);
        throw new Error("Database connection error");
    }
}
export default connectToDatabase;
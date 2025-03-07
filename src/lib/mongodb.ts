
import mongoose from "mongoose";
const MONOGODB_URI  = process.env.MONGO as string;

if(!MONOGODB_URI){
    throw new Error ("please define mongo enviroment variable")
}
async function connectToDatabase() {
    try {
        if (mongoose.connection.readyState === 1) {
            return mongoose;
        }
        console.log("⏳ Connecting to MongoDB...");
    await mongoose.connect(MONOGODB_URI, {
      dbName: "test", // Optional: specify a database name
    });
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
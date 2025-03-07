import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI as string;

if (!MONGODB_URI) {
  throw new Error("❌ MONGODB_URI is missing in environment variables");
}

// Global cache to prevent multiple connections
let cached = (global as any).mongoose || { conn: null, promise: null };

export default async function connectToAdminDatabase() {
  if (cached.conn) {
    console.log("✅ Using existing Admin DB connection");
    return cached.conn;
  }

  if (!cached.promise) {
    console.log("⏳ Connecting to Admin DB...");
    cached.promise = mongoose
      .connect(MONGODB_URI, {
        dbName: "test", // ✅ Connect to the correct Admin Database
      })
      .then((mongoose) => {
        console.log("✅ Admin Database connected successfully");
        return mongoose;
      })
      .catch((err) => {
        console.error("🔥 Admin DB Connection Error:", err);
        throw err;
      });
  }

  cached.conn = await cached.promise;
  return cached.conn;
}

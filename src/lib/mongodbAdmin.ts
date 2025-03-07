import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI as string;

interface GlobalWithMongoose {
  mongoose: {
    conn: typeof mongoose | null;
    promise: Promise<typeof mongoose> | null;
  };
}

if (!MONGODB_URI) {
  throw new Error("❌ MONGODB_URI is missing in environment variables");
}

// Global cache to prevent multiple connections
const cached = (global as unknown as GlobalWithMongoose).mongoose || { conn: null, promise: null };

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

  try {
    cached.conn = await cached.promise;
  } catch (err) {
    cached.promise = null; // Reset the promise if connection fails
    throw err;
  }

  return cached.conn;
}
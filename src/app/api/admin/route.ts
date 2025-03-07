import { NextResponse } from "next/server";
import connectToDatabase from "@/lib/mongodbAdmin"
import AdminUser from "@/lib/models/adminUser";
import bcrypt from "bcryptjs";

export async function POST(request: Request) {
  try {
    console.log("📌 API Route Hit for Admin Login");

    // ✅ Ensure connection to Admin DB
    const adminDB = await connectToDatabase();
    if (!adminDB) {
      console.error("❌ Failed to connect to Admin DB");
      return NextResponse.json({ error: "Database connection failed" }, { status: 500 });
    }

    const { email, password } = await request.json();
    console.log("📌 Received Email:", email);
    console.log("📌 Received Email:", password);

    // ✅ Use the adminDB connection to fetch the model safely
    const AdminModel = adminDB.models?.AdminUser || adminDB.model("AdminUser", AdminUser.schema);
    const adminUser = await AdminModel.findOne({ email });

    if (!adminUser) {
      console.log("❌ Admin not found for email:", email);
      return NextResponse.json({ error: "Invalid credentials" }, { status: 401 });
    }

    // ✅ Ensure password is a valid string
    const hashedPassword = adminUser.password as string | undefined;
    if (!hashedPassword) {
      console.log("❌ Admin password is missing or invalid");
      return NextResponse.json({ error: "Invalid credentials" }, { status: 401 });
    }

    // ✅ Compare hashed password
    const isMatch = await bcrypt.compare(password, hashedPassword);
    console.log("🔄 Password Match Result:", isMatch);

    if (!isMatch) {
      console.log("❌ Password did not match");
      return NextResponse.json({ error: "Invalid credentials" }, { status: 401 });
    }
    console.log("Stored Hashed Password in DB:", adminUser.password);
console.log("Entered Password Before Hashing:", password);


    console.log("✅ Admin Login Successful");
    return NextResponse.json({ message: "Login successful" }, { status: 200 });

  } catch (error) {
    console.error("🔥 Login error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}

import mongoose,{Document,Model} from "mongoose";

interface IUser extends Document{
    name:string;
    email:string;
    password?:string;
    id:string;
    image:string;
}

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  image: { type: String, default: null }, // Optional image field
  role: { type: String, enum: ["user", "admin"], default: "user" }, // Role field
});

userSchema.statics.createAdminUser = async function () {
  const adminEmail = "pabitra79@gmail.com";
  const adminPassword = "pabitra123"; // Replace with a strong password

  const existingAdmin = await this.findOne({ email: adminEmail });
  if (!existingAdmin) {
    await this.create({
      name: "Admin",
      email: adminEmail,
      password: adminPassword,
    });
    console.log("Admin user created successfully!");
  } else {
    console.log("Admin user already exists.");
  }
};

const User :Model<IUser> = mongoose.models.User || mongoose.model<IUser>("User",userSchema)

export default User;
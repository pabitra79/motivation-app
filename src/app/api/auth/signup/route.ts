import bcrypt from "bcryptjs";
import { NextResponse } from "next/server";
import User from "@/lib/models/user";
import connectToDatabase from "@/lib/mongodb";
import { error } from "console";



export async function POST (request:Request){
    const {name,email,password,confirmpassword} = await request.json();
    console.log('Signup request:', { name, email, password, confirmpassword });
    const isValidEmail =(email:string) =>{
        const emailRegex =/^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email)
    }
    if(!name || !email || !password || !confirmpassword ){
        return NextResponse.json({message:"All feild are required"},{status:400});
    }
    
    if(!isValidEmail(email)){
        return NextResponse.json({message:"Invalid email format"},{status:400});
    }

    if(password  !== confirmpassword ){
        return NextResponse.json({message:"password do not match"},{status:400});
    }

    if(password.length < 6){
        return NextResponse.json({message:"password should be 6 letter"},{status:400});
    }

    try {
        await connectToDatabase();
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            console.log('User already exists');
            return NextResponse.json({ message: "User already has an account" }, { status: 400 });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = new User({
            name,
            email,
            password: hashedPassword,
        });
        await newUser.save();
        console.log('User created successfully');
        return NextResponse.json({ message: "Account created successfully" }, { status: 201 });
    } catch (err) {
        console.error("Error during signup:", err);
        return NextResponse.json({ message: "Something went wrong" }, { status: 500 });
    }
}
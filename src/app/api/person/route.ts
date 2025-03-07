import { NextResponse } from "next/server";
import connectToDatabase from "@/lib/mongodb";
import Person from "../../../lib/models/person";

export async function POST(request: Request) {
  try {
    await connectToDatabase(); // Connect to MongoDB

    // Parse the request body
    const { name, quote, bio, image, imagePublicId, videoId, videoPublicId } = await request.json();
    // console.log("Request body:", { name, quote, bio, image, imagePublicId, videoId, videoPublicId });
    // Validate the data
    if (!name || !quote || !bio || !image || !imagePublicId || !videoId || !videoPublicId) {
      return NextResponse.json({ error: "All fields are required" }, { status: 400 });
    }

    // Save person data to MongoDB
    const newPerson = new Person({
      name,
      quote,
      bio,
      image, // Matches the schema
      imagePublicId,
      videoId, // Matches the schema
      videoPublicId,
    });

    await newPerson.save();

    return NextResponse.json(
      {
        message: "Person created successfully",
        person: newPerson,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error in POST /api/person:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
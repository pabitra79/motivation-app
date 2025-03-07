import Person from "@/lib/models/person";
import connectToDatabase from "@/lib/mongodb";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    await connectToDatabase();

    // Fetch people data from MongoDB
    const people = await Person.find();

    // Transform MongoDB data to match the expected structure
    const transformedPeople = people.map((person) => ({
      display_name: person.name, // Name from MongoDB
      url: person.videoId, // Video URL from MongoDB
      public_id: person._id, // Unique ID
      image: person.image, // Image from MongoDB
      quote: person.quote, // Quote from MongoDB
      bio:
        typeof person.bio === "string"
          ? { summary: person.bio, sections: [] } // Convert string bio to object
          : person.bio, // Use as-is if already an object
    }));

    // Send transformed data to the frontend
    return NextResponse.json({ success: true, data: transformedPeople }, { status: 200 });
  } catch (error) {
    console.log("Error fetching Data:", error);
    return NextResponse.json({ success: false, error: "Failed to fetch data" }, { status: 500 });
  }
}

// Add this to fix 405 error
export async function OPTIONS() {
  return NextResponse.json({}, { status: 200 });
}
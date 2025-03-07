import { NextResponse } from "next/server";
import cloudinary from "cloudinary";

// Configure Cloudinary
cloudinary.v2.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME!,
  api_key: process.env.CLOUDINARY_API_KEY!,
  api_secret: process.env.CLOUDINARY_API_SECRET!,
});

export async function GET() {
  try {
    // Fetch videos from the "motivate-video" folder
    const result = await cloudinary.v2.search
      .expression("folder:motivation_person AND resource_type:video") // Adjust folder name if needed
      .sort_by("created_at", "desc")
      .max_results(100)
      .execute();

    // Log the result for debugging


    // Check if resources exist
    if (!result.resources || result.resources.length === 0) {
      return NextResponse.json({ error: "No videos found" }, { status: 404 });
    }

    // Map the resources to the required format
    const videos = result.resources.map((video: any) => ({
      url: video.secure_url,
      public_id: video.public_id,
      display_name: video.display_name || "Untitled", // Fallback for missing display_name
    }));

    return NextResponse.json({ videos });
  } catch (error) {
    // Log the actual error for debugging
    console.error("Error in GET /api/getVideo:", error);

    return NextResponse.json(
      { error: "Failed to fetch videos. Please check the server logs for details." },
      { status: 500 }
    );
  }
}
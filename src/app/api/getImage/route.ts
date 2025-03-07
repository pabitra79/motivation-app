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
    // Fetch all images from the root folder
    const result = await cloudinary.v2.search
      .expression("resource_type:image") // No folder condition
      .sort_by("created_at", "desc")
      .max_results(100)
      .execute();

    // console.log("Cloudinary Search Result:", result);

    // Check if resources exist
    if (!result.resources || result.resources.length === 0) {
      return NextResponse.json({ error: "No images found" }, { status: 404 });
    }

    // Map the resources to the required format
    const images = result.resources.map((image: any) => ({
      url: image.secure_url,
      public_id: image.public_id,
    }));

    return NextResponse.json({ images });
    
  } catch (error) {
    console.error("Error in GET /api/getImage:", error);
    return NextResponse.json({ error: "Failed to fetch images" }, { status: 500 });
  }
}
// https://res.cloudinary.com/motivate-reel/image/upload/v1740739858/adani_anlrnl.webp
// https://res.cloudinary.com/motivate-reel/image/upload/v1740804740/adani_vswbqq.webp

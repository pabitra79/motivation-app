import { NextResponse } from "next/server";
import cloudinary from "cloudinary";

cloudinary.v2.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME!,
  api_key: process.env.CLOUDINARY_API_KEY!,
  api_secret: process.env.CLOUDINARY_API_SECRET!,
});

export async function GET(req: Request) {
  try {
    // Fetch all videos
    const result = await cloudinary.v2.search
      .expression("folder:motivation_person AND resource_type:video") // Remove folder filter temporarily
      .sort_by("created_at", "desc")
      .max_results(50)
      .execute();

    // Filter videos using public_id and display_name directly
    const videos = result.resources.map((video: any) => ({
      url: video.secure_url,
      public_id: video.public_id,
      display_name: video.display_name,
    }));

    return NextResponse.json({ videos });
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch videos" }, { status: 500 });
  }
}

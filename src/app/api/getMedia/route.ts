import { NextResponse } from "next/server";
import cloudinary from "cloudinary";

cloudinary.v2.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME!,
  api_key: process.env.CLOUDINARY_API_KEY!,
  api_secret: process.env.CLOUDINARY_API_SECRET!,
});

export async function GET() {
  try {
    // Fetch only videos from the "motivate-video" folder
    const result = await cloudinary.v2.search
      .expression("folder:motivate-video AND resource_type:video")
      .sort_by("created_at", "desc")
      .max_results(100)
      .execute();

    const videos = result.resources.map((video:any) => ({
      url: video.secure_url,
      public_id: video.public_id,
    }));

    return NextResponse.json({ videos });
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch reels" }, { status: 500 });
  }
}

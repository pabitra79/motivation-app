"use server"
import { v2 as cloudinary } from 'cloudinary';

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export async function upload(previousState: string | undefined | null, formData: FormData) {
  const file = formData.get('video') as File;
  if (!file) {
    console.error("No file found in formData");
    return null;
  }

  try {
    const buffer = Buffer.from(await file.arrayBuffer());
    const base64String = buffer.toString('base64'); // Remove the data URI prefix

    console.log(`The file: ${previousState} is uploading...`);

    const response = await cloudinary.uploader.upload(`data:${file.type};base64,${base64String}`, {
      resource_type: 'video',
      public_id: 'my_video',
    });

    previousState = response.secure_url;
    return previousState;
  } catch (error: any) {
    console.error("Upload error:", error);
    return null;
  }
}

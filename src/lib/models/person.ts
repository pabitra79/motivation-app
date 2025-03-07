import mongoose from "mongoose";

const personSchema = new mongoose.Schema({
  name: { type: String, required: true },
  image: { type: String, required: true }, // URL of the image
  quote: { type: String, required: true },
  bio: {
    type: mongoose.Schema.Types.Mixed, // Allow both string and object
    required: true,
  },
  videoId: { type: String, required: true }, // URL of the video
  videoPublicId: { type: String, required: true }, // Public ID of the video
  imagePublicId: { type: String, required: true }, // Public ID of the image
});

const Person = mongoose.models.Person || mongoose.model("Person", personSchema);
export default Person;

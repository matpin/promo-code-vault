import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const URI = String(process.env.DB_URI);

if (!URI) {
  throw new Error("Database URI is missing. Please check your .env file.");
}

// MongoDB connection function
const connectDB = async () => {
  try {
    await mongoose.connect(URI);
    console.log("Database connected successfully");
  } catch (err) {
    process.exit(1);
  }
};

export default connectDB;

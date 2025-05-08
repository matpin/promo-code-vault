import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const URI = String(process.env.DB_URI);

if (!URI) {
  throw new Error("Database URI is missing. Please check your .env file.");
}

// MongoDB connection
const connectDB = async () => {
  try {
    await mongoose.connect(URI);
    console.log("Database connected successfully");
  } catch (error) {
    throw error;
  }
};

export default connectDB;

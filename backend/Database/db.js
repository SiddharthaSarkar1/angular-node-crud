import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    const conn = mongoose.connect(process.env.MONGO_URI);
    console.log(`MongoDB connected: ${(await conn).Connection.host}`);
  } catch (error) {
    console.log(`Error connecting MongoDB: ${error.message}`);
    process.exit(1);
  }
};

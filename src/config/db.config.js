import mongoose from "mongoose";

const connectDatabase = async () => {
  try {
    const connectionInstance = await mongoose.connect(process.env.MONGO_URI);

    console.log(`Database connected successfully: ${connectionInstance.connection.host}`);
  } catch (error) {
    console.error("Database connection failed:", error.message);
    process.exit(1);
  }
};

export { connectDatabase };
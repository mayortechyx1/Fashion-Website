import mongoose from "mongoose";

const connectDB = async()=>{
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`Mongo Database connected: ${conn.connection.host}`.cyan.underline);
  } catch (error) {
    console.log(`Database not connected: ${error}`);
    process.exit(1);
  }
}

export default connectDB;
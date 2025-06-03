import mongoose from "mongoose";
import { MONGO_URI, NODE_ENV } from "../config/env.js";

if (!MONGO_URI) {
  throw new Error(
    "Please define the MONGODB_URI environment variable inside .env<development/production>.local"
  );
}

const connectToDB = async () => {
  try {
    const conn = await mongoose.connect(MONGO_URI);
    console.log(
      `Connected to Database in ${NODE_ENV} mode on host: ${conn.connection.host}`
    );
  } catch (error) {
    console.log("Error while connecting to the database: ", error);
    process.exit(1); // exits if database connection fails & prevents the app from running further
  }
};

export default connectToDB;

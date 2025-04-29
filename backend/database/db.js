import mongoose from "mongoose";

export const mongodb = async () => {
  try {
    await mongoose.connect(process.env.MONGO_DB_URI); //"mongodb://i-notebook-db:27017",
    console.log("database up and running");
  } catch (e) {
    console.log("error", e);
  }
};

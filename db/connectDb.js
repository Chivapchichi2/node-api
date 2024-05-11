import { connect } from "mongoose";

export const connectDb = async () => {
  try {
    await connect(process.env.DB_URL);
    console.log("DB Connected successfully.");
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

import mongoose from "mongoose";

// const { MONGO_URI } = process.env;
// console.log(MONGO_URI);

// Connecting to the database
mongoose.set("strictQuery", true);
mongoose
  .connect(
    "mongodb+srv://harshit:harshit16@cluster0.wp4bidx.mongodb.net/?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => {
    console.log("Successfully connected to database");
  })
  .catch((error) => {
    console.log("database connection failed...exiting now...");
    console.error(error);
    process.exit(1);
  });
export const db = mongoose.connection;

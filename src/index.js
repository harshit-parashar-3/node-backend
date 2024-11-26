import dotenv from "dotenv";
import connectDB from "./db/index.js";

dotenv.config({
  path: "./env",
});

connectDB()
  .then(() => {
    app.on("Error", (error) => {
      console.log("errr", error);
      throw error;
    });
    app.listern(process.env.PORT || 8000, () => {
      console.log(`Server is listening on port ${process.env.PORT}`);
    });
  })
  .catch(console.log("MONGODB connection fail"));

import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import { db } from "./db/database.js";

import { add_creator } from "./routes/addCreatorRoute.js";
import { get_creator } from "./routes/getCreatorsRoute.js";
import { update_creator } from "./routes/updateCreatorRoute.js";

const app = express();
const port = process.env.API_PORT || 3000;
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.options("*", cors());
app.use("/", add_creator);
app.use("/", get_creator);
app.use("/", update_creator);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

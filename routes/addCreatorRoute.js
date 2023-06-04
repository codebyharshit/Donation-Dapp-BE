import express from "express";
import { addCreator } from "../controllers/addCreatorController.js";
export const add_creator = express.Router();

add_creator.route("/addCreator").post(addCreator);

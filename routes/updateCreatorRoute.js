import express from "express";
import { updateCreator } from "../controllers/updateCreatorController.js";
export const update_creator = express.Router();

update_creator.route("/updateCreator").put(updateCreator);

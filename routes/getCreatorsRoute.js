import express from "express";
import { getCreator } from "../controllers/getCreatorsController.js";
export const get_creator = express.Router();

get_creator.route("/getCreator").get(getCreator);

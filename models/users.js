import mongoose from "mongoose";

const userInfoSchema = new mongoose.Schema({
  name: { type: String },
  address: { type: String },
  file: { type: Object },
});

export const UserInfo = mongoose.model("UserInfo", userInfoSchema);

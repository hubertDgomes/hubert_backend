import mongoose from "mongoose";
import { Schema } from "mongoose";

const visitorsSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
});

export default mongoose.model("usersmessage" , visitorsSchema)
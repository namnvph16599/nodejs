import mongoose, { Schema } from "mongoose";

const userSchema = new Schema(
  {
    email: {
      type: String,
      required: true,
    },
    password: {
      type: Number,
      required: true,
      minLength: 8,
    },
    name: {
      type: String,
      required: true,
      minLength: 5,
    },
    phone: {
      type: Number,
      minLength: 10,
    },
    address: {
      type: String,
    },
  },
  { timestamps: true }
);

export default mongoose.model("user", userSchema);

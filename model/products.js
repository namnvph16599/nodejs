import mongoose, { Schema } from "mongoose";

const productsShema = new Schema(
  {
    name: {
      type: String,
      minLength: 5,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    cateId: {
      type: Number,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Product", productsShema);

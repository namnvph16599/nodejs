import mongoose, { Schema, ObjectId } from "mongoose";

const productsShema = new Schema(
  {
    name: {
      type: String,
      minLength: 5,
      required: true,
      unique: true,
      index: true,
    },
    price: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    description: {
      type: String,
    },
    quantity: {
      type: Number,
      required: true,
    },
    category: {
      type: ObjectId,
      ref: "Category",
    },
  },
  { timestamps: true } //thuộc tính lấy ra create at khi thêm sp và update at khi sửa
);
productsShema.index({'$**': 'text'});

export default mongoose.model("Product", productsShema);

import mongoose, { Schema } from "mongoose";
import { createHmac } from "crypto";
const userSchema = new Schema(
  {
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
      minLength: 8,
    },
    name: {
      type: String,
      required: true,
      minLength: 5,
    },
  },
  { timestamps: true }
);

// method ma hoa password
userSchema.methods = {
  encryPassword(password) {
    if (!password) return;
    try {
      return createHmac("sha256", "040202").update(password).digest("hex");
    } catch (err) {
      console.log(err);
    }
  },
  authenticate(password) {
    return this.password == this.encryPassword(password);
  },
};

// middware truoc khi exec .save() thi chay middware sau

userSchema.pre("save", function (next) {
  this.password = this.encryPassword(this.password);
  next();
});

export default mongoose.model("User", userSchema);

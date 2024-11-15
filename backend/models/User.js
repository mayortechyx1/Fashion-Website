import mongoose from "mongoose";

const userSchema = mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    cartData: { type: String, default: {} },
  },
  { timestamps: true, minimize: false }
);

const User = mongoose.model("User", userSchema);

export default User;

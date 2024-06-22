import mongoose from "mongoose"

const userSchema = new mongoose.Schema({
  name: {
    required: true,
    type: String,
  },
  kittyCatId: {
    type: mongoose.Schema.Types.ObjectId, ref: "KittyCat"
  }
})

export const UserModel = mongoose.model("User", userSchema)

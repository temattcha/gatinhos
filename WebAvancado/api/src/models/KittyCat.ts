import mongoose from "mongoose"

const kittyCatSchema = new mongoose.Schema({
  name: {
    required: true,
    type: String,
  },
  color: {
    required: true,
    type: String,
  },
  age: {
    required: true,
    type: Number,
  },
  weight: {
    required: false,
    type: Number,
  },
  isFelv: {
    required: false,
    type: Boolean,
  },
  species: {
    required: true,
    type: String,
  }
})

export const KittyCatModel = mongoose.model("KittyCat", kittyCatSchema)

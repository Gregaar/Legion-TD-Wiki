import mongoose from "mongoose";

const farmSchema = new mongoose.Schema({
  Name: {
    type: String,
    required: true,
  },
  Level: {
    type: Number,
    required: true,
  },
  Cost: {
    type: Number,
    required: true,
  },
  "Food Increase": {
    type: Number,
    required: true,
  },
  "Total Food": {
    type: Number,
    required: true,
  },
  "Build Time": {
    type: Number,
    required: true,
  },
});

farmSchema.methods.toJSON = function () {
  const farmObject = this.toObject();

  delete farmObject._id;

  return farmObject;
};

const Farm = mongoose.model("Farm", farmSchema);

export default Farm;

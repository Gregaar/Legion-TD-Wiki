import mongoose from "mongoose";

const builderSchema = new mongoose.Schema({
  Name: {
    type: String,
    required: true,
  },
  "Avatar ID": {
    type: String,
    required: true,
  },
  "Unit ID": {
    type: String,
    required: true,
  },
  Description: {
    type: String,
    required: true,
  },
  "Altar of Heroes": {
    type: Boolean,
    required: true,
  },
});

const Builder = mongoose.model("Builder", builderSchema);

export default Builder;

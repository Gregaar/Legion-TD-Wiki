import mongoose from "mongoose";

const kingSchema = new mongoose.Schema({
  Level: {
    type: Number,
    required: true,
  },
  "Hit Points": {
    type: Number,
  },
  "Min Hit": {
    type: Number,
    required: true,
  },
  "Max Hit": {
    type: Number,
    required: true,
  },
  Regeneration: {
    type: Number,
  },
});

const King = mongoose.model("King", kingSchema);

export default King;

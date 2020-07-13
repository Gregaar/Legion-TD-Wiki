import mongoose from "mongoose";

import KingInterface from "../../interfaces/legion/king-interface";

const kingSchema = new mongoose.Schema(
  {
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
    "Wood Spent": {
      type: Number,
      required: true,
    },
    "Income Gained": {
      type: Number,
      required: true,
    },
  },
  { collection: "king" },
);

kingSchema.methods.toJSON = function () {
  const kingObject = this.toObject();

  delete kingObject._id;

  return kingObject;
};

const King = mongoose.model<KingInterface>("King", kingSchema);

export default King;

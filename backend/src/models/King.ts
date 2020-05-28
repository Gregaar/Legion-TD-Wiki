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

kingSchema.methods.toJSON = function () {
  const kingObject = this.toObject();

  delete kingObject._id;

  return kingObject;
};

const King = mongoose.model("King", kingSchema);

export default King;

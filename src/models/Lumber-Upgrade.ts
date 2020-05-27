import mongoose from "mongoose";

const lumberUpgradeSchema = new mongoose.Schema({
  Training: {
    type: Number,
    required: true,
  },
  "Lumber per wisp tick": {
    type: Number,
    required: true,
  },
  "Lumber per wisp per minute": {
    type: Number,
    required: true,
  },
  "Gold Cost": {
    type: Number,
    required: true,
  },
  "Lumber Cost": {
    type: Number,
    required: true,
  },
});

const LumberUpgrade = mongoose.model("LumberUpgrade", lumberUpgradeSchema);

export default LumberUpgrade;

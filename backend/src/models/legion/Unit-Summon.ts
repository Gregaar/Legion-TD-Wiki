import mongoose from "mongoose";

const unitSummonSchema = new mongoose.Schema({
  Name: {
    type: String,
    required: true,
  },
  Summoner: {
    type: Array,
    required: true,
  },
  "Summoner Builder": {
    type: String,
    required: true,
  },
  "Base Min Hit": {
    type: Number,
    required: true,
  },
  "Base Max Hit": {
    type: Number,
    required: true,
  },
  "Attack Speed": {
    type: Number,
    required: true,
  },
  "Attack Speed Class": {
    type: String,
    required: true,
  },
  Range: {
    type: Number,
    required: true,
  },
  "Hit Points": {
    type: Number,
    required: true,
  },
  "Attack Type": {
    type: String,
    required: true,
  },
  "Defense Type": {
    type: String,
    required: true,
  },
  "Attack Effectiveness Order": {
    type: Array,
    required: true,
  },
  "Attack Strength": {
    type: String,
    required: true,
  },
  "Attack Weakness": {
    type: String,
    required: true,
  },
  "Defense Effectiveness Order": {
    type: Array,
    required: true,
  },
  "Defense Strength": {
    type: Array,
    required: true,
  },
  "Defense Weakness": {
    type: String,
    required: true,
  },
  Duration: {
    type: String,
    required: true,
  },
  ID: {
    type: String,
    required: true,
  },
});

unitSummonSchema.methods.toJSON = function () {
  const summonObject = this.toObject();

  delete summonObject._id;

  return summonObject;
};

const UnitSummon = mongoose.model("UnitSummon", unitSummonSchema);

export default UnitSummon;

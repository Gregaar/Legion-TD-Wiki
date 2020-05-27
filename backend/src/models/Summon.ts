import mongoose from "mongoose";

const summonSchema = new mongoose.Schema({
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
  Speed: {
    type: Number,
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
  "Attack Strength": {
    type: String,
    required: true,
  },
  "Attack Weakness": {
    type: String,
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
  "Avatar ID": {
    type: String,
    required: true,
  },
});

const Summon = mongoose.model("Summon", summonSchema);

export default Summon;

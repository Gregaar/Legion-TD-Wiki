import mongoose from "mongoose";

import WaveInterface from "../../interfaces/legion/wave-interface";

const waveSchema = new mongoose.Schema({
  Level: {
    type: Number,
    required: true,
  },
  "Creep Bounty": {
    type: Number,
    required: true,
  },
  "Number of Creeps": {
    type: Number,
    required: true,
  },
  "Gold from Creeps": {
    type: Number,
    required: true,
  },
  "Bonus Gold": {
    type: Number,
    required: true,
  },
  "Creep and Bonus": {
    type: Number,
    required: true,
  },
  "Total Gold": {
    type: Number,
    required: true,
  },
  "Creep Value": {
    type: Number,
    required: true,
  },
  "Min Hit": {
    type: Number,
    required: true,
  },
  "Max Hit": {
    type: Number,
    required: true,
  },
  "Hit Points": {
    type: Number,
    required: true,
  },
  Range: {
    type: String,
    required: true,
  },
  "Attack Type": {
    type: String,
    requird: true,
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
    type: Array,
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
  Type: {
    type: String,
    required: true,
  },
  Boss: {
    type: Boolean,
    required: true,
  },
  ID: {
    type: String,
    required: true,
  },
});

waveSchema.methods.toJSON = function () {
  const waveObject = this.toObject();

  delete waveObject._id;

  return waveObject;
};

const Wave = mongoose.model<WaveInterface>("Wave", waveSchema);

export default Wave;

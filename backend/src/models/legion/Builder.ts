import mongoose from "mongoose";

import { BuilderInterface } from "../../interfaces/legion/builder-interface";

const builderSchema = new mongoose.Schema({
  Name: {
    type: String,
    required: true,
  },
  ID: {
    type: String,
    required: true,
  },
  "Avatar ID": {
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
  Aura: {
    type: Number,
    required: true,
  },
  Buff: {
    type: Number,
    required: true,
  },
  Debuff: {
    type: Number,
    required: true,
  },
  Splash: {
    type: Number,
    required: true,
  },
  Heal: {
    type: Number,
    required: true,
  },
  Stun: {
    type: Number,
    required: true,
  },
  Summon: {
    type: Number,
    required: true,
  },
});

builderSchema.methods.toJSON = function () {
  const builderObject = this.toObject();

  delete builderObject._id;

  return builderObject;
};

builderSchema.set("toObject", { virtuals: true });

const Builder = mongoose.model<BuilderInterface>("Builder", builderSchema);

export default Builder;

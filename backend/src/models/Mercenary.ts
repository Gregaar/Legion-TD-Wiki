import mongoose from "mongoose";

import { MercenaryInterface } from "../interfaces/mercenary-interface";

const mercenarySchema = new mongoose.Schema({
  Name: {
    type: String,
    required: true,
  },
  "Lumber Cost": {
    type: Number,
    required: true,
  },
  "Income Bonus": {
    type: Number,
    required: true,
  },
  Location: {
    type: String,
    required: true,
  },
  "Minimum Wave": {
    type: Number,
    required: true,
  },
  "Unit Level": {
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
    type: Number,
    required: true,
  },
  "Melee / Ranged": {
    type: String,
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
  Mana: {
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
  "Unit Description": {
    type: String,
    required: true,
  },
  "Max Stock": {
    type: Number,
    required: true,
  },
  "Replenish Interval": {
    type: Number,
    required: true,
  },
  Abilities: {
    type: Array,
  },
  "Ability Type": {
    type: Array,
  },
  "Ability Description": {
    type: Array,
  },
  "Has Aura": {
    type: Boolean,
    required: true,
  },
  "Can Buff": {
    type: Boolean,
    required: true,
  },
  "Can Debuff": {
    type: Boolean,
    required: true,
  },
  "Can Splash": {
    type: Boolean,
    required: true,
  },
  "Can Heal": {
    type: Boolean,
    required: true,
  },
  "Can Stun": {
    type: Boolean,
    required: true,
  },
  "Can Summon": {
    type: Boolean,
    required: true,
  },
  "Land/Flying": {
    type: String,
    required: true,
  },
  ID: {
    type: String,
    required: true,
  },
});

mercenarySchema.methods.toJSON = function () {
  const mercenaryObject = this.toObject();

  delete mercenaryObject._id;

  return mercenaryObject;
};

const Mercanary = mongoose.model<MercenaryInterface>(
  "Mercenary",
  mercenarySchema,
);

export default Mercanary;

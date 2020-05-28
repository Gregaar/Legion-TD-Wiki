import mongoose from "mongoose";

import { UnitInterface } from "../interfaces/unit-interface";

const unitSchema = new mongoose.Schema({
  Name: {
    type: String,
    required: true,
  },
  Builder: {
    type: String,
    required: true,
  },
  "Unit Tier": {
    type: Number,
    required: true,
  },
  "Gold Cost": {
    type: Number,
    required: true,
  },
  "Food Cost": {
    type: Number,
    required: true,
  },
  Upgradeable: {
    type: Boolean,
    required: true,
  },
  "Max Upgrade Gold Cost": {
    type: Number,
    required: true,
  },
  "Total Food Cost with Upgrade": {
    type: Number,
    required: true,
  },
  "Base Unit Name": {
    type: Array,
  },
  "Upgraded Name": {
    type: Array,
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
  "Melee / Ranged": {
    type: String,
  },
  "Hit Points": {
    type: Number,
    required: true,
  },
  Mana: {
    type: Number,
    required: true,
  },
  "Attack Type": {
    type: String,
  },
  "Defense Type": {
    type: String,
  },
  "Attack Strength": {
    type: String,
  },
  "Attack Weakness": {
    type: Array,
  },
  "Defense Strength": {
    type: Array,
  },
  "Defense Weakness": {
    type: Array,
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
  "Avatar ID": {
    type: String,
    required: true,
  },
});

unitSchema.methods.toJSON = function () {
  const unitObject = this.toObject();

  delete unitObject._id;

  return unitObject;
};

const Unit = mongoose.model<UnitInterface>("Unit", unitSchema);

export default Unit;

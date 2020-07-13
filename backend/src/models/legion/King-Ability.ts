import mongoose from "mongoose";

import KingAbilityInterface from "../../interfaces/legion/king-ability-interface";

const kingAbilitySchema = new mongoose.Schema(
  {
    Abilities: {
      type: Array,
      required: true,
    },
    "Ability Description": {
      type: Array,
      required: true,
    },
    "Ability Type": {
      type: Array,
      required: true,
    },
    Activatable: {
      type: Boolean,
      required: true,
    },
    Builder: {
      type: String,
      required: true,
    },
    ID: {
      type: String,
      required: true,
    },
  },
  {
    collection: "king-abilities",
  },
);

kingAbilitySchema.methods.toJSON = function () {
  const kingAbilityObject = this.toObject();

  delete kingAbilityObject._id;

  return kingAbilityObject;
};

const KingAbility = mongoose.model<KingAbilityInterface>(
  "KingAbilities",
  kingAbilitySchema,
);

export default KingAbility;

import mongoose from "mongoose";

const kingAbilitySchema = new mongoose.Schema({
  Name: {
    type: String,
    required: true,
  },
  Description: {
    type: String,
    required: true,
  },
  Activatable: {
    type: Boolean,
    required: true,
  },
  ID: {
    type: String,
    required: true,
  },
});

kingAbilitySchema.methods.toJSON = function () {
  const kingAbilityObject = this.toObject();

  delete kingAbilityObject._id;

  return kingAbilityObject;
};

const KingAbility = mongoose.model("KingAbilities", kingAbilitySchema);

export default KingAbility;

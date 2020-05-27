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
  "Avatar ID": {
    type: String,
    required: true,
  },
});

const KingAbility = mongoose.model("KingAbilities", kingAbilitySchema);

export default KingAbility;

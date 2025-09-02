import mongoose from "mongoose";

const roomSchema = new mongoose.Schema(
  {
    roomNumber: { type: Number, required: true, unique: true },
    capacity: { type: Number, required: true },
    comfort: {
      type: String,
      enum: ["regular", "junior suite", "suite"],
      default: "regular",
      required: true,
    },
    price: { type: Number, required: true },
    description: String,
    isAvailable: { type: Boolean, default: true },
  },
  { timestamps: true }
);

const Room = mongoose.model("Room", roomSchema);

export default Room;

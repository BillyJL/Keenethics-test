import mongoose from "mongoose";

const bikeSchema = new mongoose.Schema({
    id: { type: String, required: true, unique: true },
    name: { type: String, required: true, minlength: 5 },
    type: { type: String, required: true, minlength: 5 },
    color: { type: String, required: true, minlength: 5 },
    wheelSize: { type: Number, required: true },
    price: { type: Number, required: true },
    description: { type: String, required: true, minlength: 5 },
    status: {
        type: String,
        enum: ["available", "busy", "unavailable"],
        default: "available",
    },
});

const BikeModel = mongoose.model("Bike", bikeSchema);

export default BikeModel;

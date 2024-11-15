import mongoose from "mongoose";

const reviewerSchema = new mongoose.Schema({
    roll: { type: String },
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
})

const reviewerModel = mongoose.model('Reviewer', reviewerSchema)
export { reviewerModel as Reviewer }
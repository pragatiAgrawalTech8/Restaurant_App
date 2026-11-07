import mongoose from "mongoose"
const foodModel = new mongoose.Schema({
    name:String,
    price:String,
    path:String,
    description:String,
    restro_id:mongoose.Schema.Types.ObjectId
})

export const foodSchema =mongoose.models.foods || mongoose.model("foods",foodModel)
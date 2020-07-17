import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const desiItemSchema = new Schema({
  name: {
    type: String,
    required: [true, "item name is required"],
    unique: true
 
  },
  price: {
    type: [Number],
    required: [true, "item price required"]
  },
  type: {
    type: String,
    enum: ["starter", "dessert", "main course", "salad", "rice"],
    required: [true, "item type is required"]
  },
  isVeg: {
    type: Boolean,
    required: [true, "item isVeg required"]
  },
  rating: {
    type: Number,
    min: 0,
    max: 5,
    default: 0
  }
})

const desiItems = mongoose.model("desi-food-menu", desiItemSchema);

export default  desiItems;
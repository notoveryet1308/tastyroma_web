import mongoose from 'mongoose';

const southIndianSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Menu name is required']
  },
  price: {
    type: [Number],
    required: [true, 'Provide price']
  },
  isVeg: {
    type: Boolean,
    required: true
  },
  rating: {
    type: Number,
    default: 0
  }
});

const SouthIndian = mongoose.model('south-indian-menu', southIndianSchema);

export default SouthIndian;

import mongoose from 'mongoose';

const italianSchema = new mongoose.Schema({
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

const Italian = mongoose.model('italian-menu', italianSchema);

export default Italian;
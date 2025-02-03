import mongoose from 'mongoose';
import dateFormat from '../utils/dateFormat.js'; // Import dateFormat function

const { Schema } = mongoose;

const cartItemSchema = new Schema({
  product: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Product',
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
    default: 1,
  },
  price: {
    type: Number,
    required: true,
  },
});

const cartSchema = new Schema({
  items: [cartItemSchema],
  promoCode: {
    type: String,
    default: '',
  },
  total: {
    type: Number,
    required: true,
    default: 0,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
}, {
  timestamps: true,
  toJSON: { virtuals: true },
  toObject: { virtuals: true },
});

// Create virtuals for formatted createdAt and updatedAt
cartSchema.virtual('formattedCreatedAt').get(function() {
  return dateFormat(this.createdAt);
});

cartSchema.virtual('formattedUpdatedAt').get(function() {
  return dateFormat(this.updatedAt);
});

const Cart = mongoose.model('Cart', cartSchema);
export default Cart;
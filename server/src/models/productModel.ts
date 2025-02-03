import mongoose from 'mongoose';
import dateFormat from '../utils/dateFormat.js'; // Import dateFormat function

const { Schema } = mongoose;

const productSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  stock: {
    type: Number,
    required: true,
    default: 0,
  },
  imageUrl: {
    type: String,
    required: true,
  },
  sku: {
    type: String,
    required: true,
    unique: true,
  },
  quantity: {
    type: Number,
    required: true,
    default: 1,
  },
  wishlist: {
    type: Boolean,
    default: false,
  },
  specialOffer: {
    type: String,
    default: '',
  },
  shippingInfo: {
    type: String,
    default: 'FREE AU SHIPPING OVER $50',
  },
  brandInfo: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  updatedBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  reviews: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Review',
    },
  ],
}, {
  timestamps: true,
  toJSON: { virtuals: true },
  toObject: { virtuals: true },
});

// Create virtuals for formatted createdAt and updatedAt
productSchema.virtual('formattedCreatedAt').get(function() {
  return dateFormat(this.createdAt);
});

productSchema.virtual('formattedUpdatedAt').get(function() {
  return dateFormat(this.updatedAt);
});

const Product = mongoose.model('Product', productSchema);

export default Product;
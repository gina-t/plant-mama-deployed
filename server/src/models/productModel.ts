import mongoose, { Document } from 'mongoose';

const { Schema } = mongoose;

export interface ProductDocument extends Document {
  name: string;
  price: number;
  description: string;
  category: string;
  stock: number;
  imageUrl: string;
  quantity: number;
  shippingInfo: string;
  reviews: mongoose.Types.ObjectId[];
}

const productSchema = new Schema<ProductDocument>({
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
  quantity: {
    type: Number,
    required: true,
    default: 1,
  },
  shippingInfo: {
    type: String,
    default: 'Free shipping in Australia if you spend over $50',
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

const Product = mongoose.model<ProductDocument>('Product', productSchema);

export default Product;
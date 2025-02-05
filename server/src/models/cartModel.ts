import mongoose, { Document } from 'mongoose';

const { Schema } = mongoose;

export interface CartItemDocument extends Document {
  product: mongoose.Types.ObjectId;
  quantity: number;
  price: number;
}

export interface CartDocument extends Document {
  items: CartItemDocument[];
  promoCode: string;
  total: number;
  user: mongoose.Types.ObjectId;
}

const cartItemSchema = new Schema<CartItemDocument>({
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

const cartSchema = new Schema<CartDocument>({
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
  toJSON: { getters: true },
  toObject: { getters: true },
});

const Cart = mongoose.model<CartDocument>('Cart', cartSchema);
export default Cart;
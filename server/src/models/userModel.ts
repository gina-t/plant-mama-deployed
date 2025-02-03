// In mongoose, every document automatically gets an _id field of the type ObjectId. This field is unique for every document and is used to identify the document in the collection. The _id field is automatically indexed by MongoDB.
import mongoose, { Document } from "mongoose";
import Cart from "./cartModel.js";

const { Schema } = mongoose;

export interface UserDocument extends Document {
  username: string;
  email: string;
  password: string;
  isAdmin: boolean;
  cart: mongoose.Schema.Types.ObjectId;
}

const userSchema = new Schema<UserDocument>({
  username: {
    type: String,
    required: [true, 'Please add a username'],
  },
  email: {
    type: String,
    required: [true, 'Please add an email'],
    unique: true,
  },
  password: {
    type: String,
    required: [true, 'Please add a password'],
  },
  isAdmin: {
    type: Boolean,
    required: false,
    default: false,
  },
  cart: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Cart',
  },
}, {
  timestamps: true,
});

const User = mongoose.model<UserDocument>('User', userSchema);

export default User;
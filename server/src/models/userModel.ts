// In mongoose, every document automatically gets an _id field of the type ObjectId. This field is unique for every document and is used to identify the document in the collection. The _id field is automatically indexed by MongoDB.

import mongoose, { Document } from "mongoose";
import bcrypt from 'bcryptjs';

const { Schema } = mongoose;

export interface UserDocument extends Document {
  username: string;
  email: string;
  password: string;
  isAdmin: boolean;
  cart: mongoose.Types.ObjectId[];
  isCorrectPassword(password: string): Promise<boolean>;
}

const userSchema = new Schema<UserDocument>({
  username: {
    type: String,
    required: [true, 'Please add a username'],
    unique: true,
    trim: true,
  },
  email: {
    type: String,
    required: [true, 'Please add an email'],
    unique: true,
    match: [/.+@.+\..+/, 'Must match an email address!'],
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
  cart: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Cart',
    },
  ]
}, 
{
  timestamps: true,
  toJSON: { getters: true },
  toObject: { getters: true },
});

// Pre-save middleware to hash the password
userSchema.pre<UserDocument>('save', async function (next) {
  if (this.isNew || this.isModified('password')) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }
  next();
});

// Method to compare the provided password with the hashed password
userSchema.methods.isCorrectPassword = async function (password: string): Promise<boolean> {
  return bcrypt.compare(password, this.password);
};

const User = mongoose.model<UserDocument>('User', userSchema);

export default User;
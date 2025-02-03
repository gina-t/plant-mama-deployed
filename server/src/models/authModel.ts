import mongoose, { Document } from "mongoose";

const { Schema } = mongoose;

export interface UserDocument extends Document {
  username: string;
  email: string;
  password: string;
  isAdmin?: boolean;
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
}, {
  timestamps: true,
});

const User = mongoose.model<UserDocument>('User', userSchema);

export default User;
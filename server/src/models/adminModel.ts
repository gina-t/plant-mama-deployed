import mongoose, { Document } from 'mongoose';
import bcrypt from 'bcryptjs';

const { Schema } = mongoose;

export interface AdminDocument extends Document {
  username: string;
  email: string;
  password: string;
  isCorrectPassword(password: string): Promise<boolean>;
}

const adminSchema = new Schema<AdminDocument>({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true, match: [/.+@.+\..+/, 'Must match an email address!'] },
  password: { type: String, required: true },
});

// Pre-save middleware to hash the password
adminSchema.pre<AdminDocument>('save', async function (next) {
  if (this.isNew || this.isModified('password')) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }
  next();
});

// Method to compare the provided password with the hashed password
adminSchema.methods.isCorrectPassword = async function (password: string): Promise<boolean> {
  return bcrypt.compare(password, this.password);
};

const Admin = mongoose.model<AdminDocument>('Admin', adminSchema);

export default Admin;
import mongoose from 'mongoose';
const { Schema } = mongoose;

const productSchema = new Schema({
  id: {

  },
   
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
 });

const Product = mongoose.model('Product', productSchema);
export default Product;
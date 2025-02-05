import Product from "../models/productModel.js";
import User from "../models/userModel.js";

const resolvers = {
  Query: {
    products: async () => {
      try {
        const products = await Product.find().populate('createdBy updatedBy');
        return products;
      } catch (error) {
        console.error('Error fetching products:', error);
        throw new Error('Error fetching products');
      }
    },
    product: async (_: any, { id }: { id: string }) => {
      try {
        const product = await Product.findById(id).populate('createdBy updatedBy');
        return product;
      } catch (error) {
        console.error('Error fetching product:', error);
        throw new Error('Error fetching product');
      }
    },
    users: async () => {
      try {
        const users = await User.find();
        return users;
      } catch (error) {
        console.error('Error fetching users:', error);
        throw new Error('Error fetching users');
      }
    },
    user: async (_: any, { id }: { id: string }) => {
      try {
        const user = await User.findById(id);
        return user;
      } catch (error) {
        console.error('Error fetching user:', error);
        throw new Error('Error fetching user');
      }
    },
  },
  Mutation: {
    createProduct: async (_: any, { input }: any) => {
      try {
        const product = new Product(input);
        await product.save();
        return product;
      } catch (error) {
        console.error('Error creating product:', error);
        throw new Error('Error creating product');
      }
    },
    updateProduct: async (_: any, { id, ...updateData }: any) => {
      try {
        const product = await Product.findByIdAndUpdate(id, updateData, { new: true });
        return product;
      } catch (error) {
        console.error('Error updating product:', error);
        throw new Error('Error updating product');
      }
    },
  },
};

export default resolvers;
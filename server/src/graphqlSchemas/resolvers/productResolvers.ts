import { Product } from '../../models/index.js';
import { AuthenticationError } from '../../utils/auth.js';

const productResolvers = {
  Query: {
    products: async () => {
      try {
        const products = await Product.find();
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
  },
  Mutation: {
    createProduct: async (_: any, { input }: any, context: any) => {
      if (!context.isAdmin) {
        throw new AuthenticationError('You must be an admin to create a product');
      }
      try {
        const product = new Product(input);
        await product.save();
        return product;
      } catch (error) {
        console.error('Error creating product:', error);
        throw new Error('Error creating product');
      }
    },
    updateProduct: async (_: any, { id, ...updateData }: any, context: any) => {
      if (!context.isAdmin) {
        throw new AuthenticationError('You must be an admin to update a product');
      }
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

export default productResolvers;
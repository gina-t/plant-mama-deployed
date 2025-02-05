import { Cart } from '../../models/index.js';

const cartResolvers = {
  Query: {
    carts: async () => {
      try {
        const carts = await Cart.find().populate('user items.product');
        return carts;
      } catch (error) {
        console.error('Error fetching carts:', error);
        throw new Error('Error fetching carts');
      }
    },
    cart: async (_: any, { id }: { id: string }) => {
      try {
        const cart = await Cart.findById(id).populate('user items.product');
        return cart;
      } catch (error) {
        console.error('Error fetching cart:', error);
        throw new Error('Error fetching cart');
      }
    },
  },
  Mutation: {
    createCart: async (_: any, { input }: any) => {
      try {
        const cart = new Cart(input);
        await cart.save();
        return cart;
      } catch (error) {
        console.error('Error creating cart:', error);
        throw new Error('Error creating cart');
      }
    },
    updateCart: async (_: any, { id, ...updateData }: any) => {
      try {
        const cart = await Cart.findByIdAndUpdate(id, updateData, { new: true });
        return cart;
      } catch (error) {
        console.error('Error updating cart:', error);
        throw new Error('Error updating cart');
      }
    },
  },
};

export default cartResolvers;
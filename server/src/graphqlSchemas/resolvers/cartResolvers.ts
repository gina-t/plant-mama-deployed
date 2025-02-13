import { Cart, Product, UserDocument } from '../../models/index.js';
import { AuthenticationError } from '../../utils/auth.js';

interface ProductArgs {
  productId: string;
}
interface AddProductArgs {
  input: {
    cartId: string;
    productId: string;
    quantity: number;
    price: number;
  };
}

const cartResolvers = {
  Query: {
    carts: async () => {
      try {
        const carts = await Cart.find()
          .populate<{ user: UserDocument }>('user', 'username')
          .populate('items.product');
        return carts.map((cart) => ({
          ...cart.toObject(),
          username: cart.user.username,
        }));
      } catch (error) {
        console.error('Error fetching carts:', error);
        throw new Error('Error fetching carts');
      }
    },
    cart: async (_parent: any, { cartId }: { cartId: string }) => {
      try {
        const cart = await Cart.findById(cartId)
          .populate<{ user: UserDocument }>('user', 'username')
          .populate('items.product');
        if (!cart) {
          throw new Error('Cart not found');
        }
        return {
          ...cart.toObject(),
          username: cart.user.username,
        };
      } catch (error) {
        console.error('Error fetching cart:', error);
        throw new Error('Error fetching cart');
      }
    },
  },
  Mutation: {
    createCart: async (_parent: any, { input }: any) => {
      try {
        const cart = new Cart(input);
        await cart.save();
        return cart;
      } catch (error) {
        console.error('Error creating cart:', error);
        throw new Error('Error creating cart');
      }
    },
    updateCart: async (_parent: any, { id, ...updateData }: any) => {
      try {
        const cart = await Cart.findByIdAndUpdate(id, updateData, {
          new: true,
        }).populate('user items.product');
        return cart;
      } catch (error) {
        console.error('Error updating cart:', error);
        throw new Error('Error updating cart');
      }
    },
    addProductToCart: async (
      _parent: any,
      { input }: AddProductArgs,
      context: any
    ) => {
      if (context.user) {
        const product = await Product.findById(input.productId);
        if (!product) {
          throw new Error('Product not found');
        }

        const cart = await Cart.findByIdAndUpdate(
          input.cartId,
          {
            $addToSet: {
              items: {
                product: input.productId,
                quantity: input.quantity,
                price: input.price,
              },
            },
          },
          { new: true }
        ).populate('items.product');

        return cart;
      }
      throw new AuthenticationError('You need to be logged in');
    },
    deleteProductFromCart: async (
      _parent: any,
      { productId }: ProductArgs,
      context: any
    ) => {
      if (context.user) {
        const cart = await Cart.findOneAndUpdate(
          { 'items.product': productId },
          { $pull: { items: { product: productId } } },
          { new: true }
        ).populate('items.product');

        if (!cart) {
          throw new Error('Product not found in cart');
        }

        return cart;
      }
      throw new AuthenticationError('You need to be logged in');
    },
  },
};

export default cartResolvers;

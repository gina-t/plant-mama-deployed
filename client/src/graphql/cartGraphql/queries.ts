import { gql } from '@apollo/client';

export const QUERY_CARTS = gql`
  query carts {
    carts {
      _id
      username
      items {
        _id
        name
        price
        quantity
      }
    }
  }
`;
export const QUERY_CART = gql`
  query cart($cartId: ID!) {
    cart(cartId: $cartId) {
      _id
      username
      items {
        _id
        name
        price
        quantity
      }
    }
  }
`;

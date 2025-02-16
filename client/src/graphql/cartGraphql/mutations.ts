import { gql } from '@apollo/client';

export const CREATE_CART = gql`
  mutation createCart($input: CreateCartInput!) {
    createCart(input: $input) {
      id
      items {
        product {
          id
          name
          price
        }
        quantity
        price
      }
      promoCode
      total
    }
  }
`;

export const UPDATE_CART = gql`
  mutation updateCart($id: ID!, $input: UpdateCartInput!) {
    updateCart(id: $id, input: $input) {
      id
      items {
        product {
          id
          name
          price
        }
        quantity
        price
      }
      promoCode
      total
    }
  }
`;

export const ADD_PRODUCT_TO_CART = gql`
  mutation addToCart($input: AddToCartInput!) {
    addToCart(input: $input) {
      id
      items {
        product {
          id
          name
          price
        }
        quantity
        price
      }
      promoCode
      total
    }
  }
`;

export const DElETE_PRODUCT_FROM_CART = gql`
  mutation removeFromCart($input: RemoveFromCartInput!) {
    removeFromCart(input: $input) {
      id
      items {
        product {
          id
          name
          price
        }
        quantity
        price
      }
      promoCode
      total
    }
  }
`;
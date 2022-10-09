import {
  ADD_ITEM_TO_CART,
  CLEAE_CART,
  DECRESE_ITEM_COUNT,
  DELETE_ITEM_FROM_CART,
  END_PROCCESS_CART,
  INCREASE_ITEM_COUNT,
  START_PROCCESS_CART,
} from "../constant/cartConstant";

export const cartReducer = (
  state = {
    cartProccess: false,
    items: [],
  },
  action
) => {
  switch (action.type) {
    case CLEAE_CART:
      return {
        ...state,
        items: [],
      };
    case START_PROCCESS_CART:
      return {
        ...state,
        cartProccess: true,
      };
    case END_PROCCESS_CART:
      return {
        ...state,
        cartProccess: false,
      };
    case ADD_ITEM_TO_CART:
      let Items = [...state.items, { ...action.payload }];
      return {
        ...state,
        items: Items,
      };
    case DELETE_ITEM_FROM_CART:
      let cartItems = state.items;
      const id = action.payload;
      let indx = 0;
      cartItems.find((element, index) =>
        element.id === id ? (indx = index) : null
      );
      cartItems.splice(indx, 1);
      return {
        ...state,
        items: cartItems,
      };
    case INCREASE_ITEM_COUNT:
      let cartItem = state.items;
      const Id = action.payload;
      cartItem.find((element) =>
        element.id === Id ? (element.count += 1) : null
      );
      return {
        ...state,
        items: [...cartItem],
      };
    case DECRESE_ITEM_COUNT:
      let cartitems = state.items;
      const IDItem = action.payload;
      cartitems.find((element) =>
        element.id === IDItem ? (element.count -= 1) : null
      );
      return {
        ...state,
        items: [...cartitems],
      };
    default:
      return state;
  }
};

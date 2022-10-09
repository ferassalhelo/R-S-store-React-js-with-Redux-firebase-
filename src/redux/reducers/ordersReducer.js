import { DELETE_ORDER, GET_ALL_ORDERS } from "../constant/ordersConstant";

export default function ordersReducer(state = { orders: [] }, action) {
  switch (action.type) {
    case GET_ALL_ORDERS:
      return { ...state, orders: [...action.payload] };
    case DELETE_ORDER:
      let orders= [...state.orders];
      const id = action.payload;
      let indx = 0;
      orders.find((element, index) =>
        element.id === id ? (indx = index) : null
      );
      orders.splice(indx, 1);
      return { ...state, orders: orders };

    default:
      return state;
  }
}

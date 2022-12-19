import { DONE_ORDER, END_PROCCESS_ORDER, GET_ALL_ORDERS, START_PROCCESS_ORDER } from "../constant/ordersConstant";

export default function ordersReducer(
  state = { orders: [], orderProccess: false },
  action
) {
  switch (action.type) {
    case START_PROCCESS_ORDER:
      return { ...state, orderProccess: true };
    case END_PROCCESS_ORDER:
      return { ...state, orderProccess: false };
    case GET_ALL_ORDERS:
      return { ...state, orders: [...action.payload] };
    case DONE_ORDER:
      let orders = [...state.orders];
      const id = action.payload;
      orders.find((element) =>
        element.id === id ? (element.done = true) : null
      );

      return { ...state, orders: orders };

    default:
      return state;
  }
}

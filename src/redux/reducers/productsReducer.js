import {
  ADD_PRODUCT,
  END_PROCCESS_PRODUCT,
  SET_ALL_PRODUCTS,
  GET_DATA_FAIL_PRODUCT,
  START_PROCCESS_PRODUCT,
  DELETE_PRODUCT,
  PRODUCT_IN_CART,
  PRODUCT_OUT_CART,
} from "../constant/productsConstant";

export default function productReducer(
  state = { productsData: [], errorMessage: "", productProccess: false },
  action
) {
  switch (action.type) {
    case START_PROCCESS_PRODUCT:
      return { ...state, productProccess: true };
    case END_PROCCESS_PRODUCT:
      return { ...state, productProccess: false };
    case SET_ALL_PRODUCTS:
      return { ...state, productsData: action.payload };
    case ADD_PRODUCT:
      let data = [...state.productsData, action.payload];
      return { ...state, productsData: data };
    case GET_DATA_FAIL_PRODUCT:
      return { ...state, errorMessage: action.payload };
    case PRODUCT_OUT_CART:
      let items = [...state.productsData];
      const ID = action.payload;
      items.find((element) =>
        element.id === ID ? (element.inCart = false) : null
      );
      return {
        ...state,
        productsData: [...items],
      };

    case PRODUCT_IN_CART:
      let Items = [...state.productsData];

      const Id = action.payload;
      Items.find((element) =>
        element.id === Id ? (element.inCart = true) : null
      );
      return {
        ...state,
        productsData: [...Items],
      };

    case DELETE_PRODUCT:
      let products = [...state.productsData];
      const id = action.payload;
      let indx = 0;
      products.find((element, index) =>
        element.id === id ? (indx = index) : null
      );
      products.splice(indx, 1);
      return { ...state, productsData: products };
    default:
      return state;
  }
}

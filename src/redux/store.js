import { combineReducers, createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { cartReducer } from "./reducers/cartReducer";
import ordersReducer from "./reducers/ordersReducer";
import productReducer from "./reducers/productsReducer";
import reviewsReducer from "./reducers/reviewsReducer";
import userReducer from "./reducers/usersReducer";

const reducers = combineReducers({
  user: userReducer,
  products: productReducer,
  cart: cartReducer,
  reviews: reviewsReducer,
  orders: ordersReducer,
});
export const store = createStore(reducers, applyMiddleware(thunk));

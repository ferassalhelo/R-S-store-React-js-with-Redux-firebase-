import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import CartCard from "../../components/CartCard";
import OrderSummary from "../../components/OrderSummary";
import img from "../../assets/imgs/empty.svg";

function CartPage() {
  const reducers = useSelector((reducers) => reducers);
  let [subTotal, setSubTotal] = useState(0);
  useEffect(() => {
    if (reducers.cart.items.length) {
      let count = 0;
      [...reducers.cart.items].map(
        (item) => (count += item.price * item.count)
      );
      setSubTotal(count);
    } else if (reducers.cart.items.length === 0) setSubTotal(0);
  }, [reducers]);
  return (
    <div className="container m-auto">
      <h1 className="text-uppercase mt-5">cart</h1>
      <h4 className="mb-5">{reducers.cart.items.length} items</h4>
      <div className="row">
        <div className="col-12 col-lg-8 col-xl-9 order-2 order-lg-0 px-5 px-md-0">
          {reducers.cart.items.length === 0 ? (
            <div className="w-100 m-auto row justify-content-center align-items-center mb-5">
              <p className="col-12 fs-1 text-uppercase fw-bold text-main text-center pb-5">
                empty!
              </p>
              <img src={img} alt="img" className="col-12 col-lg-7" />
            </div>
          ) : (
            reducers.cart.items.map((item) => (
              <CartCard key={item.id} data={item} />
            ))
          )}
        </div>
        <div className="col-12 col-lg-4 col-xl-3 ps-lg-3 px-5 px-md-0">
          <OrderSummary
            subTotal={subTotal}
            orderItems={reducers.cart.items}
            userData={reducers.user.userData}
          />
        </div>
      </div>
    </div>
  );
}

export default CartPage;

// //////////////////////////////

// {
//   orders: [
//     {
//       data: {
//         orderItems: [
//           {
//             category: "chocolate",
//             id: "nPx1kPsnhcrnjrGjms8b",
//             imgUrl:
//               "https://firebasestorage.googleapis.com/v0/b/graduation-project-4e9c9.appspot.com/o/Products%20Images%2Fch2.jfif?alt=media&token=dbf86425-e2ca-4e90-b46b-795f48a9eec9",
//             supplierName: "Feras Alhelo",
//             supplier: "feras.s.alhelo@gmail.com",
//             count: 5,
//             description:
//               "Discover more about our delicious chocolate, from silky smooth chocolate bars to Minstrels®, Counters® and Ripple® to luxurious Truffles and Fusions.",
//             name: "caramel chocolate",
//             price: 90,
//             allergens: "caramel, chocolate, milk",
//           },
//           {
//             price: 150,
//             count: 3,
//             supplierName: "Feras Alhelo",
//             supplier: "feras.s.alhelo@gmail.com",
//             id: "P2Ehf5cwrldW3OOwuwv6",
//             name: "coffee chocolate",
//             allergens: "caramel, chocolate, coffee",
//             imgUrl:
//               "https://firebasestorage.googleapis.com/v0/b/graduation-project-4e9c9.appspot.com/o/Products%20Images%2Fch7.jfif?alt=media&token=50f2aaf7-f948-4285-b5ef-ac20433995b8",
//             category: "chocolate",
//             description:
//               "Discover more about our delicious chocolate, from silky smooth chocolate bars to Minstrels®, Counters® and Ripple® to luxurious Truffles and Fusions.",
//           },
//         ],
//         userData: {
//           email: "feras.s.alhelo2@gmail.com",
//           phone: "05926299",
//           imgUrl:
//             "https://firebasestorage.googleapis.com/v0/b/graduation-project-4e9c9.appspot.com/o/Users%20Images%2Fperson.jfif?alt=media&token=ab9f62a8-37ef-4250-99dc-cf6f58ab60a4",
//           ipnNumber: 123456,
//           userType: "retailer",
//           name: "Feras Alhelo2",
//           password: "kjhhjglkhiyuyghjk",
//           urlTitle: "https://www.google.com/maps/@31.8876445,34.9964462,10z",
//           CommercialRegistrationNo: 123456,
//         },
//       },
//       id: "IuQoq0vONYfx98ApUObr",
//     },
//   ];
// }

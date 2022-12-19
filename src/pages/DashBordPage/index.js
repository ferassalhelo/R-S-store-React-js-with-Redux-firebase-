import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { doneOrder } from "../../redux/actions/orderAction";
import { deletProduct } from "../../redux/actions/productsActions";

function DashBordPage() {
  const dispatch = useDispatch();
  const redusers = useSelector((state) => state);
  const productsReducer = redusers.products;
  const supplierName = redusers.user.userData.email;

  return (
    <div className="container m-auto my-5">
      {productsReducer.productProccess || redusers.orders.orderProccess ? (
        <div
          className=" row justify-content-center align-items-center position-fixed top-0 end-0 start-0 bottom-0 bg-opacity-50 bg-secondary"
          style={{ zIndex: "99" }}
        >
          <div className="spinner-border border-main" role="status"></div>
        </div>
      ) : null}
      <h1 className="text-uppercase text-center text-md-start">Products</h1>
      <Link to="/NewProduct" className="text-decoration-none">
        <button className="btn text-white text-uppercase bg-main fw-bold mx-auto mx-md-0 ms-md-auto mb-5 mt-3 px-5 py-2 d-flex align-items-center">
          <i className="fa-solid fa-plus pe-2"></i> add new product
        </button>
      </Link>
      <table className="table align-middle bg-white container">
        <thead className="bg-light">
          <tr>
            <th>Name</th>
            <th className="d-none d-md-table-cell">Description</th>
            <th>Price</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {productsReducer.productsData.map((item) => {
            if (item.supplier === supplierName) {
              return (
                <tr key={item.id}>
                  <td className="pe-3 w-25">{item.name}</td>
                  <td className="d-none d-md-table-cell  pe-3">
                    {item.description}
                  </td>
                  <td>{item.price}</td>
                  <td>
                    <button
                      onClick={() => dispatch(deletProduct(item.id))}
                      type="button"
                      className="delete btn btn-danger text-white btn-sm btn-rounded text-uppercase fw-bold d-flex align-items-center"
                    >
                      <i className="fa-solid fa-trash pe-1"></i> delete
                    </button>
                  </td>
                </tr>
              );
            }
            return null;
          })}
        </tbody>
      </table>

      {/* orders */}

      <hr className="mt-5" />
      <h1 className="text-uppercase text-center text-md-start mt-5 py-4">
        orders
      </h1>

      <div className="accordion accordion-flush" id="accordionFlushExample">
        {redusers.orders.orders.map((item) => {
          let boolen = item.orderItems.some(
            (ele) => ele.supplier === supplierName
          );

          if (boolen) {
            return (
              <div className="accordion-item" key={item.id}>
                <h2
                  className="accordion-header"
                  id={`flush-headingOne+${item.id}`}
                >
                  <button
                    className="accordion-button collapsed "
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target={`#flush-collapseOne${item.id}`}
                    aria-expanded="false"
                    aria-controls={`flush-collapseOne${item.id}`}
                  >
                    <img
                      src={item.userData.imgUrl}
                      alt="img"
                      className="rounded-5 me-3 "
                      width="40px"
                      height="40px"
                    />
                    <span className="fs-5 fw-bold me-2">
                      {item.userData.name}
                    </span>
                    <span className="fs-5 fw-bold ms-auto">
                      Phone: {item.userData.phone}
                    </span>{" "}
                    {item.done ? (
                      <i className="fa-solid fa-clipboard-check text-success fs-2 ms-auto"></i>
                    ) : (
                      <i className="fa-solid fa-clipboard-check text-success fs-2 ms-auto invisible"></i>
                    )}
                  </button>
                </h2>
                <div
                  id={`flush-collapseOne${item.id}`}
                  className="accordion-collapse collapse"
                  aria-labelledby={`flush-headingOne+${item.id}`}
                  data-bs-parent="#accordionFlushExample"
                >
                  <div className="accordion-body px-0">
                    <p className="my-4 fs-5" style={{ wordBreak: "break-all" }}>
                      Title:{" "}
                      <a href={item.userData.urlTitle}>
                        {item.userData.urlTitle}
                      </a>
                    </p>
                    <table className="table align-middle bg-white container">
                      <thead className="bg-light">
                        <tr>
                          <th>Name</th>
                          <th className="d-none d-md-table-cell">Category</th>
                          <th>Count</th>
                          <th>Unit Price</th>
                        </tr>
                      </thead>
                      <tbody>
                        {item.orderItems.map((element) => {
                          return element.supplier === supplierName ? (
                            <tr key={element.id}>
                              <td className="pe-3 w-25">{element.name}</td>
                              <td className="d-none d-md-table-cell  pe-3">
                                {element.category}
                              </td>
                              <td>{element.count}</td>
                              <td>{element.price}</td>
                            </tr>
                          ) : null;
                        })}
                      </tbody>
                    </table>
                    {item.done ? null : (
                      <button
                        onClick={() => dispatch(doneOrder(item.id, item))}
                        className="btn text-white text-uppercase bg-main fw-bold mx-auto mx-md-0 ms-md-auto mb-5 mt-2 px-5 py-2 text-end d-block"
                      >
                        <i className="fa-solid fa-trash pe-1"></i> Done
                      </button>
                    )}
                  </div>
                </div>
              </div>
            );
          }
        })}
      </div>
    </div>
  );
}

export default DashBordPage;

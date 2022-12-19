import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Formik, Field, Form, ErrorMessage } from "formik";
import ButtonSpinner from "../../components/ButtonSpinner";
import img from "../../assets/imgs/notimg.png";
import { uploadImgAndAddProduct } from "../../redux/actions/productsActions";
import { productDataSchema } from "../../helper/validationFunction";

const NewProductPage = () => {
  const userData = useSelector((reducers) => reducers.user.userData);
  const user = useSelector((reducers) => reducers.products);
  let dispatch = useDispatch();
  let [file, setFile] = useState("");
  let handleFile = (e) => {
    setFile(e.target.files[0]);
  };

  return (
    <div className="row container m-auto my-0 my-lg-5 my-5">
      <h1 className="text-uppercase col-12">New Product</h1>
      <div className="col-12 col-md-4 m-auto">
        {file !== "" ? (
          <img
            className="rounded-2 w-100"
            alt="img"
            src={file !== "" ? URL.createObjectURL(file) : file}
          />
        ) : (
          <img className="rounded-2 w-100" alt="img" src={img} />
        )}
      </div>
      <div className="col-12 col-md-8 ps-lg-5 p-0">
        <Formik
          initialValues={{
            name: "",
            price: "",
            supplier: userData.email,
            supplierName: userData.name,
            description: "",
            category: "",
            allergens: "",
          }}
          onSubmit={(values, { resetForm }) => {
            dispatch(uploadImgAndAddProduct(values, file));
            resetForm();
            setFile("");
          }}
          validationSchema={productDataSchema}
        >
          <Form>
            <div className="row align-items-center mt-5">
              <input
                required
                className="d-block border-0 outline-none col"
                type="file"
                id="file"
                onChange={handleFile}
              />
            </div>
            <Field
              className="d-block p-2 w-100 border-0 border-bottom border-dark table-bordered my-4 outline-none"
              id="name"
              name="name"
              placeholder="Name"
            />
            <ErrorMessage className="text-main d-block" name="name" />
            <Field
              className="d-block p-2 w-100 border-0 border-bottom border-dark table-bordered my-4 outline-none"
              id="price"
              name="price"
              placeholder="Price"
              type="number"
            />{" "}
            <ErrorMessage name="price" />
            <Field
              className="d-block p-2 w-100 border-0 border-bottom border-dark table-bordered my-4 outline-none"
              id="description"
              name="description"
              placeholder="description"
              type="text"
            />{" "}
            <ErrorMessage name="description" />
            <Field
              className="d-block p-2 w-100 border-0 border-bottom border-dark table-bordered my-4 outline-none"
              id="allergens"
              name="allergens"
              placeholder=" Allergens"
              type="text"
            />
            <ErrorMessage name="allergens" />
            <Field
              id="category"
              name="category"
              component="select"
              className="d-block p-2 w-100 border-0 border-bottom border-dark table-bordered my-4 outline-noned-block p-2 w-100 border-0 border-bottom border-dark table-bordered my-4 outline-none"
            >
              <option value="">Chose Category</option>
              <option value="chocolate">chocolate</option>
              <option value="toffee">toffee</option>
              <option value="Arabic sweets">Arabic sweets</option>
              <option value="cake">cake</option>
              <option value="caramel">caramel</option>
              <option value="biscuit ">biscuit </option>
            </Field>
            <ErrorMessage name="category" />
            <button
              className="btn bg-main fw-bold d-block my-5 px-5 py-2 w-100 text-uppercase text-white"
              type="submit"
              disabled={user.productProccess}
            >
              {user.productProccess ? <ButtonSpinner /> : "add product"}
            </button>
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default NewProductPage;

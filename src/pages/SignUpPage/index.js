import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Formik, Field, Form, ErrorMessage } from "formik";
import signupImg from "../../assets/imgs/signup.svg";
import { uploadImgAndSignUpAction } from "../../redux/actions/userAction";
import ButtonSpinner from "../../components/ButtonSpinner";
import img from "../../assets/imgs/user.jpg";
import { SignupSchema } from "../../helper/validationFunction";

const Signup = () => {
  const user = useSelector((reducers) => reducers.user);
  let dispatch = useDispatch();
  const navigate = useNavigate();
  let [file, setFile] = useState("");
  let handleFile = (e) => {
    setFile(e.target.files[0]);
  };
  if (user.userData.name) navigate("/profile");

  return (
    <div className="row container m-auto my-0 my-lg-5 my-5">
      <div className="col-12 col-lg-6 pe-lg-5 p-0">
        <h1 className="text-uppercase">Sign Up</h1>
        <Formik
          initialValues={{
            name: "",
            email: "",
            phone: "",
            urlTitle: "",
            ipnNumber: "",
            CommercialRegistrationNo: "",
            password: "",
            userType: "",
          }}
          onSubmit={(values) => {
            dispatch(uploadImgAndSignUpAction(values, file));
          }}
          validationSchema={SignupSchema}
        >
          <Form>
            <div className="row align-items-center mt-5">
              <input
                className="d-block border-0 outline-none col"
                type="file"
                id="file"
                onChange={handleFile}
              />
              <div className="col text-end">
                {file !== "" ? (
                  <img
                    className="rounded-2 overflow-hidden"
                    style={{ maxHeight: "60px", maxWidth: "60px" }}
                    alt="img"
                    src={
                      typeof file == "object" ? URL.createObjectURL(file) : file
                    }
                  />
                ) : (
                  <img
                    className="rounded-2 overflow-hidden"
                    style={{ maxHeight: "60px", maxWidth: "60px" }}
                    alt="img"
                    src={img}
                  />
                )}
              </div>
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
              id="email"
              name="email"
              placeholder="Email"
              type="email"
            />{" "}
            <ErrorMessage name="email" />
            <Field
              className="d-block p-2 w-100 border-0 border-bottom border-dark table-bordered my-4 outline-none"
              id="phone"
              name="phone"
              placeholder="Phone"
              type="tel"
            />{" "}
            <ErrorMessage name="phone" />
            <Field
              className="d-block p-2 w-100 border-0 border-bottom border-dark table-bordered my-4 outline-none"
              id="urlTitle"
              name="urlTitle"
              placeholder="URL Title (from google map)"
              type="url"
            />{" "}
            <ErrorMessage name="urlTitle" />
            <Field
              className="d-block p-2 w-100 border-0 border-bottom border-dark table-bordered my-4 outline-none"
              id="ipnNumber"
              name="ipnNumber"
              placeholder="IBAN"
              type="number"
            />
            <ErrorMessage name="ipnNumber" />
            <Field
              className="d-block p-2 w-100 border-0 border-bottom border-dark table-bordered my-4 outline-none"
              id="CommercialRegistrationNo"
              name="CommercialRegistrationNo"
              placeholder="Commercial Registration No"
              type="number"
            />
            <ErrorMessage name="CommercialRegistrationNo" />
            <Field
              className="d-block p-2 w-100 border-0 border-bottom border-dark table-bordered my-4 outline-none"
              id="password"
              name="password"
              placeholder="Password"
            />
            <ErrorMessage name="password" />
            <div className="pt-2">
              <span className="me-4 text-capitalize"> type user:</span>
              <label className="me-5 contain">
                <Field
                  type="radio"
                  name="userType"
                  value="retailer"
                  className="me-2"
                />
                Retailer
                <span className="checkmark"></span>
              </label>
              <label className="contain">
                <Field
                  type="radio"
                  name="userType"
                  value="supplier"
                  className="me-2"
                />
                Supplier
                <span className="checkmark"></span>
              </label>
            </div>
            <ErrorMessage name="userType" />
            <button
              className="btn bg-main fw-bold d-block my-5 px-5 py-2 w-100 text-uppercase text-white"
              type="submit"
              disabled={user.userProccess}
            >
              {user.userProccess ? <ButtonSpinner /> : "Sign Up"}
            </button>
          </Form>
        </Formik>
        <div className="text-center">
          Already have an account?{" "}
          <Link to={"/signin"} className="text-main">
            signIn
          </Link>
        </div>
      </div>
      <div className="d-none d-lg-block col-6 text-end ps-5 m-auto">
        <img src={signupImg} alt="img" className="w-100" />
      </div>
    </div>
  );
};

export default Signup;

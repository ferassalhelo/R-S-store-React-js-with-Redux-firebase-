import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Formik, Field, Form, ErrorMessage } from "formik";
import signinImg from "../../assets/imgs/signin.svg";
import { signInAction } from "../../redux/actions/userAction";
import ButtonSpinner from "../../components/ButtonSpinner";
import { SigninSchema } from "../../helper/validationFunction";

const Signin = () => {
  const dispatch = useDispatch();
  const user = useSelector((reducers) => reducers.user);
  const navigate = useNavigate();
  if (user.userData.name) navigate("/profile");
  return (
    <div className="row container m-auto my-0 my-lg-5 my-5">
      <div className="col-12 col-lg-6 pe-lg-5 p-0 m-auto">
        <h1 className="text-uppercase">Sign In</h1>
        <Formik
          initialValues={{
            email: "",
            password: "",
          }}
          onSubmit={(values) => {
            dispatch(signInAction(values));
          }}
          validationSchema={SigninSchema}
        >
          <Form>
            <Field
              className="d-block p-2 w-100 border-0 border-bottom border-dark table-bordered my-4 outline-none"
              id="email"
              name="email"
              placeholder="Email"
              type="email"
            />
            <ErrorMessage name="email" />
            <Field
              className="d-block p-2 w-100 border-0 border-bottom border-dark table-bordered my-4 outline-none"
              id="password"
              name="password"
              placeholder="Password"
            />
            <ErrorMessage name="password" />

            <button
              className="btn bg-main fw-bold d-block my-5 px-5 py-2 w-100 text-uppercase text-white"
              type="submit"
              disabled={user.userProccess}
            >
              {user.userProccess ? <ButtonSpinner /> : "Sign In"}
            </button>
          </Form>
        </Formik>
        <div className="text-center">
          Don't have an account?{" "}
          <Link to={"/signup"} className="text-main">
            signup
          </Link>
        </div>
      </div>
      <div className="d-none d-lg-block col-6 text-end ps-5 m-auto">
        <img src={signinImg} className="mw-100" alt="img" />
      </div>
    </div>
  );
};

export default Signin;

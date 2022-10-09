import * as Yup from "yup";

export const productDataSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "*Too Short!")
    .max(30, "*Too Long!")
    .required("*name is required"),
  price: Yup.number()
    .min(1, "Must be more than 0")
    .required("*price is required"),
  description: Yup.string()
    .min(20)
    .max(1000, "too long!")
    .required("*description number is required"),
  allergens: Yup.string(),
  category: Yup.string().required(),
});

export const SignupSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "*Too Short!")
    .max(70, "*Too Long!")
    .required("*name is required"),
  email: Yup.string()
    .email("*Invalid email")
    .required("*email is required"),
  password: Yup.string()
    .required("*password is required")
    .min(8, "*Password is too short - should be 8 chars minimum.")
    .matches(/[a-zA-Z]/, "*Password can only contain Latin letters."),
  phone: Yup.number()
    .typeError("*That doesn't look like a phone number")
    .positive("*A phone number can't start with a minus")
    .integer("*A phone number can't include a decimal point")
    .min(8)
    .required("*A phone number is required"),
  urlTitle: Yup.string()
    .matches(/((https?):\/\/)?(www.)+[a-z0-9]/, "*Enter correct url!")
    .required("*Please enter url tile"),
  ipnNumber: Yup.number("*please enter your IBAN Number")
    .required("*IPN number is required")
    .min(7, "*Short!"),
  CommercialRegistrationNo: Yup.number(
    "*please enter your Commercial Registration Number"
  )
    .required("*Commercial Registration number is required")
    .min(7, "*Short!"),
  userType: Yup.string()
    .required()
    .oneOf(["supplier", "retailer"], "Selecting the gender field is required"),
});

export const SigninSchema = Yup.object().shape({
  email: Yup.string()
    .email("*Invalid email")
    .required("*email is required"),
  password: Yup.string()
    .required("*assword is required")
    .min(6, "*Password is too short - should be 8 chars minimum.")
    .matches(/[a-zA-Z]/, "*Password can only contain Latin letters."),
});

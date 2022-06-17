import axios from "axios";
import { Form, Formik } from "formik";
import React from "react";
import * as Yup from "yup";
import AuthFormikcontrol from "../../components/authForm/AuthFormikcontrol";

const initialValues = {
  phone: "",
  password: "",
  remember: false,
};

const onSubmit = (values) => {
  axios.post("https://ecomadminapi.azhadev.ir/api/auth/login", {
    ...values,
    remember: values.remember ? 1 : 0,
  }).then(res=>{
    console.log(res);
  });
};

const validationSchema = Yup.object({
  phone: Yup.number().required("لطفا این قسمت را پر کنید"),
  password: Yup.string()
    .required("لطفا این قسمت را پر کنید")
    .matches(/^[a-zA-Z0-9@!$%&?]+$/, "فقط از حروف و اعداد استفاده شود"),
  remember: Yup.boolean(),
});

const Login = () => {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {(formik) => {
        console.log(formik);
        return (
          <div className="wrap-login100">
            <Form className="login100-form validate-form pos-relative d-flex flex-column align-items-center justify-content-center">
              <span className="login100-form-title">ورود اعضا</span>

              <AuthFormikcontrol
                formik={formik}
                control="input"
                type="text"
                name="phone"
                icon="fa fa-mobile"
                label="تلفن"
              />

              <AuthFormikcontrol
                formik={formik}
                control="input"
                type="password"
                name="password"
                icon="fa fa-lock"
                label="رمز عبور"
              />


              <AuthFormikcontrol
                formik={formik}
                control="switch"
                name="remember"
                label="مرا به خاطر بسپار"
              />

              <div className="container-login100-form-btn">
                <button className="login100-form-btn">ورود</button>
              </div>
            </Form>
            <div className="login100-pic js-tilt" data-tilt>
              <img src="/auth/images/img-01.png" alt="IMG" />
            </div>
          </div>
        );
      }}
    </Formik>
  );
};

export default Login;

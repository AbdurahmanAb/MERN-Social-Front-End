import { Formik, Form } from "formik";
import { Link } from "react-router-dom";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import LoginInput from "../inputs/loginInput";
import { useState } from "react";
import RegisterForm from "./RegisterForm";
import Swal from "sweetalert2";
import { useDispatch } from "react-redux";
import { loginU } from "../../redux/reducers/UserSlice";
const loginInfos = {
  email: "",
  password: "",
};

export default function LoginForm() {
  const [visibility, setVisiblity] = useState(false);
  const visibiler = () => {
    setVisiblity(!visibility);
  };
  const [login, setLogin] = useState(loginInfos);
  const { email, password } = login;
  const handleLoginChange = (e) => {
    const { name, value } = e.target;
    setLogin({ ...login, [name]: value });
  };
  const loginValidation = Yup.object({
    email: Yup.string()
      .required("Email address is required.")
      .email("Must be a valid email.")
      .max(100),
    password: Yup.string().required("Password is required"),
  });

  const Dispatch = useDispatch();
  const loginD = (user) => {
    Dispatch(loginU(user));
  };

  const url = "http://localhost:5000/api/login";
  const data = {
    email,
    password,
  };
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  };

  const navigate = useNavigate();
  const loginSubmit = async () => {
    fetch(url, options)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error("Request failed.");
      })
      .then((data) => loginD(data))
      .catch((error) => Swal.fire("OPPS!", error.message, "error"));
  };
  return (
    <div>
      <div className="login_wrap">
        <div className="login_1">
          <img src="./assets/icons/facebook.svg" alt="" />
          <span>
            Facebook helps you connect and share with the people in your life.
          </span>
        </div>
        <div className="login_2">
          <div className="login_2_wrap">
            <Formik
              enableReinitialize
              initialValues={{
                email,
                password,
              }}
              onSubmit={loginSubmit}
              validationSchema={loginValidation}
            >
              {(formik) => (
                <Form>
                  <LoginInput
                    type="text"
                    name="email"
                    placeholder="Email address or phone number"
                    onChange={handleLoginChange}
                  />
                  <LoginInput
                    type="password"
                    name="password"
                    placeholder="Password"
                    onChange={handleLoginChange}
                    bottom
                  />
                  <button type="submit" className="blue_btn">
                    Log In
                  </button>
                </Form>
              )}
            </Formik>
            <Link to="/forgot" className="forgot_password">
              Forgotten password?
            </Link>
            <div className="sign_splitter"></div>
            <button className="blue_btn open_signup" onClick={visibiler}>
              Create Account
            </button>
          </div>
          <Link to="/" className="sign_extra">
            <b>Create a Page</b> for a celebrity, brand or business.
          </Link>
        </div>
      </div>
      <RegisterForm visibility1={visibiler} visibility={visibility} />
    </div>
  );
}

import { Form, Formik } from "formik";
import { useState } from "react";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import RegisterInput from "../inputs/registerInput";
const userInfos = {
  first_name: "",
  last_name: "",
  email: "",
  password: "",
  bYear: new Date().getFullYear(),
  bMonth: new Date().getMonth() + 1,
  bDay: new Date().getDate(),
  gender: "",
};
// const validateReg = Yup.object({
//   first_name: Yup.string().required("First name Required"),
//   last_name: Yup.string().required("Last Name is Required"),
//   email: Yup.string().email().required("Email Or Phone required"),
//   password: Yup.string().required(),
// });
export default function RegisterForm({ visibility1, visibility }) {
  const [user, setUser] = useState(userInfos);
  const handleRegisterChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };
  const {
    first_name,
    last_name,
    email,
    password,
    bYear,
    bMonth,
    bDay,
    gender,
  } = user;
  let tempY = new Date().getFullYear();
  const years = Array.from(new Array(108), (val, index) => tempY - index);
  const months = Array.from(new Array(12), (val, index) => 1 + index);
  const days = new Date(bYear, bMonth + 1, 0).getDate();
  const dd = Array.from(new Array(days), (val, index) => index + 1);

  const url = "http://localhost:5000/api/login";
  const data = {
    first_name,
    last_name,
    email,
    password,
    bYear,
    bMonth,
    bDay,
    gender,
  };
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  };

  const navigate = useNavigate();
  const registerSubmit = async () => {
    fetch(url, options)
      .then((response) => {
        if (response.ok) {
          navigate("/");

          return response.json();
        }
        throw new Error("Request failed.");
      })
      .then((data) => console.log(data));
  };

  return (
    <div className={visibility ? "blur" : "hidden"}>
      <div className="register">
        <div className="register_header">
          <i className="exit_icon" onClick={visibility1}>
            X
          </i>
          <span>Sign Up</span>
          <span>it's quick and easy</span>
        </div>
        <Formik>
          {(formik) => (
            <Form className="register_form" onSubmit={registerSubmit}>
              <div className="reg_line">
                <RegisterInput
                  type="text"
                  placeholder="First name"
                  name="first_name"
                  onChange={handleRegisterChange}
                />
                <RegisterInput
                  type="text"
                  placeholder="Surname"
                  name="last_name"
                  onChange={handleRegisterChange}
                />
              </div>
              <div className="reg_line">
                <RegisterInput
                  type="text"
                  placeholder="Mobile number or email address"
                  name="email"
                  onChange={handleRegisterChange}
                />
              </div>
              <div className="reg_line">
                <RegisterInput
                  type="password"
                  placeholder="New password"
                  name="password"
                  onChange={handleRegisterChange}
                />
              </div>
              <div className="reg_col">
                <div className="reg_line_header">
                  Date of birth <i className="info_icon"></i>
                </div>
                <div className="reg_grid">
                  <select
                    name="bDay"
                    value={bDay}
                    onChange={handleRegisterChange}
                  >
                    {dd.map((day, index) => (
                      <option key={index}>{day}</option>
                    ))}
                  </select>
                  <select
                    name="bMonth"
                    value={bMonth}
                    onChange={handleRegisterChange}
                  >
                    {months.map((m, i) => (
                      <option key={i} value={m}>
                        {m}
                      </option>
                    ))}
                  </select>
                  <select
                    name="bYear"
                    value={bYear}
                    onChange={handleRegisterChange}
                  >
                    {years.map((y, i) => (
                      <option key={i} value={y}>
                        {" "}
                        {y}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="reg_col">
                <div className="reg_line_header">
                  Gender <i className="info_icon"></i>
                </div>
                <div className="reg_grid">
                  <label htmlFor="male">
                    Male
                    <input
                      type="radio"
                      name="gender"
                      id="male"
                      value="male"
                      onChange={handleRegisterChange}
                    />
                  </label>
                  <label htmlFor="female">
                    Female
                    <input
                      type="radio"
                      name="gender"
                      id="female"
                      value="female"
                      onChange={handleRegisterChange}
                    />
                  </label>
                  <label htmlFor="custom">
                    Custom
                    <input
                      type="radio"
                      name="gender"
                      id="custom"
                      value="custom"
                      onChange={handleRegisterChange}
                    />
                  </label>
                </div>
              </div>
              <div className="reg_infos">
                By clicking Sign Up, you agree to our{" "}
                <span>Terms, Data Policy &nbsp;</span>
                and <span>Cookie Policy.</span> You may receive SMS
                notifications from us and can opt out at any time.
              </div>
              <div className="reg_btn_wrapper">
                <button className="blue_btn open_signup" type="submit">
                  Sign Up
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}

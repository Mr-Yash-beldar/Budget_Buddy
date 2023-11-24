import React, { useState } from "react";
import "./loginstyle.css";
import { NavLink } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";
import Spinner from "../Spinner/Spinner"


function Login() {
  const [loading, setLoading] = useState(false); // [false, function
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });
  const changeHandler = (event) => {
    // console.log(e.target.value);
    const { name, value } = event.target;

    setUserData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const sendData = async (e) => {
    e.preventDefault();
    const { email, password } = userData;
    if (email === "") {
      toast.error("email is required!", {
        position: "top-center",
      });
    } else if (!email.includes("@")) {
      toast.warning("includes @ in your email!", {
        position: "top-center",
      });
    } else if (password === "") {
      toast.error("password is required!", {
        position: "top-center",
      });
    } else if (password.length < 6) {
      toast.error("password must be 6 char!", {
        position: "top-center",
      });
    } else {
      try {
        const config = {
          headers: {
            "Content-Type": "application/json",
          },
        };
        setLoading(true);

        // Make an Axios POST request to your backend
        const response = await axios.post(
          "/api/users/login",
          {
            email,
            password
          },
          config
        );
        console.log(response);
        localStorage.setItem("userInfo", JSON.stringify(response.data));

        console.log(response.data.status);

        if (response.status === 201) {
          toast.success("Login Succcessfully 😃!", {
            position: "top-center",
          });
          setUserData({  email: "", password: "" });
        }
        setLoading(false);
      } catch (error) {
        console.error("Error during registration:", error);
        toast.error("Registration failed. Please try again.");
      }
    }
  };
  return (
    <div>
      {loading ? (
        <Spinner />
      ) : (
        <div className="bg-img">
          <div className="content">
            <header>Login Form</header>
            <form onSubmit={sendData}>
              <div className="field">
                <span className="fa fa-user"></span>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="Email "
                  onChange={changeHandler}
                  value={userData.email}
                />
              </div>
              <div className="field space">
                <span className="fa fa-lock"></span>
                <input
                  type="password"
                  name="password"
                  className="pass-key"
                  required
                  placeholder="Password"
                  onChange={changeHandler}
                  value={userData.password}
                />
                {/* <span className="show">SHOW</span> */}
              </div>

              <br />
              <div className="field">
                <input type="submit" value="LOGIN" />
              </div>
            </form>
            <br />
            <div className="signup">
              Don't have account?
              <NavLink to="/register">Signup Now</NavLink>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Login;

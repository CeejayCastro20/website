import styles from "./Title.module.css";
import Logo from "../images/tupLogo.png";
import eyePassword from "../images/eyePassword.png";
import { useEffect, useState } from "react";
//import React, {useRef} from 'react';
//import axios from 'axios';
import { USERS } from "../data.js";
import { Link, useLocation, useNavigate } from "react-router-dom";

//import Swal from 'sweetalert2';
const Title = () => {
  const [email, setEmail] = useState("");
  const [isLogin, setIsLogin] = useState(true);
  const [Password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState("");

  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  useEffect(() => {
    console.log("USERS:", USERS); //console logs users whenever USERS change value
  }, [USERS]);
  // const [birthday, setBirthday] = useState("");
  const location = useLocation();
  const navigate = useNavigate();

  const clearForms = () => {
    setEmail("");
    setIsLogin("");
    setPassword("");
    setConfirmPassword("");
  };

  const handlePasswordToggle = () => {
    setShowPassword(!showPassword);
  };

  const handleConfirmPasswordToggle = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const handleFormState = () => {
    clearForms();
    setIsLogin(!isLogin);
  };

  const handleLoginSubmit = (event) => {
    event.preventDefault();
    const user = USERS.find((user) => user.email === email);

    if (user) {
      if (user.password === Password) {
        // Username and password are correct, navigate to the home page or perform other actions
        navigate("/home");
      } else {
        console.log("Invalid password");
      }
    } else {
      console.log("Invalid Email");
    }
  };

  const handleRegisterSubmit = (event) => {
    event.preventDefault();
    if (email.includes("@")) {
      if (Password === confirmPassword) {
        // Passwords match, add the user to the USERS list
        USERS.push({
          id: Math.random(),
          email: email,
          password: Password,
        });

        console.log(USERS);

        // Clear form fields after successful registration
        clearForms();

        // toggle to the login page
        handleFormState();
      } else {
        console.log("Passwords do not match");
      }
    } else {
      console.log("invalid email");
    }
  };

  //const Login = () => {
  //Swal.fire({
  //icon: "success",
  //title: "",
  //text: "Your registration has been confirmed",
  //showConfirmButton: true
  //buttons: {
  //cancel: "No",
  //confirm: "Yes"
  //},
  //dangerMode: true,
  //}).then((willDelete) => {
  //if (willDelete) {
  // swal("Poof! Your imaginary file has been deleted!", {
  //icon: "success",
  //});
  //} else {
  //swal("Your imaginary file is safe!");
  //}
  //});
  //})
  //axios({
  // method: "post",
  //data: {
  //Uname: Username,
  //Pword: Password,
  // },
  //withCredentials: true,
  //url: "http://localhost:3000/"
  //}).then((response) => {
  // if(response.data.message === "Username Already Taken"){
  // console.log('done!');
  //  }
  // })
  //  };
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.loginCard}>
          <div className={styles.above}>
            <img src={Logo} />
            <h6>Technological University of the Philippines - Cavite</h6>
          </div>
          {isLogin ? (
            <form onSubmit={handleLoginSubmit}>
              <div className={styles.left1}>
                <h2>ID VALIDATION LOGIN PORTAL</h2>
                <hr className={styles.blackDivider} />
                <p>User Authentication</p>
                <div className={styles.spread}>
                  <input
                    type="text"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email"
                    required
                  />
                  <div className={styles.passwordDiv}>
                    <input
                      value={Password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="Password"
                      className={styles.passwordInput}
                      type={showPassword ? "text" : "password"}
                      required
                    />
                    <img
                      src={eyePassword}
                      alt="Toggle Password Visibility"
                      onClick={handlePasswordToggle}
                      className={styles.eyeIcon}
                    />
                  </div>

                  <button type="submit">Log In</button>

                  <p>
                    <a onClick={toggleModal}>Forgot Password?</a>
                  </p>
                  <hr className={styles.blackDivider} />

                  <button
                    onClick={handleFormState}
                    style={{ backgroundColor: "green" }}
                  >
                    Create New Account
                  </button>
                </div>
              </div>
            </form>
          ) : (
            <form onSubmit={handleRegisterSubmit}>
              <div className={styles.left1}>
                <h2>ID VALIDATION REGISTRATION</h2>
                <hr className={styles.blackDivider} />
                <p>User Registration</p>
                <div className={styles.spread}>
                  <input
                    type="text"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email"
                    required
                  />
                  <div className={styles.passwordDiv}>
                    <input
                      value={Password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="Password"
                      className={styles.passwordInput}
                      type={showPassword ? "text" : "password"}
                      required
                    />
                    <img
                      src={eyePassword}
                      alt="Toggle Password Visibility"
                      onClick={handlePasswordToggle}
                      className={styles.eyeIcon}
                    />
                  </div>
                  <div className={styles.passwordDiv}>
                    <input
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      placeholder="Confirm Password"
                      className={styles.passwordInput}
                      type={showConfirmPassword ? "text" : "password"}
                      required
                    />
                    <img
                      src={eyePassword}
                      alt="Toggle Password Visibility"
                      onClick={handleConfirmPasswordToggle}
                      className={styles.eyeIcon}
                    />
                  </div>
                  {/* <input
                    type="date"
                    value={birthday}
                    onChange={(e) => setBirthday(e.target.value)}
                    placeholder="Birthday"
                  /> */}
                  <button type="submit" style={{ backgroundColor: "green" }}>
                    Create New Account
                  </button>
                  <p onClick={handleFormState}>
                    <a>Already have an account?</a>
                  </p>
                </div>
              </div>
            </form>
          )}
        </div>
      </div>
      {/* Modal */}
      {showModal && (
        <div className={styles.modal}>
          <div className={styles.modalContent}>
            <h2>Forgot Password?</h2>
            <div className={styles.modalDivider}/>
            <p>Kindly reach out to the administrator for resolution.</p>
            <button onClick={toggleModal}>Okay</button>
          </div>
        </div>
      )}

      {/* <div className={styles.con}>
            <div className={styles.right}></div>
            <div className={styles.left}>
              <div className={styles.above}>
                <img src={Logo} />
                <h6>Technological University of the Philippines - Cavite</h6>
              </div>
              <div className={styles.left1}>
                <h2>ID VALIDATION LOGIN PORTAL</h2>
                <p>User Authentication</p>
                <div className={styles.spread}>
                  <input
                    type="fn"
                    value={Username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="Username"
                  ></input>
                </div>
                <div className={styles.spread}>
                  <input
                    type="ea"
                    value={Password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                  ></input>
                </div>
                <div className={styles.spread}>
                  <p>
                    <a href="a">Forgot Password?</a>
                  </p>
                </div>
                <div className={styles.spread}>
                  <Link to="/Home">
                    <button>Log In</button>
                  </Link>
                </div>
              </div>
            </div>
          </div> */}
    </div>
  );
};

export default Title;

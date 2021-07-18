import React, { useState, useContext } from "react";
import { Redirect, Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import loginSvg from "../../assets/login.svg";
import logo from "../../assets/favicon.png";
import { toast } from "react-toastify";
import "../../toast.css";
import { Row, Col, Image, Form, Button } from "react-bootstrap";
import { motion } from "framer-motion";

const Login = () => {
  const { login, isAuthenticated } = useContext(AuthContext);
  const [formData, setFormData] = useState({ email: "", password: "" });
  const { email, password } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    login(email, password);
  };

  if (isAuthenticated === true) {
    toast.success("Login Succesfull", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
    });
    localStorage.setItem("isAuthenticated", JSON.stringify(isAuthenticated));
    return <Redirect to="/dashboard" />;
  }

  return (
    <motion.div
      className="login-container"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{
        delay: 0.2,
        duration: 0.8,
      }}
    >
      <Row>
        <Col md="6" className="login-image">
          <Image src={loginSvg} fluid />
        </Col>

        <Col md="6" className="login-form">
          <Form onSubmit={(e) => onSubmit(e)}>
            <div className="w-25 p-3">
              <Image src={logo} fluid />
            </div>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter Email Address"
                name="email"
                value={email}
                onChange={(e) => onChange(e)}
                required
              />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                name="password"
                value={password}
                onChange={(e) => onChange(e)}
                minLength="5"
                required
              />
            </Form.Group>
            <Button
              style={{
                backgroundColor: "#3091FF",
                color: "white",
                margin: "2%",
              }}
              type="submit"
            >
              Login
            </Button>
          </Form>
          <p>
            Don't have an account?{" "}
            <Link to="/register">Click here to Register</Link>
          </p>
        </Col>
      </Row>
    </motion.div>
  );
};

export default Login;

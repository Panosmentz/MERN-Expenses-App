import React, { useState, useContext } from "react";
import { Redirect, Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import registerSvg from "../../assets/register.svg";
import { Row, Col, Image, Form, Button } from "react-bootstrap";
import logo from "../../assets/favicon.png";
import { toast } from "react-toastify";
import "../../toast.css";
import { motion } from "framer-motion";

const Register = () => {
  const { register, registration } = useContext(AuthContext);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  });

  const { name, email, password, password2 } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    if (password !== password2) {
      toast.error("Passwords do not match, try again", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
      });
    } else {
      register({ name, email, password });
    }
  };
  if (registration) {
    return <Redirect to="/Login" />;
  }

  return (
    <motion.div
      className="register-container"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{
        delay: 0.2,
        duration: 0.8,
      }}
    >
      <Row>
        <Col md="6" className="register-image">
          <Image src={registerSvg} fluid />
        </Col>

        <Col md="6" className="register-form">
          <Form onSubmit={(e) => onSubmit(e)}>
            <div className="w-25 p-3">
              <Image src={logo} fluid />
            </div>
            <Form.Group as={Row}>
              <Form.Label column sm="2">
                Name
              </Form.Label>
              <Col sm="10">
                <Form.Control
                  type="text"
                  placeholder="Name"
                  name="name"
                  value={name}
                  onChange={(e) => onChange(e)}
                  required
                />
              </Col>
            </Form.Group>
            <Form.Group as={Row}>
              <Form.Label column sm="2">
                Email
              </Form.Label>
              <Col sm="10">
                <Form.Control
                  type="email"
                  placeholder="Email Address"
                  name="email"
                  value={email}
                  onChange={(e) => onChange(e)}
                  required
                />
              </Col>
            </Form.Group>
            <Form.Group as={Row}>
              <Form.Label column sm="2">
                Password
              </Form.Label>
              <Col sm="10">
                <Form.Control
                  type="password"
                  placeholder="Password"
                  name="password"
                  value={password}
                  onChange={(e) => onChange(e)}
                  required
                />
              </Col>
            </Form.Group>
            <Form.Group as={Row}>
              <Form.Label column sm="2">
                Confirm Password
              </Form.Label>
              <Col sm="10">
                <Form.Control
                  type="password"
                  placeholder="Confirm Password"
                  name="password2"
                  value={password2}
                  onChange={(e) => onChange(e)}
                  required
                />
              </Col>
            </Form.Group>
            <Button
              style={{
                backgroundColor: "#3091FF",
                color: "white",
                margin: "2%",
              }}
              type="submit"
            >
              Register
            </Button>
          </Form>
          <p>
            Already have an account? <Link to="/login">Sign In</Link>
          </p>
        </Col>
      </Row>
    </motion.div>
  );
};

export default Register;

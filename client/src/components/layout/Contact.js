import React, { useState } from "react";
import { Container, Modal, Button } from "react-bootstrap";
import { motion } from "framer-motion";

const Contact = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <Container className="contact-div">
      <Button variant="dark" onClick={handleShow}>
        <i className="far fa-paper-plane"></i>
      </Button>

      <Modal
        className="contact-modal"
        show={show}
        onHide={handleClose}
        size="sm"
      >
        <motion.div
          initial={{ y: "100vh", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            duration: 2,
            type: "spring",
            stiffness: 120,
          }}
        >
          <Modal.Header closeButton>
            <Modal.Title className="text-white">
              You can find me on :{" "}
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Container className="modal-items">
              <ul>
                <li>
                  <a
                    href="https://www.linkedin.com/in/panagiotis-mentz/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i class="fab fa-linkedin"></i>
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/Panosmentz"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i class="fab fa-github"></i>
                  </a>
                </li>

                <li>
                  <a
                    href="mailto:pmentzdev@outlook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i class="fas fa-envelope"></i>
                  </a>
                </li>

                <li>
                  <a
                    href="https://www.facebook.com/panos.mentz"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i class="fab fa-facebook-f"></i>
                  </a>
                </li>
              </ul>
            </Container>
          </Modal.Body>
          <Modal.Footer className="text-white text-center font-weight-bold">
            ©2020 Created by Panagiotis Mentzelopoulos
            <Container className="d-flex justify-content-center mt-2">
              <Button
                variant="primary"
                onClick={handleClose}
                className="text-center"
              >
                Close
              </Button>
            </Container>
          </Modal.Footer>
        </motion.div>
      </Modal>
    </Container>
  );
};

export default Contact;

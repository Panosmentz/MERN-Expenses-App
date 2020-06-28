import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import dashboardSvg from "../../assets/dashboard.svg";
import savingsSvg from "../../assets/savings.svg";
import transactionsSvg from "../../assets/transactions.svg";
import revenueSvg from "../../assets/revenue.svg";
import { Container, Row, Col, Image, Card } from "react-bootstrap";
import { Balance } from "../Transactions/Balance";
import { TransactionList } from "../Transactions/TransactionList";
import { IncomeExpenses } from "../Transactions/IncomeExpenses";
import { TransactionsContext } from "../../context/TransactionsContext";
import { motion } from "framer-motion";

const Dashboard = () => {
  const { transactions } = useContext(TransactionsContext);
  const { isAuthenticated } = useContext(AuthContext);

  return (
    <Container>
      <motion.div>
        <motion.h1
          className="text-center text-white mt-3"
          initial={{ y: "-100vh", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            delay: 0.2,
            duration: 1,
          }}
          whileHover={{
            scale: 0.9,
            textShadow: "0px 0px 8px rgb(48,145,255)",
            transition: { yoyo: Infinity },
          }}
        >
          Welcome to your expense tracker
        </motion.h1>
      </motion.div>
      <motion.div
        initial={{ x: "-100vw", opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{
          delay: 0.2,
          duration: 0.8,
        }}
      >
        <Image src={dashboardSvg} fluid className="mt-5" />
      </motion.div>
      <motion.div
        className="mt-5 text-center"
        initial={{ x: "100vw", opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{
          delay: 0.2,
          duration: 0.8,
        }}
      >
        <Row className="justify-content-center no-gutters">
          <Col md={{ span: 5 }}>
            <Card
              className="dash-balance"
              style={{
                width: "20rem",
                backgroundColor: "#4e5461",
                borderStyle: "none",
              }}
            >
              <Card.Img variant="top" src={savingsSvg} />
              <Card.Body>
                <Card.Title className="text-white">
                  Your current Balance
                </Card.Title>

                <Balance />

                <NavLink to="/transactions" className="btn btn-primary">
                  Manage your Transactions
                </NavLink>
              </Card.Body>
            </Card>

            <Card
              style={{
                width: "20rem",
                marginTop: "50px",
                backgroundColor: "#4e5461",
                borderStyle: "none",
              }}
            >
              <Card.Img variant="top" src={revenueSvg} />
              <Card.Body>
                <Card.Title className="text-white">
                  Your Income-Expenses
                </Card.Title>

                <IncomeExpenses />

                <NavLink to="/transactions" className="btn btn-primary">
                  Manage your Transactions
                </NavLink>
              </Card.Body>
            </Card>
          </Col>
          <Col md={{ span: 4 }}>
            <Card
              style={{
                width: "22rem",
                backgroundColor: "#4e5461",
                borderStyle: "none",
              }}
            >
              <Card.Img variant="top" src={transactionsSvg} />
              <Card.Body>
                <Card.Title className="text-white">
                  Your recent transactions
                </Card.Title>

                <TransactionList />

                <NavLink to="/transactions" className="btn btn-primary ">
                  Manage your Transactions
                </NavLink>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </motion.div>
    </Container>
  );
};

export default Dashboard;

import React, { useContext } from "react";
import { Header } from "./Header";
import { Balance } from "./Balance";
import { IncomeExpenses } from "./IncomeExpenses";
import { TransactionList } from "./TransactionList";
import { AddTransaction } from "./AddTransaction";
import { AuthContext } from "../../context/AuthContext";
import { Container, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";

const AllTransactions = () => {
  const { isAuthenticated } = useContext(AuthContext);

  return (
    <Container>
      <Header />
      <Row className="justify-content-md-center mt-5">
        <Col md={4}>
          <motion.div
            className="my-transactions"
            initial={{ x: "-100vw", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{
              delay: 0.2,
              duration: 1,
            }}
          >
            <Balance />
            <IncomeExpenses />
            <AddTransaction />
          </motion.div>
        </Col>
        <Col md={{ span: 6, offset: 1 }}>
          <motion.div
            className="my-transactions"
            initial={{ x: "100vw", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{
              delay: 0.2,
              duration: 1,
            }}
          >
            <TransactionList />
          </motion.div>
        </Col>
      </Row>
    </Container>
  );
};

export default AllTransactions;

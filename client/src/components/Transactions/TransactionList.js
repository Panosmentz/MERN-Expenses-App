import React, { useContext, useEffect } from "react";
import { Transaction } from "./Transaction";
import "../../App.css";
import { TransactionsContext } from "../../context/TransactionsContext";
import { Container } from "react-bootstrap";
export const TransactionList = () => {
  const { transactions, getTransactions } = useContext(TransactionsContext);

  useEffect(() => {
    getTransactions();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container className="transaction-list-div">
      <ul className="list">
        <h3 className="text-white">History</h3>
        {transactions.map((transaction) => (
          <Transaction key={transaction._id} transaction={transaction} />
        ))}
      </ul>
    </Container>
  );
};

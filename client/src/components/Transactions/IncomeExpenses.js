import React, { useContext } from "react";
import { TransactionsContext } from "../../context/TransactionsContext";
import { numberWithCommas } from "../../utils/format";
import { Container } from "react-bootstrap";
import "../../App.css";

export const IncomeExpenses = () => {
  const { transactions } = useContext(TransactionsContext);

  const amounts = transactions.map((transaction) => transaction.amount);

  const income = amounts
    .filter((item) => item > 0)
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);

  const expense = (
    amounts.filter((item) => item < 0).reduce((acc, item) => (acc += item), 0) *
    -1
  ).toFixed(2);

  return (
    <Container className="inc-exp-div">
      <Container>
        <h4 className="text-white">Income</h4>
        <p className="money plus">€{numberWithCommas(income)}</p>
      </Container>
      <Container>
        <h4 className="text-white">Expenses</h4>
        <p className="money minus">€{numberWithCommas(expense)}</p>
      </Container>
    </Container>
  );
};

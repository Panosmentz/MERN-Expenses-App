import React, { useContext } from "react";
import { TransactionsContext } from "../../context/TransactionsContext";
import { numberWithCommas } from "../../utils/format";
import "../../App.css";

export const Balance = () => {
  const { transactions } = useContext(TransactionsContext);

  const amounts = transactions.map((transaction) => transaction.amount);

  const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);

  return (
    <div className="balance-div">
      <h4 className="text-white">Your Balance</h4>
      <h1 className="text-white font-weight-bold">
        €{numberWithCommas(total)}
      </h1>
    </div>
  );
};

export default Balance;

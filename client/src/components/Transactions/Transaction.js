import React, { useContext } from "react";
import { TransactionsContext } from "../../context/TransactionsContext";
import { numberWithCommas } from "../../utils/format";
import "../../App.css";

export const Transaction = ({ transaction }) => {
  const { deleteTransaction } = useContext(TransactionsContext);

  const sign = transaction.amount < 0 ? "-" : "+";

  return (
    <li className={transaction.amount < 0 ? "minus" : "plus"}>
      {transaction.text}{" "}
      <span>
        {sign}€{numberWithCommas(Math.abs(transaction.amount))}
      </span>
      <button
        onClick={() => deleteTransaction(transaction._id)}
        className="delete-btn"
      >
        X
      </button>
    </li>
  );
};

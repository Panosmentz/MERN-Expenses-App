import React, { useState, useContext } from "react";
import { TransactionsContext } from "../../context/TransactionsContext";
import { Container, Form, Button } from "react-bootstrap";
import "../../App.css";
import { toast } from "react-toastify";
import "../../toast.css";

export const AddTransaction = () => {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState(0);

  const { addTransaction } = useContext(TransactionsContext);

  const clearInputs = () => {
    setText("");
    setAmount(0);
  };
  const onSubmit = (e) => {
    e.preventDefault();

    const newTransaction = {
      text,
      amount: +amount,
    };

    clearInputs();
    if (text && amount !== 0) {
      toast.success("Transaction added", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
      });
      addTransaction(newTransaction);
    } else {
      toast.error(
        "Please enter a text and a positive or negative amount for your transaction",
        {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true,
          progress: undefined,
        }
      );
    }
  };

  return (
    <Container className="add-exp-div">
      <h3 className="text-white">Add new transaction</h3>
      <Form onSubmit={(e) => onSubmit(e)}>
        <Form.Label className="text-primary">Transaction Name</Form.Label>
        <Form.Control
          className=""
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Enter text..."
        />

        <Form.Label className="text-primary">
          Amount (negative - expense, positive - income)
        </Form.Label>
        <Form.Control
          className=""
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="Enter amount..."
        />
        <Button className="Add-Transaction-btn" type="submit">
          Add transaction{" "}
        </Button>
      </Form>
    </Container>
  );
};

import logo from "./logo.svg";
import "./App.css";
import Transfer from "./components/Transfer";
import Receipt from "./components/Receipt";
import React, { useState } from "react";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [transactionData, setTransactionData] = useState({});

  const handleTransfer = ({ amount, fromAccount, toAccount }) => {
    if (amount < 0 || amount === 0 || amount === "") {
      alert("Enter valid amount");
      return;
    }
    setTransactionData({
      amount,
      fromAccount,
      toAccount,
      transactionDate: new Date().toDateString(),
      transactionID:
        "0xb4bc263278d3f77a652a8d73a6bfd8ec0ba1a63923bbb4f38147fb8a943da26d",
    });
    setIsModalOpen(true);
  };
  return (
    <div className="App">
      <Transfer
        openReceipt={({ amount, fromAccount, toAccount }) =>
          handleTransfer({ amount, fromAccount, toAccount })
        }
      />
      {isModalOpen && (
        <Receipt
          closeModal={() => {
            setIsModalOpen(false);
          }}
          receiptData={transactionData}
        />
      )}
    </div>
  );
}

export default App;

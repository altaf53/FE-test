import React, { useState } from "react";
import "../transfer.css";

const Transfer = ({ openReceipt }) => {
  const [amount, setAmount] = useState("");
  const fromAccount = "0x4E826B1d67b311EC15003820fE854a024E11F01c";
  const toAccount = "0xD777954b4C93bCd28b66b885F9e4F0B9aA2Ea71A";

  const handleAmountChange = (e) => {
    setAmount(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    openReceipt({ amount, fromAccount, toAccount });
    console.log("Transfer amount:", amount);
  };

  return (
    <div className="transfer-container">
      <h2>Transfer Funds</h2>
      <p>From Account: {fromAccount}</p>
      <p>To Account: {toAccount}</p>
      <form onSubmit={handleSubmit}>
        <label>
          Amount:
          <input type="number" value={amount} onChange={handleAmountChange} />
        </label>
        <button type="submit">Transfer</button>
      </form>
    </div>
  );
};

export default Transfer;

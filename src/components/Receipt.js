import React from "react";
import Modal from "react-modal";
import "../modal.css";

const Receipt = ({ receiptData, closeModal }) => {
  const { transactionDate, fromAccount, toAccount, amount, transactionID } =
    receiptData;

  return (
    <Modal
      isOpen={true}
      onRequestClose={closeModal}
      contentLabel="Receipt Modal"
      className="custom-modal"
      overlayClassName="custom-modal-overlay"
      ariaHideApp={false}
    >
      <div className="modal-content">
        <button onClick={closeModal} className="close-button">
          Close Receipt
        </button>
        <h2>Transaction Receipt</h2>
        <div className="receipt-details">
          <div className="receipt-field">
            <span>Date:</span>
            <span>{receiptData.transactionDate}</span>
          </div>
          <div className="receipt-field">
            <span>Source Account:</span>
            <span className="overflow-text">{receiptData.fromAccount}</span>
          </div>
          <div className="receipt-field">
            <span>Destination Account:</span>
            <span className="overflow-text">{receiptData.toAccount}</span>
          </div>
          <div className="receipt-field">
            <span>Amount:</span>
            <span>{receiptData.amount}</span>
          </div>
          <div className="receipt-field">
            <span>Transaction ID:</span>
            <span className="overflow-text">{receiptData.transactionID}</span>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default Receipt;

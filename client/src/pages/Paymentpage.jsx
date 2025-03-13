import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./paymentpage.css";

const PaymentPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const totalAmount = location.state?.totalAmount || 0;

  const [paymentMethod, setPaymentMethod] = useState("");
  const [showPopup, setShowPopup] = useState(false);

  const [cardDetails, setCardDetails] = useState({ number: "", expiry: "", cvv: "" });
  const [upiId, setUpiId] = useState("");
  const [netBankingDetails, setNetBankingDetails] = useState({ bankName: "", accountNumber: "", ifsc: "" });

  const handleDetailChange = (e) => {
    const { name, value } = e.target;
    setNetBankingDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const handleCardChange = (e) => {
    const { name, value } = e.target;

    if (name === "number" || name === "cvv") {
      if (!/^\d*$/.test(value)) {
        alert("⚠️ Enter only numbers!");
        return;
      }
      setCardDetails((prevDetails) => ({ ...prevDetails, [name]: value }));
    }

    if (name === "expiry") {
      const formattedValue = value.replace(/[^0-9/]/g, "").slice(0, 5);
      if (value !== formattedValue) {
        alert("⚠️ Only numbers and '/' allowed in expiry date!");
      }
      setCardDetails((prevDetails) => ({ ...prevDetails, [name]: formattedValue }));
    }
  };

  const handlePayment = () => {
    if (paymentMethod === "card" && (!cardDetails.number || !cardDetails.expiry || !cardDetails.cvv)) {
      alert("Please enter complete card details.");
      return;
    }
    if (paymentMethod === "upi" && !upiId) {
      alert("Please enter your UPI ID.");
      return;
    }
    if (paymentMethod === "netbanking" && (!netBankingDetails.bankName || !netBankingDetails.accountNumber || !netBankingDetails.ifsc)) {
      alert("Please enter complete net banking details.");
      return;
    }

    alert("Payment Successful! 🎉");
    setShowPopup(false);
    navigate("/");
  };

  return (
    <div className="payment-page">
      <h2>💳 Select Payment Method</h2>
      <h3>Total Amount: Rs. {totalAmount}</h3>

      <div className="payment-methods">
        <button onClick={() => { setPaymentMethod("card"); setShowPopup(true); }}>💳 Card Payment</button>
        <button onClick={() => { setPaymentMethod("upi"); setShowPopup(true); }}>🔢 UPI Payment</button>
        <button onClick={() => { setPaymentMethod("netbanking"); setShowPopup(true); }}>🏦 Net Banking</button>
        <button onClick={() => { setPaymentMethod("cod"); setShowPopup(true); }}>🚚 Cash on Delivery</button>
      </div>

      <button className="close-payment" onClick={() => navigate("/cart")}>❌ Cancel</button>

      {showPopup && (
        <div className="modal-overlay">
          <div className="modal">
            <button className="close-popup" onClick={() => setShowPopup(false)}>❌ Close</button>

            {paymentMethod === "card" && (
              <div>
                <h3>Enter Card Details</h3>
                <input type="text" name="number" placeholder="Card Number" value={cardDetails.number} onChange={handleCardChange} maxLength="16" />
                <input
                  type="text"
                  name="expiry"
                  placeholder="MM/YY"
                  value={cardDetails.expiry}
                  onChange={handleCardChange}
                  maxLength="5"
                />
                <input type="password" name="cvv" placeholder="CVV" value={cardDetails.cvv} onChange={handleCardChange} maxLength="3" />
                <button className="confirm-payment" onClick={handlePayment}>💳 Pay Now</button>
              </div>
            )}

            {paymentMethod === "upi" && (
              <div>
                <h3>Enter UPI ID</h3>
                <input type="text" placeholder="UPI ID (example@upi)" value={upiId} onChange={(e) => setUpiId(e.target.value)} />
                <button className="confirm-payment" onClick={handlePayment}>🔢 Pay via UPI</button>
              </div>
            )}

            {paymentMethod === "netbanking" && (
              <div>
                <h3>Enter Net Banking Details</h3>
                <select name="bankName" value={netBankingDetails.bankName} onChange={handleDetailChange}>
                  <option value="">Select Bank</option>
                  <option value="State Bank of India">State Bank of India</option>
                  <option value="HDFC Bank">HDFC Bank</option>
                  <option value="ICICI Bank">ICICI Bank</option>
                  <option value="Axis Bank">Axis Bank</option>
                  <option value="Other">Other (Enter Manually)</option>
                </select>
                {netBankingDetails.bankName === "Other" && (
                  <input type="text" name="bankName" placeholder="Enter Bank Name" onChange={handleDetailChange} />
                )}
                <input type="text" name="accountNumber" placeholder="Account Number" value={netBankingDetails.accountNumber} onChange={handleDetailChange} />
                <input type="text" name="ifsc" placeholder="IFSC Code" value={netBankingDetails.ifsc} onChange={handleDetailChange} />
                <button className="confirm-payment" onClick={handlePayment}>🏦 Proceed</button>
              </div>
            )}

            {paymentMethod === "cod" && (
              <div>
                <h3>Cash on Delivery Selected</h3>
                <p>Pay at the time of delivery.</p>
                <button className="confirm-payment" onClick={handlePayment}>🚚 Confirm Order</button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default PaymentPage;

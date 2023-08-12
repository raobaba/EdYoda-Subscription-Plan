import React, { useState } from "react";
import "../Styles/Subscription.css";
import { FaClock } from "react-icons/fa";

export default function Subscription() {
  const [selectedSubscription, setSelectedSubscription] = useState(1);

  const subscriptionPlans = [
    { id: 1, months: 1, price: 99, disabled: true },
    { id: 2, months: 12, price: 149, disabled: false },
    { id: 3, months: 3, price: 179, disabled: false },
    { id: 4, months: 3, price: 99, disabled: false },
  ];

  const handleSubscriptionSelect = (id) => {
    setSelectedSubscription(id);
  };

  const calculateTotalAmount = () => {
    const selectedPlan = subscriptionPlans.find(
      (plan) => plan.id === selectedSubscription
    );
    return selectedPlan ? selectedPlan.price : 0;
  };

  const initialTotalAmount = 18500;
  const selectedPlanPrice = calculateTotalAmount();
  const totalAmount = initialTotalAmount - selectedPlanPrice;

  return (
    <div className="subscription">
      <div className="sign"></div>
      <div className="signup">
        <div>
          <div className="number">1</div>
          <p className="text">Sign Up</p>
        </div>
        <div>
          <div className="number">2</div>
          <p className="text">Subscribe</p>
        </div>
      </div>
      <h3>Select your subscription plan</h3>
      {subscriptionPlans.map((plan) => (
        <div key={plan.id}>
          <label
            className={`checkbox-button ${
              plan.id === selectedSubscription ? "expired" : ""
            }`}
          >
            <input
              type="checkbox"
              className="checkbox-input"
              disabled={plan.disabled}
              checked={plan.id === selectedSubscription}
              onChange={() => handleSubscriptionSelect(plan.id)}
            />
            {plan.id === 1 ? "Expired" : `${plan.months} months`} Subscription
            <span className="total-text">
              <span>Total: ₹{plan.id === 1 ? 99 : plan.price}</span>
              <br />
              <span>₹15/mo</span>
            </span>
          </label>
        </div>
      ))}
      <hr />
      <div className="fee">
        <p>Subscription Fee</p>
        <p>₹ {totalAmount}</p>
      </div>
      <div>
        <label className="limited-offer">
          <div className="grid">
            <span className="valid">Limited time offer</span>
            <div className="flex">
              <FaClock />
              <span className="valid-till">
                Offer valid till 25th March 2023
              </span>
            </div>
          </div>
          <span className="total-text">
            <span>₹ {initialTotalAmount-selectedPlanPrice}</span> <br />
          </span>
        </label>
        <div className="flex-item">
          <span>Total(Incl. of 18% GST)</span>
          <span>₹ {totalAmount + (totalAmount * 18) / 100}</span>
        </div>
        <div className="pay-button">
          <button>CANCEL</button>
          <button>PROCEED TO PAY</button>
        </div>
        <div style={{ marginTop: "10px" }}>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrEMNpIu7dlr_sDoWZ0n1rG9NaE9KRvirE4g&usqp=CAU"
            alt=""
            width={120}
            height={60}
          />
        </div>
      </div>
    </div>
  );
}

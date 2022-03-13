import React from "react";
import { useNavigate } from "react-router-dom";

export const OrderSummary = () => {
  const navigate = useNavigate();

  return (
    <div>
      <p>OrderSummary</p>
      <button onClick={() => navigate("/")}>go back</button>
    </div>
  );
};

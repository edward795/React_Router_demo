import React from "react";
import { useNavigate } from "react-router-dom";

export const Home = () => {
  const navigate = useNavigate();

  return (
    <div>
      <p>Home Component</p>
      <button onClick={() => navigate("order-summary", { replace: true })}>
        order
      </button>
    </div>
  );
};

import React from "react";
import { useParams } from "react-router-dom";

export const UserDetails = () => {
  const params = useParams();
  const userId = params.userid;

  return <div>Details About User {userId}</div>;
};

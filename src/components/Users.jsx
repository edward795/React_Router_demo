import React from "react";
import { Outlet, useSearchParams } from "react-router-dom";

export const Users = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const showActiveUsers = searchParams.get("filter") === "active";
  return (
    <div>
      <li>User 1</li>
      <li>User 2</li>
      <li>User 3</li>
      <div style={{ background: "#555", color: "#fff" }}>
        <Outlet />
      </div>
      <div>
        <button onClick={() => setSearchParams({ filter: "active" })}>
          Active Users
        </button>
        <button onClick={() => setSearchParams({})}>Reset Filter</button>
      </div>
      <div>
        {showActiveUsers ? (
          <h2>Showing Active Users</h2>
        ) : (
          <h2>Showing All Users</h2>
        )}
      </div>
    </div>
  );
};

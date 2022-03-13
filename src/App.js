import logo from "./logo.svg";
import "./App.css";
import { Home } from "./components/Home";
// import About from "./components/About";
import { Routes, Route, Link } from "react-router-dom";
import { NavBar } from "./components/NavBar";
import { OrderSummary } from "./components/OrderSummary";
import { NoMatchRoute } from "./components/NoMatchRoute";
import { Products } from "./components/Products";
import { New } from "./components/New";
import { Featured } from "./components/Featured";
import { Users } from "./components/Users";
import { UserDetails } from "./components/UserDetails";
import { Admin } from "./components/Admin";
import React from "react";
import { Profile } from "./components/Profile";
import { AuthProvider } from "./components/Auth";
import { Login } from "./components/Login";
import { RequireAuth } from "./components/RequireAuth";

const LazyAbout = React.lazy(() => import("./components/About"));

function App() {
  return (
    <AuthProvider>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="about" element={<About />} /> */}
          <Route
            path="/profile"
            element={
              <RequireAuth>
                <Profile />
              </RequireAuth>
            }
          />
          <Route
            path="about"
            element={
              <React.Suspense fallback="Loading..">
                <LazyAbout />
              </React.Suspense>
            }
          />
          <Route path="order-summary" element={<OrderSummary />} />
          <Route path="products" element={<Products />}>
            <Route index element={<Featured />} />
            <Route path="new" element={<New />} />
            <Route path="featured" element={<Featured />} />
          </Route>
          <Route path="users" element={<Users />}>
            <Route path=":userid" element={<UserDetails />} />
            <Route path="admin" element={<Admin />} />
          </Route>
          <Route path="login" element={<Login />} />
          <Route path="*" element={<NoMatchRoute />} />
        </Routes>
      </div>
    </AuthProvider>
  );
}

export default App;

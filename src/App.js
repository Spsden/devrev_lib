import "./App.css";
import Home from "./pages/HomePage/home";

import Login from "./pages/LoginPage/login";
import Signup from "./pages/SignupPage/signup";
import { Routes, Route } from "react-router-dom";
import User from "./pages/UserPage/user";
import { Navigate } from "react-router-dom";
import CommonLayout from "./component/commonLayout/commonLayout";
import SearchResults from "./pages/SeachResults/searchResults";

import { RequireAuth } from "react-auth-kit";
import Cart from "./pages/UserPage/SubPages/cart";
import Borrowed from "./pages/UserPage/SubPages/borrowed";
import Suggestions from "./pages/UserPage/SubPages/suggestions";
import ProjectDetails from "./pages/AboutPage/about";

function App() {
  return (
    <Routes>
      <Route path="/" element={<CommonLayout />}>
        <Route index element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route
          path="user"
          element={
            <RequireAuth loginPath="/login">
              <User />
            </RequireAuth>
          }
        >
          <Route index element={<Suggestions />} />
          <Route path="cart" element={<Cart />} />
          <Route path="borrowed" element={<Borrowed />} />
          <Route path="suggestions" element={<Suggestions />} />
        </Route>

        <Route path="/search/:searchTerm" element={<SearchResults />} />

        <Route path="*" element={<Navigate to="/home" replace />} />
      </Route>

      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/about" element={<ProjectDetails />} />
    </Routes>
  );
}

export default App;

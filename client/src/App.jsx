import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import Home from "./pages/Home";
import Login from "./pages/Login";
import LoginVerification from "./pages/LoginVerification";
import Register from "./pages/Register";
import EmailVerification from "./pages/EmailVerification";
import ForgotPassword from "./pages/ForgotPassword";
import ResetPassword from "./pages/ResetPassword";
import NotFound from "./pages/NotFound";
import Loading from "./components/Loading";
import { AppData } from "./context/AppContext";
import PrivateRoute from "./routes/PrivateRoute";
import PublicRoute from "./routes/PublicRoute";
import { GoogleOAuthProvider } from "@react-oauth/google";

const App = () => {
  const { loading } = AppData();

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <BrowserRouter>
          <Routes>
            {/* Private */}
            <Route path="/" element={<Home />} />

            {/* Public */}
            <Route
              path="/login"
              element={
                <PublicRoute>
                  <GoogleOAuthProvider
                    clientId={import.meta.env.VITE_REACT_APP_GOOGLE_CLIENT_ID}
                  >
                    <Login />
                  </GoogleOAuthProvider>
                </PublicRoute>
              }
            />

            <Route
              path="/register"
              element={
                <PublicRoute>
                  <Register />
                </PublicRoute>
              }
            />

            <Route
              path="/verify-otp"
              element={
                <PublicRoute>
                  <LoginVerification />
                </PublicRoute>
              }
            />

            <Route
              path="/token/:token"
              element={
                <PublicRoute>
                  <EmailVerification />
                </PublicRoute>
              }
            />

            <Route
              path="/forgot-password"
              element={
                <PublicRoute>
                  <ForgotPassword />
                </PublicRoute>
              }
            />

            <Route
              path="/verify-reset-password/:token"
              element={
                <PublicRoute>
                  <ResetPassword />
                </PublicRoute>
              }
            />

            {/* 404 Route */}
            <Route path="*" element={<NotFound />} />
          </Routes>

          <ToastContainer />
        </BrowserRouter>
      )}
    </>
  );
};

export default App;

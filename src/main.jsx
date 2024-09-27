import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import router from "./Components/Routes/Routes";
import "./index.css";
import AuthProvider from "./Components/Providers/AuthProvider";
import { ToastContainer } from "react-toastify";

createRoot(document.getElementById("root")).render(
  <AuthProvider>
    <StrictMode>
      <RouterProvider router={router} />
    </StrictMode>
    <ToastContainer></ToastContainer>
  </AuthProvider>
);

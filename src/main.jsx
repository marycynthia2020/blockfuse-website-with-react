import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { ThemeContext } from "./Contexts/ThemeContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeContext>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ThemeContext>
  </StrictMode>
);

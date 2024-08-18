import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <main className="text-center p-8 my-0 mx-auto max-w-7xl">
      <App />
    </main>
  </StrictMode>
);

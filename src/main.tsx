import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import AppHelmetProvider from "./components/AppHelmetProvider.tsx";

createRoot(document.getElementById("root")!).render(
  <AppHelmetProvider>
    <App />
  </AppHelmetProvider>
);

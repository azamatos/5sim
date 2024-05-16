import ReactDOM from "react-dom/client";

// providers
import MaterialThemeProvider from "./providers/material-ui/index.tsx";
import ReactQueryProvider from "./providers/react-query/index.tsx";

// components
import App from "./App.tsx";

// styles
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <ReactQueryProvider>
    <MaterialThemeProvider>
      <App />
    </MaterialThemeProvider>
  </ReactQueryProvider>
);

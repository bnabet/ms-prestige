import { createRoot } from "react-dom/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter } from "react-router-dom";
import { CssBaseline } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";

import theme from "./context/themeConfig.ts";
import ModalProvider from "./context/modalContext";

import App from "./App.tsx";
import "./index.css";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      // suspense: true,
      staleTime: 1000 * 60,
      refetchOnWindowFocus: import.meta.env.DEV ? false : true,
    },
  },
});

const basename = import.meta.env.DEV ? "/" : "/ms-prestige/";

createRoot(document.getElementById("root")!).render(
  <QueryClientProvider client={queryClient}>
    <ModalProvider>
      <BrowserRouter basename={basename}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <App />
        </ThemeProvider>
      </BrowserRouter>
    </ModalProvider>
  </QueryClientProvider>
);

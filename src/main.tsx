import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import axios from "axios";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

const defaultQueryFn = async ({ queryKey }: any) => {
  const [key, args] = queryKey;
  const response = await axios.get(`/api/${key}`, {});
  return response?.data;
};

const queryClient = new QueryClient({
  defaultOptions: {
    queries: { networkMode: "offlineFirst", queryFn: defaultQueryFn },
  },
});

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </React.StrictMode>
);

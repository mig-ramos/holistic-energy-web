import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ToastContainer } from "react-toastify";
import { LayoutPublic } from "@/components/layoutPublic";
import { AppProvider } from "@/data/contexts/app/AppContext";
import { AuthProvider } from "@/data/contexts/auth/AuthContext";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <AppProvider>
        <LayoutPublic>
          <Component {...pageProps} />
          <ToastContainer autoClose={1000} />
        </LayoutPublic>
      </AppProvider>
    </AuthProvider>
  );
}

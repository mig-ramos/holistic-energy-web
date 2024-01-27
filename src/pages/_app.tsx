import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ToastContainer } from "react-toastify";
import { LayoutPublic } from "@/components/layoutPublic";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <LayoutPublic>
      <Component {...pageProps} />
      <ToastContainer autoClose={1000} />
    </LayoutPublic>
  );
}

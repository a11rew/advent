import Header from "@/components/Header";
import type { AppProps } from "next/app";
import "../styles/global.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;

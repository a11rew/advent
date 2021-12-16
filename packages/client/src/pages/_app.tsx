import Header from "@/components/Header";
import type { AppProps } from "next/app";
import "../styles/global.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <div className="max-w-[1600px] min-h-screen px-4 m-auto">
        <Component {...pageProps} />
      </div>
    </>
  );
}

export default MyApp;

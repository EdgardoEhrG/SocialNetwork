import type { AppProps } from "next/app";

import Navigation from "../components/navigation";

import "../styles/globals.scss";
import "bootstrap/dist/css/bootstrap.min.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Navigation />
      <Component {...pageProps} />
    </>
  );
}

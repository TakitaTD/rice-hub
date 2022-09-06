import "../styles/globals.css";
import type { AppProps } from "next/app";
import NavBar from "../components/NavBar";
// import Cookies from "cookies";
import getCookie from "../getCookie";

function MyApp({ Component, pageProps }: AppProps) {
  if (typeof window !== "undefined") {
    if (!getCookie("theme")) {
      document.cookie = "theme=dark";
    }
    document.body.setAttribute("theme", getCookie("theme"));
  }
  return (
    <>
      <NavBar />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;

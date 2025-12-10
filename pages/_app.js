import "../styles/globals.css";

export default function MyApp({ Component, pageProps }) {
  // this wraps every page with global styles
  return <Component {...pageProps} />;
}

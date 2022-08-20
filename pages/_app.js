import "../styles/globals.css";
import { ChakraProvider } from "@chakra-ui/react";

// import { createStandaloneToast } from "@chakra-ui/toast";
// const { ToastContainer } = createStandaloneToast();

function MyApp({ Component, pageProps }) {
  return (
    <>
      <ChakraProvider>
        <Component {...pageProps} />
      </ChakraProvider>
      {/* <ToastContainer /> */}
    </>
  );
}

export default MyApp;

import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import HomePage from "./Pages/Homepage";

import "./styles/app.css";

function App() {
  const theme = extendTheme({
    styles: {
      global: (props) => ({
        body: {
          bg: "#0c0b11",
        },
      }),
    },
  });

  return (
    <ChakraProvider theme={theme}>
      <HomePage />
    </ChakraProvider>
  );
}

export default App;

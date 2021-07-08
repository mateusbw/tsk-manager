import { ThemeProvider } from "styled-components";
import Routes from "./routes/Routes";
import theme from "./theme";
import GlobalStyle from "./globalStyle";
import { StateProvider } from "../state"

const App: React.FC = () => {
  return (
    <StateProvider>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Routes />
      </ThemeProvider>
    </StateProvider>
  );
};

export default App;


import { Container, Body } from '@material-ui/core';
import CssBaseline from "@material-ui/core/CssBaseline";
import { MuiThemeProvider, createMuiTheme, styled } from "@material-ui/core/styles";
import { TopNav, Home, Features, News, Roadmap } from './components'

const themeLight = createMuiTheme({
  palette: {
    background: {
      default: "#eeeeee"
    }
  }
});

const themeDark = createMuiTheme({
  palette: {
    background: {
      default: "#222222"
    },
    text: {
      primary: "#ffffff"
    }
  }
});

const MainContainer = styled(Container) ({
  backgroundColor: '#ffffff',
});

function App() {
  return (
    <MuiThemeProvider theme={themeLight}>
    <CssBaseline />
      <MainContainer maxWidth="md">
        <TopNav />
        <Home />
        <Features />
        <Roadmap />
        <News />
      </MainContainer>
    </MuiThemeProvider>
  );
}

export default App;

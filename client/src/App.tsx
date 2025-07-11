import { Box, CssBaseline, ThemeProvider } from "@mui/material";
import Header1 from "./components/Header/Header1";
import Header2 from "./components/Header/Header2";
import Header3 from "./components/Header/Header3";
import { ColorModeContext, useMode } from "./theme";
import Hero from "./components/Hero/Hero";
import Footer from "./components/Footer/Footer";
import Main from "./components/Main/Main";
import ScrollToTop from "./components/Scroll/ScrollTop";

function App() {
  const [theme, colorMode] = useMode();
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Header1 />
        <Header2 />
        <Header3 />

        <Box
          bgcolor={
            theme.palette.bg.main
          }
        >
          <Hero />
          <Main />
        </Box>

        <Footer />

        <ScrollToTop />
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;

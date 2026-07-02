import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { LanguageProvider } from "@/components/language-provider";
import ComingSoon from "@/pages/coming-soon";
import Home from "@/pages/home";
import NotFound from "@/pages/not-found";
// MUI Theme integration
import { ThemeProvider as MuiThemeProvider, createTheme, responsiveFontSizes } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/coming-soon" component={ComingSoon} />
      <Route component={NotFound} />
    </Switch>
  );
}

// MUI theme aligned with the site's "elegant autumn" truffle palette
const muiTheme = responsiveFontSizes(createTheme({
  palette: {
    mode: "light",
    primary: { main: "#5B4636" }, // deep truffle brown
    secondary: { main: "#A9822E" }, // bronze/gold
    background: { default: "#FBF6EC", paper: "#FFFDF8" },
    text: { primary: "#3A2A1E" },
  },
  typography: {
    fontFamily: [
      "Work Sans",
      "ui-sans-serif",
      "system-ui",
      "-apple-system",
      "Segoe UI",
      "Roboto",
      "Ubuntu",
      "Cantarell",
      "Noto Sans",
      "sans-serif",
    ].join(","),
    h1: { fontFamily: "'Fraunces', serif", fontWeight: 600 },
    h2: { fontFamily: "'Fraunces', serif", fontWeight: 600 },
    h3: { fontFamily: "'Fraunces', serif", fontWeight: 600 },
    h4: { fontFamily: "'Fraunces', serif", fontWeight: 600 },
    h5: { fontFamily: "'Fraunces', serif", fontWeight: 600 },
    h6: { fontFamily: "'Fraunces', serif", fontWeight: 600 },
  },
  shape: { borderRadius: 12 },
  components: {
    MuiButton: {
      defaultProps: { disableElevation: true },
      styleOverrides: { root: { textTransform: "none", borderRadius: 12 } },
    },
    MuiPaper: {
      styleOverrides: { root: { borderRadius: 16 } },
    },
  },
}));

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <MuiThemeProvider theme={muiTheme}>
        <CssBaseline />
        <LanguageProvider>
          <TooltipProvider>
            <Toaster />
            <Router />
          </TooltipProvider>
        </LanguageProvider>
      </MuiThemeProvider>
    </QueryClientProvider>
  );
}

export default App;

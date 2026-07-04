import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { LanguageProvider } from "@/components/language-provider";
import ComingSoon from "@/pages/coming-soon";
import Home from "@/pages/home";
import NotFound from "@/pages/not-found";
import PrivacyPolicy from "@/pages/privacy-policy";
import CookiePolicy from "@/pages/cookie-policy";
import Terms from "@/pages/terms";
// MUI Theme integration
import { ThemeProvider as MuiThemeProvider, createTheme, responsiveFontSizes } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/coming-soon" component={ComingSoon} />
      <Route path="/privacy-policy" component={PrivacyPolicy} />
      <Route path="/cookie-policy" component={CookiePolicy} />
      <Route path="/termini-e-condizioni" component={Terms} />
      <Route component={NotFound} />
    </Switch>
  );
}

// Simplified MUI theme without dark mode
const muiTheme = responsiveFontSizes(createTheme({
  palette: {
    mode: "light",
    primary: { main: "#d97706" }, // amber 600-like
    secondary: { main: "#0ea5e9" }, // sky 500-like
  },
  typography: {
    fontFamily: [
      "Satoshi",
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

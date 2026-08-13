import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { LanguageProvider } from "@/components/language-provider";
import { Switch, Route } from "wouter";
import ComingSoon from "@/pages/coming-soon";
import Home from "@/pages/home";
import NotFound from "@/pages/not-found";
import PrivacyPolicy from "@/pages/privacy-policy";
import CookiePolicy from "@/pages/cookie-policy";
import Terms from "@/pages/terms";
// MUI Theme integration
import { ThemeProvider as MuiThemeProvider, createTheme, responsiveFontSizes } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

// Il sito e' online. Per rimetterlo in manutenzione basta sostituire il corpo
// di Router con <Maintenance /> (import da "@/pages/maintenance").
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
    primary: { main: "#2F4A2B" }, // verde bosco del logo
    secondary: { main: "#6B4A2E" }, // marrone della firma Nicoletta Conte
    background: { default: "#FAF3E7", paper: "#FAF3E7" }, // crema del logo
    text: { primary: "#22301D" },
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

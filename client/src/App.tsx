import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
// LanguageProvider disattivato durante la manutenzione (da ripristinare
// insieme al Router originale): evita di includere i testi del sito nel bundle.
// import { LanguageProvider } from "@/components/language-provider";
import Maintenance from "@/pages/maintenance";
// MUI Theme integration
import { ThemeProvider as MuiThemeProvider, createTheme, responsiveFontSizes } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

// ============ SITO IN MANUTENZIONE ============
// Il sito completo e' temporaneamente offline: nessuna pagina (home compresa)
// viene inclusa nella build, online c'e' solo la pagina di cortesia.
// Per ripubblicare il sito: elimina la funzione Router qui sotto e
// ripristina il blocco commentato.
function Router() {
  return <Maintenance />;
}

/* ————— ROUTER ORIGINALE, da ripristinare per ripubblicare il sito —————
import { Switch, Route } from "wouter";
import ComingSoon from "@/pages/coming-soon";
import Home from "@/pages/home";
import NotFound from "@/pages/not-found";
import PrivacyPolicy from "@/pages/privacy-policy";
import CookiePolicy from "@/pages/cookie-policy";
import Terms from "@/pages/terms";

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
————————————————————————————————————————————————————————————————————— */

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
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </MuiThemeProvider>
    </QueryClientProvider>
  );
}

export default App;

import { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Container from "@mui/material/Container";
import Tooltip from "@mui/material/Tooltip";
import Divider from "@mui/material/Divider";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme as useMuiTheme } from "@mui/material/styles";
import MenuIcon from "@mui/icons-material/Menu";
// Rimuovo TranslateIcon inutilizzato
// Nuovi import per redesign
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import ButtonGroup from "@mui/material/ButtonGroup";
import CloseIcon from "@mui/icons-material/Close";

import logoImage from "/images/gallery/logo.jpg";
import { scrollToElement } from "@/lib/utils";
import { useLanguage } from "@/components/language-provider";

export function NavigationMUI() {
  const { t, language, setLanguage } = useLanguage();
  // sostituisco anchorEl con uno stato booleano per Drawer
  const [mobileOpen, setMobileOpen] = useState(false);
  const muiTheme = useMuiTheme();
  const isMdUp = useMediaQuery(muiTheme.breakpoints.up("md"));

  const pages: { id: string; label: string }[] = [
    { id: "home", label: t("home") },
    { id: "program", label: t("program") },
    { id: "activities", label: t("activities") },
    
    { id: "gallery", label: t("gallery") },
    { id: "contact", label: t("contact") },
  ];

  const handleOpenNavMenu = () => setMobileOpen(true);
  const handleCloseNavMenu = () => setMobileOpen(false);

  const onNavigate = (id: string) => {
    scrollToElement(id);
    handleCloseNavMenu();
  };

  return (
    <AppBar position="fixed" color="default" elevation={isMdUp ? 1 : 0} sx={{ backdropFilter: "saturate(180%) blur(10px)", bgcolor: "rgba(255,255,255,0.9)", borderBottom: 1, borderColor: "divider" }}>
      <Container maxWidth="lg">
        <Toolbar disableGutters sx={{ minHeight: { xs: 64, md: 80 }, px: { xs: 1, md: 2 } }}>
          {/* Logo + Brand */}
          <Box sx={{ display: "flex", alignItems: "center", gap: { xs: 1, md: 1.5 }, mr: 2 }}>
            <Box component="img" src={logoImage} alt="Truffle Camp" sx={{ width: { xs: 40, md: 48 }, height: { xs: 40, md: 48 }, borderRadius: 2 }} />
            <Box sx={{ display: { xs: 'none', md: 'block' } }}>
              <Typography variant="h6" noWrap sx={{ fontWeight: 800, lineHeight: 1.25, pb: 0.25 }}>
                Truffle Camp
              </Typography>
            </Box>
          </Box>

          {/* Desktop Nav */}
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" }, gap: 1.5 }}>
            {pages.map((p) => (
              <Button
                key={p.id}
                onClick={() => onNavigate(p.id)}
                color="inherit"
                sx={{
                  borderRadius: 2,
                  px: 1.5,
                  textTransform: "none",
                  fontWeight: 600,
                  color: "text.secondary",
                  '&:hover': { color: "text.primary", bgcolor: "action.hover" },
                }}
              >
                {p.label}
              </Button>
            ))}
            <Divider orientation="vertical" flexItem sx={{ mx: 2, opacity: 0.2 }} />
            <Button
              variant="contained"
              color="primary"
              onClick={() => onNavigate("contact")}
              sx={{ borderRadius: 999, px: 2.2, fontWeight: 700 }}
            >
              {t("bookNow")}
            </Button>
          </Box>

          {/* Spacer per spingere le azioni a destra su mobile */}
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }} />

          {/* Right Actions: toggle lingua (desktop) + hamburger (mobile) */}
          <Box sx={{ display: "flex", alignItems: "center", gap: 1, ml: 1 }}>
            {/* Toggle lingua visibile solo su md+ */}
            <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
              <ButtonGroup size="small" variant="outlined" sx={{ borderRadius: 2, overflow: 'hidden' }}>
                <Button
                  variant={language === 'it' ? 'contained' : 'outlined'}
                  onClick={() => setLanguage('it')}
                  sx={{ textTransform: 'none' }}
                >
                  IT
                </Button>
                <Button
                  variant={language === 'en' ? 'contained' : 'outlined'}
                  onClick={() => setLanguage('en')}
                  sx={{ textTransform: 'none' }}
                >
                  EN
                </Button>
              </ButtonGroup>
            </Box>

            {/* Mobile Menu Button sempre visibile su xs */}
            <Box sx={{ display: { xs: "flex", md: "none" } }}>
              <IconButton size="large" onClick={handleOpenNavMenu} color="inherit" aria-label="Apri menu">
                <MenuIcon />
              </IconButton>
            </Box>
          </Box>
        </Toolbar>
      </Container>

      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={handleCloseNavMenu}
        PaperProps={{ sx: { width: '85%', maxWidth: 360, p: 2, borderTopLeftRadius: 12, borderBottomLeftRadius: 12 } }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 1 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <Box component="img" src={logoImage} alt="Truffle Camp" sx={{ width: 32, height: 32, borderRadius: 1 }} />
            <Typography variant="subtitle1" fontWeight={700}>Truffle Camp</Typography>
          </Box>
          <IconButton onClick={handleCloseNavMenu} aria-label="Close menu">
            <CloseIcon />
          </IconButton>
        </Box>
        <Divider sx={{ mb: 1 }} />
        <List sx={{ py: 0 }}>
          {pages.map((p) => (
            <ListItem key={p.id} disablePadding>
              <ListItemButton onClick={() => onNavigate(p.id)} sx={{ borderRadius: 2, py: 1.25 }}>
                <ListItemText primaryTypographyProps={{ fontWeight: 600 }} primary={p.label} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider sx={{ my: 1.5 }} />
        <Button fullWidth variant="contained" color="primary" onClick={() => onNavigate('contact')} sx={{ borderRadius: 2, py: 1 }}>
          {t('bookNow')}
        </Button>
        <Box sx={{ mt: 2, display: 'flex', justifyContent: 'center' }}>
          <ButtonGroup size="small" variant="outlined">
            <Button variant={language === 'it' ? 'contained' : 'outlined'} onClick={() => setLanguage('it')} sx={{ textTransform: 'none' }}>IT</Button>
            <Button variant={language === 'en' ? 'contained' : 'outlined'} onClick={() => setLanguage('en')} sx={{ textTransform: 'none' }}>EN</Button>
          </ButtonGroup>
        </Box>
      </Drawer>
    </AppBar>
  );
}

export default NavigationMUI;
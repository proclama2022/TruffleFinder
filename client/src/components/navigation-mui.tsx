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
import TranslateIcon from "@mui/icons-material/Translate";

import logoImage from "/images/gallery/logo.jpg";
import { scrollToElement } from "@/lib/utils";
import { useLanguage } from "@/components/language-provider";

export function NavigationMUI() {
  const { t, language, setLanguage } = useLanguage();
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
  const muiTheme = useMuiTheme();
  const isMdUp = useMediaQuery(muiTheme.breakpoints.up("md"));

  const pages: { id: string; label: string }[] = [
    { id: "home", label: t("home") },
    { id: "program", label: t("program") },
    { id: "activities", label: t("activities") },
    
    { id: "gallery", label: t("gallery") },
    { id: "contact", label: t("contact") },
  ];

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const onNavigate = (id: string) => {
    scrollToElement(id);
    handleCloseNavMenu();
  };

  const toggleLanguage = () => {
    setLanguage(language === "it" ? "en" : "it");
  };

  return (
    <AppBar position="fixed" color="default" elevation={isMdUp ? 1 : 0} sx={{ backdropFilter: "saturate(180%) blur(10px)", bgcolor: "rgba(255,255,255,0.9)", borderBottom: 1, borderColor: "divider" }}>
      <Container maxWidth="lg">
        <Toolbar disableGutters sx={{ minHeight: { xs: 64, md: 80 } }}>
          {/* Logo + Brand */}
          <Box sx={{ display: "flex", alignItems: "center", gap: 1.5, mr: 2 }}>
            <Box component="img" src={logoImage} alt="Lagotto & Truffle Week" sx={{ width: 40, height: 40, borderRadius: 2 }} />
            <Box>
              <Typography variant="h6" noWrap sx={{ fontWeight: 800, lineHeight: 1 }}>
                Lagotto Week
              </Typography>
              <Typography variant="caption" sx={{ opacity: 0.7, lineHeight: 1 }}>
                Truffle Experience
              </Typography>
            </Box>
          </Box>

          {/* Desktop Nav */}
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" }, gap: 1 }}>
            {pages.map((p) => (
              <Button key={p.id} onClick={() => onNavigate(p.id)} color="inherit" sx={{ borderRadius: 2 }}>
                {p.label}
              </Button>
            ))}
            <Divider orientation="vertical" flexItem sx={{ mx: 2, opacity: 0.2 }} />
            <Button variant="contained" color="primary" onClick={() => onNavigate("contact")} sx={{ borderRadius: 2 }}>
              {t("bookNow")}
            </Button>
          </Box>

          {/* Mobile Menu Button */}
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }} />
          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton size="large" onClick={handleOpenNavMenu} color="inherit">
              <MenuIcon />
            </IconButton>
            <Menu anchorEl={anchorElNav} open={Boolean(anchorElNav)} onClose={handleCloseNavMenu} keepMounted anchorOrigin={{ vertical: "bottom", horizontal: "left" }} transformOrigin={{ vertical: "top", horizontal: "left" }} sx={{ display: { xs: "block", md: "none" } }}>
              {pages.map((p) => (
                <MenuItem key={p.id} onClick={() => onNavigate(p.id)}>
                  <Typography textAlign="center">{p.label}</Typography>
                </MenuItem>
              ))}
              <Divider />
              <MenuItem onClick={() => onNavigate("contact")}>
                <Typography variant="button" color="primary">{t("bookNow")}</Typography>
              </MenuItem>
            </Menu>
          </Box>

          {/* Right Actions */}
          <Box sx={{ display: "flex", alignItems: "center", gap: 1, ml: 1 }}>
            <Tooltip title={language.toUpperCase()}>
              <IconButton color="inherit" onClick={toggleLanguage}>
                <TranslateIcon />
              </IconButton>
            </Tooltip>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default NavigationMUI;
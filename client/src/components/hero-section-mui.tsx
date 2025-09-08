import { useEffect, useState } from "react";
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  Button,
  Grid,
  Paper,
  Chip,
  Fade,
  Slide,
  useTheme,
  useMediaQuery,
  Stack,
  IconButton
} from '@mui/material';
import { styled, keyframes } from '@mui/material/styles';
import { useLanguage } from "../hooks/use-language";
import { scrollToElement } from "../lib/utils";
import { MapPin, Sparkles } from 'lucide-react';
import { KeyboardArrowDown } from '@mui/icons-material';
import backgroundImage from '/images/gallery/freshly-picked-black-truffles-market-table-with-very-fancy-decoration.jpg';

// Animazioni personalizzate
const float = keyframes`
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
`;

const pulse = keyframes`
  0%, 100% { opacity: 1; }
  50% { opacity: 0.7; }
`;

const bounce = keyframes`
  0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
  40% { transform: translateY(-10px); }
  60% { transform: translateY(-5px); }
`;

// Componenti stilizzati
const HeroContainer = styled(Box)(({ theme }) => ({
  position: 'relative',
  width: '100%',
  minHeight: '100vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  overflow: 'hidden',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    filter: 'blur(2px)',
    zIndex: -2
  },
  '&::after': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: theme.palette.primary.main,
    opacity: 0.25,
    zIndex: -1
  }
}));

const FloatingCard = styled(Card)(({ theme }) => ({
  background: 'rgba(255, 255, 255, 0.95)',
  backdropFilter: 'blur(20px)',
  borderRadius: theme.spacing(3),
  border: '1px solid rgba(255, 255, 255, 0.2)',
  animation: `${float} 6s ease-in-out infinite`,
  transition: 'all 0.3s ease-in-out',
  '&:hover': {
    transform: 'translateY(-5px)',
    boxShadow: theme.shadows[20]
  }
}));

const CountdownCard = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(2),
  textAlign: 'center',
  background: 'rgba(255, 255, 255, 0.9)',
  backdropFilter: 'blur(10px)',
  borderRadius: theme.spacing(2),
  border: '1px solid rgba(255, 255, 255, 0.3)',
  transition: 'all 0.3s ease-in-out',
  '&:hover': {
    transform: 'scale(1.05)',
    boxShadow: theme.shadows[8]
  }
}));

const GradientButton = styled(Button)(({ theme }) => ({
  background: `linear-gradient(45deg, ${theme.palette.secondary.main}, ${theme.palette.primary.main})`,
  borderRadius: theme.spacing(4),
  padding: theme.spacing(1.5, 4),
  fontSize: '1.1rem',
  fontWeight: 'bold',
  textTransform: 'uppercase',
  letterSpacing: '1px',
  boxShadow: theme.shadows[8],
  transition: 'all 0.3s ease-in-out',
  '&:hover': {
    transform: 'translateY(-2px)',
    boxShadow: theme.shadows[12],
    background: `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`
  }
}));

const ScrollIndicator = styled(Box)(({ theme }) => ({
  position: 'absolute',
  bottom: theme.spacing(4),
  left: '50%',
  transform: 'translateX(-50%)',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: theme.spacing(1),
  animation: `${bounce} 2s infinite`,
  cursor: 'pointer'
}));

const PulsingDot = styled(Box)(({ theme }) => ({
  width: 12,
  height: 12,
  borderRadius: '50%',
  backgroundColor: theme.palette.secondary.main,
  animation: `${pulse} 2s infinite`,
  boxShadow: `0 0 20px ${theme.palette.secondary.main}`
}));

export function HeroSectionMUI() {
  const { t } = useLanguage();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setAnimated(true), 300);
    return () => clearTimeout(timer);
  }, []);

  // Countdown timer logic
  const calculateTimeLeft = () => {
    const eventDate = new Date("2025-10-15T00:00:00").getTime();
    const now = new Date().getTime();
    const diff = eventDate - now;
    if (diff <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);
    return { days, hours, minutes, seconds };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const handleBookNow = () => {
    scrollToElement("contact");
  };

  const handleScrollDown = () => {
    scrollToElement("program");
  };

  return (
    <HeroContainer id="home">
      <Container maxWidth="lg" sx={{ py: { xs: 8, md: 12 } }}>
        <Fade in={animated} timeout={1000}>
          <Stack spacing={{ xs: 4, md: 6 }} alignItems="center">
            
            {/* Date Badge rimosso come richiesto */}

            {/* Main Title */}
            <Slide direction="up" in={animated} timeout={1000}>
              <FloatingCard elevation={12}>
                <CardContent sx={{ p: { xs: 3, md: 5 } }}>
                  <Stack spacing={2} alignItems="center">
                    {/* Titolo con logo inline */}
                    <Stack direction="row" spacing={2} alignItems="center">
                      <Typography
                        variant={isMobile ? "h2" : "h1"}
                        component="h1"
                        fontWeight="900"
                        textAlign="center"
                        sx={{
                          background: `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                          backgroundClip: 'text',
                          WebkitBackgroundClip: 'text',
                          WebkitTextFillColor: 'transparent',
                          fontSize: { xs: '2.5rem', md: '4rem', lg: '5rem' },
                          lineHeight: 1.15,
                          pb: 0.25
                        }}
                      >
                        Lagotto
                      </Typography>
                      {/* Logo accanto al titolo */}
                      <Box component="img" src={"/images/gallery/logo.jpg"} alt="Lagotto & Truffle Week" sx={{ width: { xs: 40, md: 56 }, height: { xs: 40, md: 56 }, borderRadius: 2, boxShadow: 2 }} />
                    </Stack>
                    
                    <Stack direction="row" spacing={2} alignItems="center">
                      <Box sx={{ width: { xs: 40, md: 60 }, height: 3, bgcolor: 'secondary.main', borderRadius: 2 }} />
                      <Sparkles size={isMobile ? 24 : 32} color={theme.palette.secondary.main} />
                      <Box sx={{ width: { xs: 40, md: 60 }, height: 3, bgcolor: 'secondary.main', borderRadius: 2 }} />
                    </Stack>
                    
                    <Typography
                      variant={isMobile ? "h4" : "h2"}
                      component="h2"
                      fontWeight="bold"
                      textAlign="center"
                      color="primary.main"
                      sx={{
                        fontSize: { xs: '1.8rem', md: '3rem', lg: '3.5rem' },
                        fontStyle: 'italic',
                        lineHeight: 1.15,
                        pb: 0.2
                      }}
                    >
                      & Truffle Week
                    </Typography>
                  </Stack>
                </CardContent>
              </FloatingCard>
            </Slide>

            {/* Subtitle */}
            <Fade in={animated} timeout={1200}>
              <Typography
                variant={isMobile ? "h6" : "h5"}
                textAlign="center"
                color="white"
                fontWeight="500"
                sx={{
                  maxWidth: 600,
                  textShadow: '2px 2px 4px rgba(0,0,0,0.7)',
                  fontSize: { xs: '1.1rem', md: '1.3rem' },
                  fontStyle: 'italic'
                }}
              >
                {t("heroTitle")}
              </Typography>
            </Fade>

            {/* Countdown */}
            <Slide direction="up" in={animated} timeout={1400}>
              <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', maxWidth: 500, flexWrap: 'wrap' }}>
                {[
                  { value: timeLeft.days, label: 'Giorni' },
                  { value: timeLeft.hours, label: 'Ore' },
                  { value: timeLeft.minutes, label: 'Minuti' },
                  { value: timeLeft.seconds, label: 'Secondi' }
                ].map((item, index) => (
                  <Box key={index} sx={{ flex: '1 1 auto', minWidth: 80 }}>
                    <CountdownCard elevation={6}>
                      <Typography
                        variant={isMobile ? "h4" : "h3"}
                        fontWeight="bold"
                        color="primary.main"
                      >
                        {item.value}
                      </Typography>
                      <Typography
                        variant="caption"
                        color="text.secondary"
                        textTransform="uppercase"
                        letterSpacing={1}
                      >
                        {item.label}
                      </Typography>
                    </CountdownCard>
                  </Box>
                ))}
              </Box>
            </Slide>

            {/* CTA Button */}
            <Fade in={animated} timeout={1600}>
              <GradientButton
                variant="contained"
                size="large"
                onClick={handleBookNow}
                sx={{
                  mt: 2,
                  fontSize: { xs: '1rem', md: '1.2rem' },
                  py: { xs: 1.5, md: 2 },
                  px: { xs: 3, md: 5 }
                }}
              >
                PRENOTA ORA
              </GradientButton>
            </Fade>
          </Stack>
        </Fade>
      </Container>

      {/* Scroll Indicator */}
      <ScrollIndicator onClick={handleScrollDown}>
        <Typography
          variant="body2"
          color="secondary.main"
          fontWeight="bold"
          sx={{ textShadow: '1px 1px 2px rgba(0,0,0,0.7)' }}
        >
          Scopri di più
        </Typography>
        <IconButton
          sx={{
            color: 'secondary.main',
            backgroundColor: 'rgba(255, 255, 255, 0.9)',
            '&:hover': {
              backgroundColor: 'rgba(255, 255, 255, 1)',
              transform: 'scale(1.1)'
            }
          }}
        >
          <KeyboardArrowDown />
        </IconButton>
      </ScrollIndicator>
    </HeroContainer>
  );
}
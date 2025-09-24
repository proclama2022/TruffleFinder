import { useState, useRef, useEffect } from "react";
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  Button,
  Paper,
  Chip,
  Fade,
  Slide,
  useTheme,
  useMediaQuery,
  Stack,
  IconButton,
  ImageList,
  ImageListItem,
  // ImageListItemBar rimosso - non più necessario
  Dialog,
  DialogContent,
  Tabs,
  Tab,
  CircularProgress,
  Backdrop
} from '@mui/material';
import { styled, keyframes } from '@mui/material/styles';
import { useLanguage } from "../hooks/use-language";
import { GALLERY_IMAGES, GALLERY_CATEGORIES, getImagesByCategory, GalleryImage } from "../lib/modern-gallery-config";
import { translations, TranslationKey } from "../lib/translations";

import { Camera, Play, X, ChevronLeft, ChevronRight } from 'lucide-react';

// Animazioni personalizzate
const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

const scaleIn = keyframes`
  from { transform: scale(0.9); opacity: 0; }
  to { transform: scale(1); opacity: 1; }
`;

// Componenti stilizzati
const GalleryContainer = styled(Box)(({ theme }) => ({
  padding: theme.spacing(10, 0),
  background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
  minHeight: '100vh'
}));

const FilterTabs = styled(Tabs)(({ theme }) => ({
  '& .MuiTabs-flexContainer': {
    justifyContent: 'center',
    flexWrap: 'wrap',
    gap: theme.spacing(1)
  },
  '& .MuiTab-root': {
    minWidth: 'auto',
    padding: theme.spacing(1, 3),
    borderRadius: theme.spacing(3),
    margin: theme.spacing(0.5),
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    backdropFilter: 'blur(10px)',
    border: '1px solid rgba(255, 255, 255, 0.3)',
    transition: 'all 0.3s ease-in-out',
    '&.Mui-selected': {
      backgroundColor: theme.palette.primary.main,
      color: 'white',
      transform: 'scale(1.05)'
    },
    '&:hover': {
      backgroundColor: 'rgba(255, 255, 255, 0.9)',
      transform: 'translateY(-2px)'
    }
  },
  '& .MuiTabs-indicator': {
    display: 'none'
  }
}));

const StyledImageListItem = styled(ImageListItem)(({ theme }) => ({
  borderRadius: theme.spacing(2),
  overflow: 'hidden',
  cursor: 'pointer',
  transition: 'all 0.3s ease-in-out',
  animation: `${fadeIn} 0.6s ease-out`,
  '&:hover': {
    transform: 'translateY(-8px) scale(1.02)',
    boxShadow: theme.shadows[12],
    // MuiImageListItemBar-root rimosso - non più necessario
    '& img': {
      transform: 'scale(1.1)'
    }
  }
}));

const MediaImage = styled('img')(({ theme }) => ({
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  transition: 'transform 0.3s ease-in-out'
}));

const PlayButton = styled(IconButton)(({ theme }) => ({
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  backgroundColor: 'rgba(0, 0, 0, 0.7)',
  color: 'white',
  width: 60,
  height: 60,
  '&:hover': {
    backgroundColor: 'rgba(0, 0, 0, 0.9)',
    transform: 'translate(-50%, -50%) scale(1.1)'
  }
}));

const LightboxDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialog-paper': {
    backgroundColor: 'transparent',
    boxShadow: 'none',
    maxWidth: '95vw',
    maxHeight: '95vh',
    margin: 0
  }
}));

const NavigationButton = styled(IconButton)(({ theme }) => ({
  position: 'absolute',
  top: '50%',
  transform: 'translateY(-50%)',
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  color: 'white',
  width: 50,
  height: 50,
  '&:hover': {
    backgroundColor: 'rgba(0, 0, 0, 0.7)'
  }
}));

const LoadingContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  minHeight: 400,
  animation: `${scaleIn} 0.5s ease-out`
}));

// Lightbox Component
function LightboxMUI({ 
  images, 
  currentIndex, 
  open,
  onClose, 
  onNext, 
  onPrev 
}: { 
  images: GalleryImage[]; 
  currentIndex: number;
  open: boolean;
  onClose: () => void; 
  onNext: () => void; 
  onPrev: () => void; 
}) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") onNext();
      if (e.key === "ArrowLeft") onPrev();
    };

    if (open) {
      window.addEventListener("keydown", handleKeyDown);
      return () => window.removeEventListener("keydown", handleKeyDown);
    }
  }, [open, onClose, onNext, onPrev]);

  if (currentIndex === -1 || !images[currentIndex]) return null;

  const currentMedia = images[currentIndex];

  return (
    <LightboxDialog
      open={open}
      onClose={onClose}
      maxWidth={false}
      fullScreen={isMobile}
    >
      <Backdrop open={open} sx={{ backgroundColor: 'rgba(0, 0, 0, 0.9)' }}>
        <Box sx={{ position: 'relative', width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          {/* Close Button */}
          <IconButton
            onClick={onClose}
            sx={{
              position: 'absolute',
              top: 20,
              right: 20,
              backgroundColor: 'rgba(0, 0, 0, 0.5)',
              color: 'white',
              zIndex: 1,
              '&:hover': {
                backgroundColor: 'rgba(0, 0, 0, 0.7)'
              }
            }}
          >
            <X />
          </IconButton>

          {/* Navigation Buttons */}
          {images.length > 1 && (
            <>
              <NavigationButton
                onClick={onPrev}
                sx={{ left: 20 }}
              >
                <ChevronLeft />
              </NavigationButton>
              <NavigationButton
                onClick={onNext}
                sx={{ right: 20 }}
              >
                <ChevronRight />
              </NavigationButton>
            </>
          )}

          {/* Media Content */}
          <Box sx={{ maxWidth: '90vw', maxHeight: '90vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            {currentMedia.type === 'image' ? (
              <MediaImage
                src={currentMedia.src}
                alt={currentMedia.alt}
                style={{
                  maxWidth: '100%',
                  maxHeight: '100%',
                  objectFit: 'contain',
                  borderRadius: theme.spacing(1)
                }}
              />
            ) : (
              <video
                src={currentMedia.videoSrc || currentMedia.src}
                controls
                autoPlay
                style={{
                  maxWidth: '100%',
                  maxHeight: '100%',
                  borderRadius: theme.spacing(1)
                }}
                poster={currentMedia.thumbnail}
              />
            )}
          </Box>

          {/* Media Info */}
          <Paper
            sx={{
              position: 'absolute',
              bottom: 20,
              left: '50%',
              transform: 'translateX(-50%)',
              backgroundColor: 'rgba(255, 255, 255, 0.9)',
              backdropFilter: 'blur(10px)',
              px: 3,
              py: 1.5,
              borderRadius: 2,
              maxWidth: '80%'
            }}
          >
            {/* Didascalie rimosse come richiesto */}
          </Paper>
        </Box>
      </Backdrop>
    </LightboxDialog>
  );
}

// Main Gallery Component
export function ModernGalleryMUI() {
  const { t } = useLanguage();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const isTablet = useMediaQuery(theme.breakpoints.between('md', 'lg'));
  
  const [activeCategory, setActiveCategory] = useState<TranslationKey | 'all'>('all');
  const [lightboxIndex, setLightboxIndex] = useState<number>(-1);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [loadedImages, setLoadedImages] = useState<Set<string>>(new Set());
  const [isLoading, setIsLoading] = useState(false);

  const filteredImages = activeCategory === "all" 
     ? GALLERY_IMAGES 
     : GALLERY_IMAGES.filter((img) => img.category === activeCategory);

  const handleCategoryChange = (event: React.SyntheticEvent, newValue: string) => {
    setIsLoading(true);
    // Type guard to ensure newValue is compatible with TranslationKey | 'all'
    if (newValue === 'all' || newValue in translations.it) {
      setActiveCategory(newValue as TranslationKey | 'all');
    }
    setTimeout(() => setIsLoading(false), 300);
  };

  const handleImageClick = (imageId: string) => {
    const imageIndex = filteredImages.findIndex(img => img.id === imageId);
    if (imageIndex !== -1) {
      setLightboxIndex(imageIndex);
      setLightboxOpen(true);
    }
  };

  const handleLightboxClose = () => {
    setLightboxOpen(false);
    setLightboxIndex(-1);
  };

  const handleNext = () => {
    setLightboxIndex((prev) => (prev + 1) % filteredImages.length);
  };

  const handlePrev = () => {
    setLightboxIndex((prev) => (prev - 1 + filteredImages.length) % filteredImages.length);
  };

  const handleImageLoad = (imageId: string) => {
    setLoadedImages(prev => new Set(prev).add(imageId));
  };

  // Calcola il numero di colonne in base alla dimensione dello schermo
  const getColumns = () => {
    if (isMobile) return 1;
    if (isTablet) return 2;
    return 3;
  };

  return (
    <GalleryContainer id="gallery">
      <Container maxWidth="xl">
        {/* Header */}
        <Fade in timeout={800}>
          <Stack spacing={4} alignItems="center" sx={{ mb: 6 }}>
            <Chip
              icon={<Camera size={20} />}
              label={t("photographicGallery")}
              sx={{
                backgroundColor: 'rgba(255, 255, 255, 0.9)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255, 255, 255, 0.3)',
                fontSize: '1rem',
                py: 2,
                px: 1
              }}
            />
            
            <Typography
              variant={isMobile ? "h3" : "h2"}
              component="h2"
              fontWeight="bold"
              textAlign="center"
              sx={{
                background: `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                fontSize: { xs: '2.5rem', md: '3.5rem' }
              }}
            >
              {t("unforgettableMoments")}
            </Typography>
            
            <Typography
              variant={isMobile ? "body1" : "h6"}
              textAlign="center"
              color="text.secondary"
              sx={{ maxWidth: 600, fontSize: { xs: '1rem', md: '1.2rem' } }}
            >
              {t("discoverMoments")}
            </Typography>
          </Stack>
        </Fade>

        {/* Category Filters */}
        <Slide direction="up" in timeout={1000}>
          <Box sx={{ mb: 6, display: 'flex', justifyContent: 'center' }}>
              <FilterTabs
                value={activeCategory}
                onChange={handleCategoryChange}
                variant="scrollable"
                scrollButtons="auto"
                allowScrollButtonsMobile
              >
                {GALLERY_CATEGORIES.map((category) => (
                  <Tab key={category.id} label={`${t(category.label as TranslationKey)} (${category.count})`} value={category.id} />
                ))}
            </FilterTabs>
          </Box>
        </Slide>

        {/* Gallery Grid */}
        {isLoading ? (
          <LoadingContainer>
            <CircularProgress size={60} thickness={4} />
          </LoadingContainer>
        ) : (
          <Fade in={!isLoading} timeout={600}>
            <ImageList
              cols={getColumns()}
              gap={16}
              sx={{
                width: '100%',
                height: 'auto',
                overflow: 'visible'
              }}
            >
              {filteredImages.map((image, index) => (
                <StyledImageListItem
                  key={image.id}
                  onClick={() => handleImageClick(image.id)}
                  sx={{
                    height: {
                      xs: 300,
                      md: image.aspectRatio === 'portrait' ? 400 : 300,
                      lg: image.aspectRatio === 'portrait' ? 450 : 350
                    },
                    animationDelay: `${index * 0.1}s`
                  }}
                >
                  <Box sx={{ position: 'relative', width: '100%', height: '100%' }}>
                    {/* Loading placeholder */}
                    {!loadedImages.has(image.id) && (
                      <Box
                        sx={{
                          position: 'absolute',
                          inset: 0,
                          backgroundColor: 'grey.200',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center'
                        }}
                      >
                        <CircularProgress />
                      </Box>
                    )}
                    
                    <MediaImage
                      src={image.type === 'video' ? (image.thumbnail || '/images/gallery/background.jpg') : image.src}
                      alt={image.alt}
                      loading="lazy"
                      onLoad={() => handleImageLoad(image.id)}
                      style={{
                        opacity: loadedImages.has(image.id) ? 1 : 0,
                        transition: 'opacity 0.3s ease-in-out'
                      }}
                    />
                    
                    {/* Video Play Button */}
                    {image.type === 'video' && (
                      <PlayButton>
                        <Play size={24} />
                      </PlayButton>
                    )}
                  </Box>
                  
                  {/* Barra delle didascalie rimossa come richiesto */}
                </StyledImageListItem>
              ))}
            </ImageList>
          </Fade>
        )}

        {/* Results Info */}
        <Box sx={{ textAlign: 'center', mt: 4 }}>
          <Typography variant="body2" color="text.secondary">
            {isLoading ? (
              t("loading")
            ) : (
              `${t("viewing")} ${filteredImages.length} ${filteredImages.length === 1 ? t("element") : t("elements")}`
            )}
          </Typography>
        </Box>
      </Container>

      {/* Lightbox */}
      <LightboxMUI
        images={filteredImages}
        currentIndex={lightboxIndex}
        open={lightboxOpen}
        onClose={handleLightboxClose}
        onNext={handleNext}
        onPrev={handlePrev}
      />
    </GalleryContainer>
  );
}
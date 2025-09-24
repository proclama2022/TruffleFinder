import React from 'react';
import {
  Container,
  Typography,
  Box,
  Card,
  CardContent,
  CardMedia,
  Button,
  Chip,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
} from '@mui/material';
import Grid from '@mui/material/Grid';
import type { ChipProps } from '@mui/material/Chip';
import {
  ExpandMore as ExpandMoreIcon,
  School as SchoolIcon,
  Science as ScienceIcon,
  Park as ParkIcon,
  Restaurant as RestaurantIcon,
} from '@mui/icons-material';
import { useLanguage } from '@/components/language-provider';

// Tipi per garantire che le chiavi passate a t() siano valide

type ArticleCategory = 'beginner' | 'intermediate';
interface Article {
  title: string;
  description: string;
  icon: React.ReactNode;
  category: ArticleCategory;
  readTime: string;
}

const TruffleSchool: React.FC = () => {
  const { t } = useLanguage();

  const articles: Article[] = [
    {
      title: t('truffleBasics'),
      description: t('truffleBasicsDesc'),
      icon: <SchoolIcon />,
      category: 'beginner',
      readTime: '5 min',
    },

    {
      title: t('identificationGuide'),
      description: t('identificationGuideDesc'),
      icon: <ScienceIcon />,
      category: 'intermediate',
      readTime: '10 min',
    },
    {
      title: t('habitatsClimate'),
      description: t('habitatsClimateDesc'),
      icon: <ParkIcon />,
      category: 'intermediate',
      readTime: '8 min',
    },
    {
      title: t('culinaryUses'),
      description: t('culinaryUsesDesc'),
      icon: <RestaurantIcon />,
      category: 'beginner',
      readTime: '6 min',
    },
  ];

  const faqs = [

    {
      question: t('faqWhenToHunt'),
      answer: t('faqWhenToHuntAnswer'),
    },
    {
      question: t('faqEssentialTools'),
      answer: t('faqEssentialToolsAnswer'),
    },
    {
      question: t('faqLegality'),
      answer: t('faqLegalityAnswer'),
    },
    {
      question: t('faqStorage'),
      answer: t('faqStorageAnswer'),
    },
  ];

  const getCategoryColor = (category: ArticleCategory | 'advanced'): ChipProps['color'] => {
    switch (category) {
      case 'beginner':
        return 'success';
      case 'intermediate':
        return 'warning';
      case 'advanced':
        return 'error';
      default:
        return 'default';
    }
  };

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Box sx={{ mb: 6 }}>
        <Typography variant="h2" component="h1" gutterBottom align="center">
          {t('truffleSchool')}
        </Typography>
        <Typography variant="h5" align="center" color="text.secondary" sx={{ mb: 4 }}>
          {t('learnFromExperts')}
        </Typography>
      </Box>

      {/* Featured Articles */}
      <Box sx={{ mb: 6 }}>
        <Typography variant="h4" gutterBottom>
          {t('featuredArticles')}
        </Typography>
        <Grid container spacing={3}>
          {articles.map((article, index) => (
            <Grid size={{ xs: 12, sm: 6, md: 3 }} key={index}>
              <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                <CardContent sx={{ flexGrow: 1 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                    <Box sx={{ mr: 1, color: 'primary.main' }}>
                      {article.icon}
                    </Box>
                    <Chip
                      label={t(article.category)}
                      color={getCategoryColor(article.category)}
                      size="small"
                    />
                  </Box>
                  <Typography variant="h6" gutterBottom>
                    {article.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {article.description}
                  </Typography>
                </CardContent>
                <Box sx={{ p: 2, pt: 0 }}>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Typography variant="caption" color="text.secondary">
                      {article.readTime}
                    </Typography>
                    <Button size="small" variant="outlined">
                  {t('readMore')}
                </Button>
                  </Box>
                </Box>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Learning Path */}
      <Box sx={{ mb: 6 }}>
        <Typography variant="h4" gutterBottom>
          {t('learningPath')}
        </Typography>
        <Card>
          <List>
            {[
              { text: t('step1UnderstandingTruffles') },
              { text: t('step2IdentificationSkills') },
              { text: t('step3FindingLocations') },
              { text: t('step4SafetyEthics') },
              { text: t('step5AdvancedTechniques') },
            ].map((item, index) => (
              <ListItem key={index}>
                <ListItemIcon>
                  <Typography variant="h6" color="primary">
                    {index + 1}
                  </Typography>
                </ListItemIcon>
                <ListItemText primary={item.text} />
              </ListItem>
            ))}
          </List>
        </Card>
      </Box>

      {/* FAQ Section */}
      <Box>
        <Typography variant="h4" gutterBottom>
          {t('faqSection')}
        </Typography>
        {faqs.map((faq, index) => (
          <Accordion key={index} sx={{ mb: 1 }}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography variant="h6">{faq.question}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>{faq.answer}</Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </Box>
    </Container>
  );
};

export default TruffleSchool;
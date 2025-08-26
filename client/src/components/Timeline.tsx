import React from 'react';
// First install @mui/material and @emotion/react @emotion/styled as dependencies:
// npm install @mui/material @emotion/react @emotion/styled
import { Box, Typography, Card, CardContent, Avatar, Chip } from '@mui/material';
// First install @mui/icons-material as a dependency:
// npm install @mui/icons-material
import CalendarToday from '@mui/icons-material/CalendarToday';
import LocationOn from '@mui/icons-material/LocationOn';
import Straighten from '@mui/icons-material/Straighten';

const Timeline = () => {
  const mockActivities = [
    {
      id: 1,
      user: 'Marco G.',
      avatar: 'MG',
      type: 'trovato',
      location: 'Sesta Godano, SP',
      species: 'Tuber magnatum',
      weight: 0.450,
      date: '2 ore fa',
      color: 'success'
    },
    {
      id: 2,
      user: 'Anna R.',
      avatar: 'AR',
      type: 'cercato',
      location: 'San Miniato, PI',
      species: 'Tuber melanosporum',
      weight: null,
      date: '5 ore fa',
      color: 'info'
    },
    {
      id: 3,
      user: 'Luigi B.',
      avatar: 'LB',
      type: 'trovato',
      location: 'Acqualagna, PU',
      species: 'Tuber aestivum',
      weight: 1.2,
      date: 'ieri',
      color: 'success'
    },
    {
      id: 4,
      user: 'Giulia M.',
      avatar: 'GM',
      type: 'cercato',
      location: 'Alba, CN',
      species: 'Tuber magnatum',
      weight: null,
      date: '2 giorni fa',
      color: 'info'
    }
  ];

  const getActivityIcon = (type: string) => {
    switch (type) {
      case 'trovato':
        return <LocationOn sx={{ color: 'white' }} />;
      case 'cercato':
        return <CalendarToday sx={{ color: 'white' }} />;
      default:
        return <LocationOn sx={{ color: 'white' }} />;
    }
  };

  const getActivityColor = (color: string) => {
    switch (color) {
      case 'success':
        return '#4caf50';
      case 'info':
        return '#2196f3';
      default:
        return '#9c27b0';
    }
  };

  return (
    <Box sx={{ maxWidth: 600, margin: '0 auto', p: 2 }}>
      <Typography variant="h4" gutterBottom>
        Ultima Attività
      </Typography>
      
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        {mockActivities.map((activity) => (
          <Card key={activity.id} sx={{ 
            background: 'linear-gradient(135deg, #ffffff 0%, #f5f5f5 100%)',
            border: '1px solid #e0e0e0',
            boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
            transition: 'transform 0.2s',
            '&:hover': {
              transform: 'translateY(-2px)',
              boxShadow: '0 4px 12px rgba(0,0,0,0.15)'
            }
          }}>
            <CardContent sx={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: 2,
              p: 2.5 
            }}>
              <Avatar 
                sx={{ 
                  bgcolor: getActivityColor(activity.color),
                  width: 40,
                  height: 40,
                  fontSize: '0.875rem'
                }}
              >
                {activity.avatar}
              </Avatar>
              
              <Box sx={{ flex: 1 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
                  <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>
                    {activity.user}
                  </Typography>
                  <Chip 
                    icon={getActivityIcon(activity.type)} 
                    label={activity.type === 'trovato' ? 'HA TROVATO' : 'STA CERCANDO'}
                    size="small"
                    sx={{ 
                      bgcolor: getActivityColor(activity.color),
                      color: 'white',
                      fontWeight: 'bold',
                      fontSize: '0.7rem'
                    }}
                  />
                  <Typography variant="caption" color="text.secondary" sx={{ ml: 'auto' }}>
                    {activity.date}
                  </Typography>
                </Box>
                
                <Typography variant="body2" color="text.secondary" gutterBottom>
                  <LocationOn sx={{ fontSize: 16, verticalAlign: 'text-bottom', mr: 0.5 }} />
                  {activity.location}
                </Typography>
                
                <Typography variant="body2" sx={{ fontWeight: 'bold', color: '#f57c00' }}>
                  {activity.species}
                  {activity.weight && (
                    <span style={{ fontWeight: 'normal', color: 'text.secondary', marginLeft: 8 }}>
                      <Straighten sx={{ fontSize: 16, verticalAlign: 'text-bottom', mr: 0.5 }} />
                      {activity.weight} kg
                    </span>
                  )}
                </Typography>
              </Box>
            </CardContent>
          </Card>
        ))}
      </Box>
    </Box>
  );
};

export default Timeline;
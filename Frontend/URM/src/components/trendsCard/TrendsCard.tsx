import React from 'react';
import { Card, CardContent, CardMedia, Typography, Button, Box } from '@mui/material';
import { styled } from '@mui/material/styles';

const StyledCard = styled(Card)(({ theme }) => ({
  maxWidth: 345,
  margin: theme.spacing(2),
  boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
}));

// Define the props interface for the card (optional, based on needs)
interface CardProps {
  title: string;
  description: string;
  imageUrl: string;
  buttonText: string;
  onButtonClick: () => void;
}

const CustomCard: React.FC<CardProps> = ({ title, description, imageUrl, buttonText, onButtonClick }) => {
  return (
    <StyledCard>
      {/* Card Image */}
      <CardMedia
        component="img"
        height="140"
        image={imageUrl}
        alt={title}
      />
      
      {/* Card Content */}
      <CardContent>
        <Typography variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
      
      {/* Card Action */}
      <Box sx={{ display: 'flex', justifyContent: 'center', padding: 2 }}>
        <Button 
          variant="contained" 
          color="primary" 
          onClick={onButtonClick}
        >
          {buttonText}
        </Button>
      </Box>
    </StyledCard>
  );
};

export default CustomCard;

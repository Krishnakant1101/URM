import React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

interface VideoCardProps {
  videoSrc: string;
  title: string;
  description: string;
}


const VideoCard: React.FC<VideoCardProps> = ({ videoSrc, title, description })=> {
  return (
    <Card sx={{ maxWidth: 345, margin: 'auto' }}>
      {/* Video Section */}
      <CardMedia
        component="video"
        height="200"
        controls
        src={videoSrc} // Replace with your video URL
      />

      {/* Description Section */}
      <CardContent>
        <Typography variant="h6" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
         {description}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default VideoCard;

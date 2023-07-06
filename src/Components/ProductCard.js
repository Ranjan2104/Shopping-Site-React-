import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function ProductCard({title, price, src, rate, count}) {
  return (
    <Card sx={{ maxWidth: 345, height: "44vh" }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="250"
          image={src}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" style={{ fontSize:"14px", fontWeight:'600' }}>
            {title.substring(0, 25) + '...'}
          </Typography>
          <Typography variant="body2" color="text.secondary" style={{ fontSize:"13px", fontWeight:'600' }}>
            Price - {price} and Rate - {rate}, Count - {count}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
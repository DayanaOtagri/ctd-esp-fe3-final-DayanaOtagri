import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

interface PropsCheckoutCard {
  id: number;
  title: string;
  image: string;
  price: number;
}

const CheckoutCard: React.FC<PropsCheckoutCard> = ({ title, image, price }) => {
  return (
    <Card sx={{ width: 350 }}>
      <CardMedia
        component="img"
        height="300"
        image={image}
        alt={`${title} imagen`}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ marginBottom: '1rem' }}>
          ${price}
        </Typography>
      </CardContent>
    </Card>
  );
};


export default CheckoutCard;

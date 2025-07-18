// components/ProductCard.tsx
'use client';
import { Card, CardMedia, CardContent, Typography } from '@mui/material';

type Product = {
  id: string;
  title: string;
  price: number;
  image: { url: string };
};

export default function ProductCard({ product }: { product: Product }) {
  return (
    <Card>
      <CardMedia component="img" height="200" image={product.image.url} alt={product.title} />
      <CardContent>
        <Typography variant="h6">{product.title}</Typography>
        <Typography color="text.secondary">{product.price} VND</Typography>
      </CardContent>
    </Card>
  );
}

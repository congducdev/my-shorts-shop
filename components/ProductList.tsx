'use client';

import { Box } from '@mui/material';
import ProductCard from './ProductCard';

type Product = {
  id: string;
  title: string;
  price: number;
  image: { url: string };
};

export default function ProductList({ products }: { products: Product[] }) {
  return (
    <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: 2,
        justifyContent: 'center',
      }}
    >
      {products.map((product) => (
        <Box
          key={product.id}
          sx={{
            width: {
              xs: '100%', // Mobile
              sm: '48%',   // Tablet
              md: '30%',   // Desktop
            },
          }}
        >
          <ProductCard product={product} />
        </Box>
      ))}
    </Box>
  );
}

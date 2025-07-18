// app/products/page.tsx
import { getProducts } from '../../../lib/api';
import ProductCard from '../../../components/ProductCard';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
// import { Grid, Container } from '@mui/material';

export default async function ProductPage() {
  const products = await getProducts();

  return (
    <Container sx={{ mt: 4 }}>
      <Grid container spacing={4}>
        {products.map((product: any) => (
          <Grid item xs={12} sm={6} md={4} key={product.id}>
            <ProductCard product={product} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

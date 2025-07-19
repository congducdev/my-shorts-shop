// app/products/page.tsx
import { fetchProducts } from '../../../lib/api';
import ProductCard from '../../../components/ProductCard';

export default async function ProductsPage() {
  const products = await fetchProducts();

  return (
    <div style={{
      display: 'grid',
      gap: '16px',
      gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))'
    }}>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}


// // app/products/page.tsx
// import { fetchProducts } from '../../../lib/api';
// import ProductCard from '../../../components/ProductCard';

// export default async function ProductsPage() {
//   const products = await fetchProducts();

//   return (
//     <div style={{ display: 'grid', gap: '16px', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))' }}>
//       {products.map((product) => (
//         <ProductCard key={product.id} product={product} />
//       ))}
//     </div>
//   );
// }

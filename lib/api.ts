// // lib/api.ts
// export type Product = {
//   id: string;
//   title: string;
//   price: number;
//   image: { url: string };
// };

// export async function fetchProducts(): Promise<Product[]> {
//   const serviceDomain = process.env.NEXT_PUBLIC_MICROCMS_SERVICE_DOMAIN;
//   const apiKey = process.env.NEXT_PUBLIC_MICROCMS_API_KEY;

//   if (!serviceDomain || !apiKey) {
//     throw new Error('Missing MICROCMS env variables');
//   }

//   const res = await fetch(`https://${serviceDomain}/api/v1/products`, {
//     headers: { 'X-MICROCMS-API-KEY': apiKey },
//     next: { revalidate: 10 },
//   });

//   if (!res.ok) {
//     throw new Error(`Failed to fetch products: ${res.statusText}`);
//   }

//   const data = await res.json();
//   return data.contents;
// }

// lib/api.ts
import { createClient } from 'microcms-js-sdk';

export const client = createClient({
  serviceDomain: process.env.NEXT_PUBLIC_MICROCMS_SERVICE_DOMAIN || '',
  apiKey: process.env.NEXT_PUBLIC_MICROCMS_API_KEY || '',
});

export type Product = {
  id: string;
  title: string;
  price: number;
  image: {
    url: string;
  };
};

export async function fetchProducts(): Promise<Product[]> {
  const response = await client.getList<Product>({
    endpoint: 'products',
  });

  return response.contents;
}

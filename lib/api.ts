import { client } from './microcms';

export const getProducts = async () => {
  const res = await client.get({ endpoint: 'products' });
  return res.contents;
};
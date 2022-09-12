// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import data from './data.json';

export function getProductsByCategory(category : any) {
  const products = data.filter((product) => product.category === category);
  return products;
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const products = getProductsByCategory(req.query.category);
  res.status(200).json(products);
}

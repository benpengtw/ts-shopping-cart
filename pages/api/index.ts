// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import data from './data.json';

export function getProducts() {
  return data;
}
type Item = {
  id: number,
  product:string,
  category:string,
  image:string,
  price:number
}
// interface Items extends Array<Item>{}
type Items = Array<Item>
export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Items>
) {
  const products = getProducts();
  res.status(200).json(products)
}

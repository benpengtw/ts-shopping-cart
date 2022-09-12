import Image from 'next/image';
import styles from '../styles/ProductCard.module.css';
import { FC } from 'react'
type product = {
  id: number,
  image:string,
  product:string,
  category:string,
  price:number
}
interface Props {
  product:product
}
const ProductCard: FC<Props>  = ({ product }) => {
  return (
    <div className={styles.card}>
      <Image src={product.image} height={300} width={220} />
      <h4 className={styles.title}>{product.product}</h4>
      <h5 className={styles.category}>{product.category}</h5>
      <p>$ {product.price}</p>
      <button className={styles.button}>Add to Cart</button>
    </div>
  );
};

export default ProductCard;
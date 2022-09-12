import { useRouter } from 'next/router';
import ProductCard from '../../components/ProductCard';
import styles from '../../styles/ShopPage.module.css';
import { getProductsByCategory } from '../api/products/[category]';
import { FC } from 'react'
type product = {
  id: number,
  image:string,
  product:string,
  category:string,
  price:number
}
interface Props {
  products : Array<product>
}
const CategoryPage: FC<Props> = ({ products }) => {
  const router = useRouter();
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Results for {router.query.category}</h1>
      <div className={styles.cards}>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default CategoryPage;
// origin
export async function getServerSideProps(ctx:any) {
  const category = ctx.query.category;
  const products = await getProductsByCategory(category);
  return { props: { products } };
}

// https://ithelp.ithome.com.tw/m/articles/10271128
// params! 是用來斷言 params 一定不是 null 或 undefined
// export const getStaticProps: GetServerSideProps = async ({
//   params,
// }) => {
//   const category = params!.category;
//   const products = await getProductsByCategory(category);
//   return { props: { products } };
// };
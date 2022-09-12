import Link from 'next/link';
import { useSelector } from 'react-redux';
import styles from '../styles/Navbar.module.css';
type item = {
  id: number,
  image:string,
  product:string,
  category:string,
  price:number
  quantity:number
}
const Navbar = () => {
  const cart = useSelector((state:any) => state.cart);

  const getItemsCount = () => {
    return cart.reduce((accumulator:any, item:item) => accumulator + item.quantity, 0);
  };

  return (
    <nav className={styles.navbar}>
      <h6 className={styles.logo}>GamesKart</h6>
      <ul className={styles.links}>
        <li className={styles.navlink}>
          <Link href="/">Home</Link>
        </li>
        <li className={styles.navlink}>
          <Link href="/shop">Shop</Link>
        </li>
        <li className={styles.navlink}>
          <Link href="/cart">
            <a>Cart ({getItemsCount()})</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

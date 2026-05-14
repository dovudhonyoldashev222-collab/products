import "./header.css";
import styles from "./Header.module.css";
import { Link } from "react-router-dom";
// icons import
import { FaRegHeart } from "react-icons/fa6";
import { FaCartPlus } from "react-icons/fa6";

// 1. Ortiqcha qavsni olib tashladik: (({ -> ({
const Header = ({ onSearch, cartCount }) => {
  return (
    <header className={styles.container}>
      <Link to="/" className={styles.logo}>Logo</Link>

      <div className={styles.form}>
        <input
          type="search"
          placeholder="Search by name"
          onChange={(e) => onSearch(e.target.value)}
        />
      </div>

      <div className={styles.links}>
        <Link to="/wishlist">
          <FaRegHeart />
        </Link>
        <Link to="/cart" className={styles.cartIcon}>
          <FaCartPlus />
          {cartCount > 0 && <span className={styles.badge}>{cartCount}</span>}
        </Link>
      </div>
    </header>
  );
}; // 2. Endi bu yerda hamma qavslar bir-biriga mos

export default Header;
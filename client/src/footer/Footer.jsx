import React from 'react';
import styles from './Footer.module.css';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.column}>
          <h2 className={styles.title}>MyShop</h2>
          <p className={styles.text}>Best products with best prices. Fast delivery and trusted service.</p>
        </div>
        
        <div className={styles.column}>
          <h3 className={styles.subtitle}>Links</h3>
          <ul className={styles.list}>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/">Products</Link></li>
            <li><Link to="/wishlist">Wishlist</Link></li>
            <li><Link to="/cart">Cart</Link></li>
          </ul>
        </div>

        <div className={styles.column}>
          <h3 className={styles.subtitle}>Contact</h3>
          <div className={styles.contactList}>
            <p className={styles.contactItem}>Email: example@gmail.com</p>
            <p className={styles.contactItem}>Phone: +998 90 123 45 67</p>
            <p className={styles.contactItem}>Tashkent, Uzbekistan</p>
          </div>
        </div>
      </div>
      
      <div className={styles.bottom}>
        <p>© 2026 MyShop. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;

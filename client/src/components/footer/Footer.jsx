import React from 'react';
import styles from './Footer.module.css';
import { Link } from 'react-router-dom';
import { FaFacebook, FaInstagram, FaTelegram, FaYoutube, FaBagShopping } from 'react-icons/fa6';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.grid}>
          <div className={styles.brand}>
            <Link to="/" className={styles.logo}>
              <FaBagShopping />
              <span>Shopify</span>
            </Link>
            <p className={styles.desc}>
              Eng so'nggi texnologiyalar va qulay xaridlar faqat bizda. 
              Sifat va ishonch - bizning ustuvorligimiz.
            </p>
            <div className={styles.socials}>
              <a href="#"><FaTelegram /></a>
              <a href="#"><FaInstagram /></a>
              <a href="#"><FaFacebook /></a>
              <a href="#"><FaYoutube /></a>
            </div>
          </div>

          <div className={styles.linksCol}>
            <h3>Kategoriyalar</h3>
            <ul>
              <li><Link to="/">Smartfonlar</Link></li>
              <li><Link to="/">Noutbuklar</Link></li>
              <li><Link to="/">Aksessuarlar</Link></li>
              <li><Link to="/">Quloqchinlar</Link></li>
            </ul>
          </div>

          <div className={styles.linksCol}>
            <h3>Yordam</h3>
            <ul>
              <li><Link to="/">Yetkazib berish</Link></li>
              <li><Link to="/">To'lov usullari</Link></li>
              <li><Link to="/">Qaytarish siyosati</Link></li>
              <li><Link to="/">Ko'p so'raladigan savollar</Link></li>
            </ul>
          </div>

          <div className={styles.linksCol}>
            <h3>Bog'lanish</h3>
            <ul>
              <li>Tel: +998 90 123 45 67</li>
              <li>Email: info@shopify.uz</li>
              <li>Manzil: Toshkent sh., Chilonzor tumani</li>
            </ul>
          </div>
        </div>

        <div className={styles.bottom}>
          <p>&copy; {new Date().getFullYear()} Shopify. Barcha huquqlar himoyalangan.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

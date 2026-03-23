import { useState } from 'react';
import styles from './Home.module.css';
import { FaRegHeart, FaHeart, FaCartPlus } from "react-icons/fa6";

const Product = ({ item, addToCart, addToWishlist, isFavorite }) => {
  const [count, setCount] = useState(1);

  // Agar item kelmasa, komponent xato bermasligi uchun
  if (!item) return null;

  // 1. Ma'lumotlarni item ichidan ajratib olamiz
  const {
    title,
    price,
    thumbnail, // Endi xato bermaydi
    images = [], // Defolt qiymat bo'sh massiv
  } = item;

  // 2. Rasm manbasini aniqlaymiz (tartib: thumbnail -> birinchi rasm -> placeholder)
  const imgSrc = thumbnail || (images && images[0]) || "https://via.placeholder.com/150";

  // Soni ko'paytirish
  const inc = () => {
    setCount((prev) => prev + 1);
  };

  // Soni kamaytirish (1 dan kam bo'lmasligi kerak)
  const dec = () => {
    if (count > 1) {
      setCount((prev) => prev - 1);
    }
  };

  // Savatga qo'shish funksiyasi
  const handleAddToCart = () => {
    const newItem = {
      ...item, // Barcha ma'lumotlarni saqlab qolamiz
      imgSrc,  // Tanlangan rasm
      count    // Tanlangan miqdor
    };
    addToCart(newItem);
  };

  // Wishlistga qo'shish funksiyasi
  const handleAddToWishlist = () => {
    const newItem = {
      ...item,
      imgSrc
    };
    addToWishlist(newItem);
  };

  return (
    <div className={styles.product}>
      <div className={styles.img}>
        {/* Rasm manbasi imgSrc dan olinadi */}
        <img src={imgSrc} alt={title} />
        <button className={styles.like} onClick={handleAddToWishlist}>
          {isFavorite ? <FaHeart style={{ color: '#ff4757' }} /> : <FaRegHeart />}
        </button>
      </div>

      <h2 className={styles.title}>{title}</h2>

      <p className={styles.price}>
        <span>{price}$</span>
      </p>

      <div className={styles.btns}>
        <button onClick={dec}>-</button>
        <span>{count}</span>
        <button onClick={inc}>+</button>

        {/* handleAddToCart argument talab qilmaydi, chunki newItem ichkarida bor */}
        <button onClick={handleAddToCart}>
          <FaCartPlus />
        </button>
      </div>
    </div>
  );
};

export default Product;
import React from 'react';
import styles from '../home/Home.module.css';
import Product from '../home/Product';

const Wishlist = ({ wishlistData, addToCart, addToWishlist }) => {
  return (
    <div className="container">
      <h1 style={{ textAlign: 'center', margin: '30px 0', color: '#001a78' }}>Wishlist data</h1>

      <div className={styles.container}>
        {wishlistData?.length > 0 ? (
          wishlistData.map((item) => (
            <Product
              key={item.id}
              item={item}
              addToCart={addToCart}
              addToWishlist={addToWishlist}
              isFavorite={true}
            />
          ))
        ) : (
          <h2 className={styles.notFound}>Saralangan mahsulotlar yo'q</h2>
        )}
      </div>
    </div>
  );
};

export default Wishlist;

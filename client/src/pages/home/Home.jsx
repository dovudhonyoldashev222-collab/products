import styles from './Home.module.css';
import Categories from "./Categories";
import Product from "./Product";

const Home = ({ showData, categories, category, setCategory, addToCart, addToWishlist, wishlistData }) => {

  return (
    <div>
      <Categories
        categories={categories}
        category={category}
        setCategory={setCategory}
      />
      <div className={styles.container}>
        {showData?.length > 0 ? (
          showData.map((item) => (
            <Product
              key={item.id}
              item={item}
              addToCart={addToCart}
              addToWishlist={addToWishlist}
              isFavorite={wishlistData?.some(fav => fav.id === item.id)}
            />
          ))
        ) : (
          <h2 className={styles.notFound}>Ma'lumot topilmadi</h2>
        )}
      </div>
    </div>
  );
};

export default Home;
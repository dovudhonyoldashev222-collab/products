import styles from "./Home.module.css";

const Categories = ({ categories = [], category, setCategory }) => {
  return (
    <div className={styles.categories}>
      {/* All button */}
      <button 
        onClick={() => setCategory('all')} 
        className={category === 'all' ? styles.active : ""}
      >
        All
      </button>

      {categories.map((cat, i) => (
        <button 
          key={i} 
          className={category === cat ? styles.active : ""} 
          onClick={() => setCategory(cat)}
        >
          {cat}
        </button>
      ))}
    </div>
  );
};

export default Categories;
import styles from "./Home.module.css";

const Categories = ({ categories = [], category, setCategory }) => {
  return (
    <div className={styles.categories}>
      {/* 1. 'active' emas, 'styles.active' bo'lishi kerak */}
      <button 
        onClick={() => setCategory('all')} 
        className={category === 'all' ? styles.active : ""}
      >
        All
      </button>

      {categories.map((cat, i) => (
        <button 
          key={i} 
          // 2. Bu yerda ham 'styles.active' deb yozamiz
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
import { Routes, Route } from "react-router-dom";
import { useEffect, useState, useMemo } from "react";
import { getData } from "./services/services";

import MainLayout from "./layouts/MainLayout";
import Home from "./pages/home/Home";
import Cart from "./pages/cart/Cart";
import Wishlist from "./pages/wishlist/Wishlist";

const App = () => {
  const [productsData, setProductsData] = useState([]); //  ma'lumotlar
  const [cartData, setCartData] = useState([]);         // Savatcha ma'lumotlari
  const [showData, setShowData] = useState([]);       // Ekranda ko'rinadigan ma'mulotlar
  const [category, setCategory] = useState("all");
  const [wishlistData, setWishlistData] = useState([]); // Wishlist ma'lumotlari

  // Kategoriyalarni yig'ish
  const categories = useMemo(() => {
    return productsData?.length > 0
      ? [...new Set(productsData.map((item) => item.category))]
      : [];
  }, [productsData]);

  // API dan ma'lumot olish
  useEffect(() => {
    const fetchData = async () => {
      const data = await getData();
      setProductsData(data);
      setShowData(data);
    };
    fetchData();
  }, []);

  // Kategoriya bo'yicha filtrlash
  useEffect(() => {
    if (category === "all") {
      setShowData(productsData);
    } else {
      const filtered = productsData.filter(
        (item) => item.category.toLowerCase() === category.toLowerCase()
      );
      setShowData(filtered);
    }
  }, [category, productsData]);

  // QIDIRUV FUNKSIYASI
  const handleSearch = (text) => {
    const filtered = productsData.filter((item) =>
      item.title.toLowerCase().includes(text.toLowerCase())
    );
    setShowData(filtered);
  };

  const addToCart = (item) => {
    setCartData((prev) => {
      const isExist = prev.find((i) => i.id === item.id);
      if (isExist) {
        return prev.map((i) =>
          i.id === item.id ? { ...i, count: i.count + item.count } : i
        );
      }
      return [...prev, item];
    });
  };

  const updateCartCount = (id, delta) => {
    setCartData((prev) =>
      prev.map((item) => {
        if (item.id === id) {
          const newCount = item.count + delta;
          return { ...item, count: newCount > 0 ? newCount : 1 };
        }
        return item;
      })
    );
  };

  const removeFromCart = (id) => {
    setCartData((prev) => prev.filter((item) => item.id !== id));
  };

  const addToWishlist = (item) => {
    setWishlistData((prev) => {
      const isExist = prev.find((i) => i.id === item.id);
      if (isExist) {
        return prev.filter((i) => i.id !== item.id);
      }
      return [...prev, item];
    });
  };

  return (
    <Routes>
      <Route path="/" element={<MainLayout onSearch={handleSearch} cartCount={cartData.length} />}>
        <Route
          index
          element={
            <Home
              showData={showData}
              categories={categories}
              category={category}
              setCategory={setCategory}
              addToCart={addToCart}
              addToWishlist={addToWishlist}
              wishlistData={wishlistData}
            />
          }
        />
        <Route
          path="cart"
          element={
            <Cart
              cartData={cartData}
              updateCartCount={updateCartCount}
              removeFromCart={removeFromCart}
            />
          }
        />
        <Route
          path="wishlist"
          element={
            <Wishlist
              wishlistData={wishlistData}
              addToCart={addToCart}
              addToWishlist={addToWishlist}
            />
          }
        />
      </Route>
      <Route path="*" element={<h1>Page Not Found</h1>} />
    </Routes>
  );
};

export default App;

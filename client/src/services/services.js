import { api } from "../api/axios";

export const getData = async () => {
  try {
    const res = await api.get("/products");
    return res.data?.products || [];
  } catch (error) {
    console.error("Error fetching products:", error);
    // Mock data as fallback with new categories
    return [
      {
        id: 1,
        title: "Iphone 13",
        price: 1000,
        category: "beauty",
        thumbnail: "https://cdn.dummyjson.com/products/images/beauty/iphone-case/thumbnail.jpg",
        images: ["https://cdn.dummyjson.com/products/images/beauty/iphone-case/1.png"]
      },
      {
        id: 2,
        title: "Laptop Pro",
        price: 2000,
        category: "furniture",
        thumbnail: "https://cdn.dummyjson.com/products/images/furniture/macbook/thumbnail.jpg",
        images: ["https://cdn.dummyjson.com/products/images/furniture/macbook/1.png"]
      },
      {
        id: 3,
        title: "Perfume X",
        price: 400,
        category: "fragrances",
        thumbnail: "https://cdn.dummyjson.com/products/images/fragrances/perfume/thumbnail.jpg",
        images: ["https://cdn.dummyjson.com/products/images/fragrances/perfume/1.png"]
      },
      {
        id: 4,
        title: "Fresh Basket",
        price: 550,
        category: "groceries",
        thumbnail: "https://cdn.dummyjson.com/products/images/groceries/basket/thumbnail.jpg",
        images: ["https://cdn.dummyjson.com/products/images/groceries/basket/1.png"]
      }
    ];
  }
};

export const postData = async () => {
  const res = await api.post("/orders");
  console.log(res);
};
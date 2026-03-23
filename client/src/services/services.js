import { api } from "../api/axios";

export const getData = async () => {
  try {
    const res = await api.get("/products");
    return res.data?.products || [];
  } catch (error) {
    console.error("Error fetching products:", error);
    // Mock data as fallback
    return [
      {
        id: 1,
        title: "Iphone 13",
        price: 1000,
        category: "smartphone",
        thumbnail: "https://cdn.dummyjson.com/products/images/smartphones/iPhone%2013/thumbnail.jpg",
        images: ["https://cdn.dummyjson.com/products/images/smartphones/iPhone%2013/1.png"]
      },
      {
        id: 2,
        title: "Laptop Pro",
        price: 2000,
        category: "laptop",
        thumbnail: "https://cdn.dummyjson.com/products/images/laptops/MacBook%20Pro/thumbnail.jpg",
        images: ["https://cdn.dummyjson.com/products/images/laptops/MacBook%20Pro/1.png"]
      },
      {
        id: 3,
        title: "Watch Series 7",
        price: 400,
        category: "accessories",
        thumbnail: "https://cdn.dummyjson.com/products/images/mens-watches/Rolex%20Submariner%20Watch/thumbnail.jpg",
        images: ["https://cdn.dummyjson.com/products/images/mens-watches/Rolex%20Submariner%20Watch/1.png"]
      },
      {
        id: 4,
        title: "Headphones Max",
        price: 550,
        category: "headphones",
        thumbnail: "https://cdn.dummyjson.com/products/images/mobile-accessories/Apple%20AirPods%20Max%20Silver/thumbnail.jpg",
        images: ["https://cdn.dummyjson.com/products/images/mobile-accessories/Apple%20AirPods%20Max%20Silver/1.png"]
      }
    ];
  }
};

export const postData = async () => {
  const res = await api.post("/orders");
  console.log(res);
};
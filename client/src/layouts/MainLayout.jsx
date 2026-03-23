import { Outlet } from "react-router-dom";
import Header from "../components/header/Header";
import Footer from "../footer/Footer";

const MainLayout = ({ onSearch, cartCount }) => {
  return (
    <>
      <Header onSearch={onSearch} cartCount={cartCount} />
      <main style={{ minHeight: '60vh' }}>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default MainLayout;
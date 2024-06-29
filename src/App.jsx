import { Route, Routes } from "react-router-dom";

import Layout from "./components/Layout";
import HomePage from "./pages/HomePage/HomePage";
import BrandPage from "./pages/BrandPage/BrandPage";
import BlogPage from "./pages/BlogPage/BlogPage";
import AboutUsPage from "./pages/AboutUsPage/AboutUsPage";
import ContactUsPage from "./pages/ContactUsPage/ContactUsPage";
import SearchPage from "./pages/SearchPage/SearchPage";
import BasketPage from "./pages/BasketPage/BasketPage";
import FavoritesPage from "./pages/FavoritesPage/FavoritesPage";
import AccountPage from "./pages/AccountPage/AccountPage";

const App = () => {
  return <>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="brand" element={<BrandPage />} />
        <Route path="blog" element={<BlogPage />} />
        <Route path="about-us" element={<AboutUsPage />} />
        <Route path="contact-us" element={<ContactUsPage />} />
        <Route path="search" element={<SearchPage />} />
        <Route path="basket" element={<BasketPage />} />
        <Route path="favorites" element={<FavoritesPage />} />
        <Route path="account" element={<AccountPage />} />
      </Route>
    </Routes>
  </>;
};

export default App;

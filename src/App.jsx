import { Route, Routes } from 'react-router-dom';

// Layout
import Layout from '@components/Layout';

// Pages
import HomePage from './pages/HomePage/HomePage';
import BrandPage from './pages/BrandPage/BrandPage';
import BlogPage from './pages/BlogPage/BlogPage';
import AboutUsPage from './pages/AboutUsPage/AboutUsPage';
import ContactUsPage from './pages/ContactUsPage/ContactUsPage';
import SearchPage from './pages/SearchPage/SearchPage';
import BasketPage from './pages/BasketPage/BasketPage';
import FavoritesPage from './pages/FavoritesPage/FavoritesPage';
import AccountPage from './pages/AccountPage/AccountPage';
import GalleryPage from './pages/GalleryPage/GalleryPage';
import ModuleoPage from './pages/ModuleoPage/ModuleoPage';
import ProductPage from './pages/ProductPage/ProductPage';

// Components
import Profile from '@components/Profile/Profile';
import History from '@components/History/History';
import Feedback from '@components/Feedback/Feedback';

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="brand" element={<BrandPage />} />
          <Route path="blog" element={<BlogPage />} />
          <Route path="about-us" element={<AboutUsPage />} />
          <Route path="contact-us" element={<ContactUsPage />} />
          <Route path="search" element={<SearchPage />} />
          <Route path="gallery" element={<GalleryPage />} />

          <Route path="moduleo" element={<ModuleoPage />} />
          <Route
            path="moduleo/product/:id"
            element={<ProductPage source={['brand', 'moduleo']} />}
          />

          <Route path="favorites" element={<FavoritesPage />} />
          <Route
            path="favorites/product/:id"
            element={<ProductPage source={['favorites']} />}
          />

          <Route path="basket" element={<BasketPage />} />
          <Route
            path="basket/product/:id"
            element={<ProductPage source={['basket']} />}
          />

          <Route path="account" element={<AccountPage />}>
            <Route path="profile" element={<Profile />} />
            <Route path="history" element={<History />} />
            <Route path="feedback" element={<Feedback />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
};

export default App;

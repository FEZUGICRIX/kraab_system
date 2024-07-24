import { Route, Routes } from 'react-router-dom';

// Layout
import Layout from '@components/Layout';

// Pages
import HomePage from './pages/HomePage/HomePage';
import BrandPage from './pages/BrandPage/BrandPage';
import CatalogsPage from './pages/CatalogsPage/CatalogsPage'
import AboutUsPage from './pages/AboutUsPage/AboutUsPage';
import ContactUsPage from './pages/ContactUsPage/ContactUsPage';
import BasketPage from './pages/BasketPage/BasketPage';
import FavoritesPage from './pages/FavoritesPage/FavoritesPage';
import GalleryPage from './pages/GalleryPage/GalleryPage';
import ModuleoPage from './pages/ModuleoPage/ModuleoPage';
import ProductPage from './pages/ProductPage/ProductPage';
import DenkirsPage from './pages/DenkirsPage/DenkirsPage';
import KraabmodPage from './pages/KraabmodPage/KraabmodPage';
import JmPage from './pages/JmPage/JmPage';

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="brand" element={<BrandPage />} />
          <Route path="catalogs" element={<CatalogsPage />} />
          <Route path="about-us" element={<AboutUsPage />} />
          <Route path="contact-us" element={<ContactUsPage />} />
          <Route path="gallery" element={<GalleryPage />} />

          <Route path="moduleo" element={<ModuleoPage />} />
          <Route
            path="moduleo/product/:id"
            element={<ProductPage source={['brand', 'moduleo']} />}
          />

          <Route path="valot" element={<DenkirsPage />} />
          <Route
            path="valot/product/:id"
            element={<ProductPage source={['brand', 'valot']} />}
          />

          <Route path="kraabmod" element={<KraabmodPage />} />
          <Route
            path="kraabmod/product/:id"
            element={<ProductPage source={['brand', 'kraabmod']} />}
          />

          <Route path="jm" element={<JmPage />} />
          <Route
            path="jm/product/:id"
            element={<ProductPage source={['brand', 'jm']} />}
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
        </Route>
      </Routes>
    </>
  );
};

export default App;

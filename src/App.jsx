import { Navigate, Route, Routes } from 'react-router-dom';

// Layout
import Layout from '@components/Layout';

// Components
import BasketMain from './components/BasketMain/BasketMain';
import BasketCheckout from './components/BasketCheckout/BasketCheckout';
import BasketPayment from './components/BasketPayment/BasketPayment';
import BasketConfirmation from './components/BasketConfirmation/BasketConfirmation';

// Pages
import HomePage from './pages/HomePage/HomePage';
import BrandPage from './pages/BrandPage/BrandPage';
import CatalogsPage from './pages/CatalogsPage/CatalogsPage';
import AboutUsPage from './pages/AboutUsPage/AboutUsPage';
import ContactUsPage from './pages/ContactUsPage/ContactUsPage';
import BasketPage from './pages/BasketPage/BasketPage';
import GalleryPage from './pages/GalleryPage/GalleryPage';
import ModuleoPage from './pages/ModuleoPage/ModuleoPage';
import ProductPage from './pages/ProductPage/ProductPage';
import DenkirsPage from './pages/DenkirsPage/DenkirsPage';
import KraabSlimPage from './pages/KraabSlimPage/KraabSlimPage';
import JmPage from './pages/JmPage/JmPage';
import KraabGippsPage from './pages/KraabGippsPage/KraabGippsPage';

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

          <Route path="kraab-slim" element={<KraabSlimPage />} />
          <Route
            path="kraab-slim/product/:id"
            element={<ProductPage source={['brand', 'kraab-slim']} />}
          />

          <Route path="kraab-gipps" element={<KraabGippsPage />} />
          <Route
            path="kraab-gipps/product/:id"
            element={<ProductPage source={['brand', 'kraab-gipps']} />}
          />

          <Route path="jm" element={<JmPage />} />
          <Route
            path="jm/product/:id"
            element={<ProductPage source={['brand', 'jm']} />}
          />

          <Route
            path="basket"
            element={<Navigate to="/basket/main" replace />}
          />
          <Route path="basket" element={<BasketPage />}>
            <Route path="main" element={<BasketMain />} />
            <Route path="checkout" element={<BasketCheckout />} />
            <Route path="payment" element={<BasketPayment />} />
            <Route path="confirmation" element={<BasketConfirmation />} />
          </Route>

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

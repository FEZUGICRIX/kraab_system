// app/product/[id]/page.js

import { getProducts } from '@/api/getProducts';
import ProductClient from './ProductClient';

// Функция для генерации параметров для статической генерации
export async function generateStaticParams() {
  const ids = await getProducts({ type: 'get_all_products' });

  return ids.productIds.map((id) => ({
    id: id.toString(),
  }));
}

// Ваш компонент страницы
const Product = async ({ params }) => {
  return <ProductClient id={params.id} />;
};

export default Product;

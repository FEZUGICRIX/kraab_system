import ProductClient from './ProductClient';

// Функция для генерации параметров для статической генерации
export async function generateStaticParams() {
  const ids = [{ id: 0 }, { id: 1 }, { id: 2 }];

  return ids.map((id) => ({
    id: id.toString(),
  }));
}

// Ваш компонент страницы
const Product = async ({ params }) => {
  return <ProductClient id={params.id} />;
};

export default Product;

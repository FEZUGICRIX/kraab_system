import { useEffect, useState } from 'react';

import { getProducts } from '@api/getProducts';
import Breadcrumbs from '@Breadcrumbs';
import Products from '@components/Products/Products';
import Singup from '@components/Singup/Singup';

const JmPage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const data = await getProducts({
          catalog: 'jm_products',
          type: 'get_products',
        });
        setProducts(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchProduct();
  }, []);

  return (
    <>
      <Breadcrumbs pageTitle="JM" previousPages={['brand']} />

      <section className="info">
        <div className="container">
          <div className="info__container">
            <h1 className="info__block-title">
              JM
            </h1>

            <div className="info__blocks">
              <div className="info__block">
                Sopii täydellisesti seinien ja kattojen asennukseen, estäen
                rakenteiden näkymisen kankaan läpi. Materiaalin
                valonläpäisykyky on vain 6 %, mikä luo miellyttävän
                valaistusympäristön. Erityinen kestävyys ja joustavuus
                mahdollistavat toistuvan purkamisen ja asentamisen ilman
                vaurioita. Neutraali valkoinen väri ja harmaa taustapuoli
                tuovat tyylikkyyttä ja eleganssia jokaiseen tilaan. Rullan
                leveys 5.20
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="products jm">
        <div className="container">
          <div className="product">
            <Products products={products} root="jm" />
          </div>
        </div>
      </section>

      <Singup />
    </>
  );
};

export default JmPage;

import { useEffect, useState } from 'react';

import { getProducts } from '@api/getProducts';
import Breadcrumbs from '@Breadcrumbs';
import Products from '@components/Products/Products';
import Singup from '@components/Singup/Singup';

const ModuleoPage = () => {
  const [products, setProducts] = useState([]);
  const basePath = '/img/pages/moduleo/';

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const data = await getProducts({
          catalog: 'moduleo_products',
          type: 'get_products',
        });
        setProducts(data.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchProduct();
  }, []);

  return (
    <>
      <Breadcrumbs pageTitle="Moduleo" previousPages={['brand']} />

      <section className="info">
        <div className="container">
          <div className="info__container">
            <h1 className="info__block-title">
              MODULEO Ylelliset vinyylilattiat
            </h1>

            <div className="info__blocks">
              <div className="info__block">
                MODULEO tarjoaa ylellisiä vinyylilattioita, jotka ovat
                täydellinen valinta niin kylpyhuoneisiin kuin
                keittiöihinkin niiden vedenpitävyyden ansiosta. Materiaalin
                kestävyys varmistaa, että lattiat pysyvät
                naarmuuntumattomina, sillä ne on suojattu paksulla
                kulutusta kestävällä kerroksella. Asennus on monipuolista
                ja kätevää, sillä lattiat voidaan asentaa joko liimalla tai
                helposti napsauttamalla paikalleen.
                <br />
                <br />
                Erityisesti MODULEO:n puolikelluvaan asennukseen
                suunniteltu aluskate on paksuudeltaan 1,8 mm ja
                itseliimautuva. Tämä innovatiivinen ratkaisu yhdistää
                liimatun asennuksen lopullisen laadun ja napsauttamalla
                asennuksen helppouden. Xtrafloor Flex Pro korjaa pienet
                epätasaisuudet aluslattiassa ja tarjoaa paremman akustisen
                eristyksen (13 dB tai 10 dB liimalla). Se on sopiva
                käytettäväksi myös viherhuoneissa ja kestää kaupallisessa
                käytössä enintään 250 kg painavan liikkuvan kaluston.
                Lisäksi lattia kestää pyörillä olevia tuoleja.
                <br />
                <br />
                Tämän asennusratkaisun etuna on lähes 40 % ajansäästö, ja
                lattiat ovat heti kulkukelpoisia. Ne on myös helppo ja
                puhdas irrottaa vahingoittamatta tukipintaa. Lattiat
                soveltuvat niin lattialämmitykseen (max 27°C) kuin
                lattiajäähdytykseenkin. Jokaisessa paketissa on 2,5 metriä
                lattiamateriaalia.
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="products">
        <div className="container">
          <div className="product">
            <Products products={products} root="moduleo" basePath={basePath} />
          </div>
        </div>
      </section>

      <Singup />
    </>
  );
};

export default ModuleoPage;

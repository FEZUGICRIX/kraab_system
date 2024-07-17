const PRODUCT_DATA = {
  galleryItems: [
    {
      id: 0,
      title: 'toimisto',
      img: '/img/pages/gallery/toimisto.jpeg',
    },
    {
      id: 1,
      title: 'lääkärin',
      img: '/img/pages/gallery/laakarin.jpg',
    },
    {
      id: 2,
      title: 'ravintola',
      img: '/img/pages/gallery/ravintola.jpeg',
    },
    {
      id: 3,
      title: 'käytävä',
      img: '/img/pages/gallery/kaytava.jpeg',
    },
    {
      id: 4,
      title: 'olohuone',
      img: '/img/pages/gallery/olohuone.jpeg',
    },
    {
      id: 5,
      title: 'makuuhuone',
      img: '/img/pages/gallery/makuuhuone.jpeg',
    },
    {
      id: 6,
      title: 'lastenhuone',
      img: '/img/pages/gallery/lastenhuone.jpeg',
    },
    {
      id: 7,
      title: 'kylpyhuone',
      img: '/img/pages/gallery/kylpyhuone.jpeg',
    },
    {
      id: 8,
      title: 'Parturikampaamo',
      img: '/img/pages/gallery/parturikampaamo.jpeg',
    },
    {
      id: 9,
      title: 'hotelli',
      img: '/img/pages/gallery/hoteli.jpeg',
    },
    {
      id: 10,
      title: '3d-konsepti olohuoneeseen',
      img: '/img/pages/gallery/3d-konspecti.jpeg',
    },
  ],

  Denkirs: [







    {
      SKU: 'DK/EU-8060-BK',
      title: 'DK/EU-8060-BK',
      img: '/img/pages/denkers/8060-BK',
      img2: '/img/pages/denkers/8060-BK 2',
      img3: '/img/pages/denkers/8060-BK 3',
      material: 'alumiini',
      price: 380,
      length: null,
      dimmable: false,
      color_of_light: 'valkoinen säädettävä',
      description:
        'Yleisvalaistukseen suunniteltu älykäs kiskovalo. Runko on suunniteltu joustavaksi silikoniputkeksi, jonka pituus on 150 cm. Ohjataan mobiilisovelluksen, ohjauspaneelin, kaukosäätimen ja ääniavustajan kautta. Säädettävä kirkkaus ja värilämpötila välillä 3000 - 6000 K. Pystyy asettamaan valoskenaarioita. Lamput on varustettu LEDeillä, joilla on korkea värintoistoindeksi. Helppo ja luotettava asennus DENKIRS SMART -telineeseen mekaanisilla salpoilla. DK/EU-8064-BK lampun pidike ostetaan erikseen.',
      height: null,
      angle_of_dispersion: null,
    },
    {
      SKU: 'DK/EU-8004-BK',
      title: 'DK/EU-8004-BK',
      img: '/img/pages/denkers/8004-BK',
      img2: '/img/pages/denkers/8004-BK 2',
      img3: '/img/pages/denkers/8004-BK 3',
      material: 'alumiini',
      price: 160,
      length: 406,
      dimmable: true,
      color_of_light: 'valkoinen säädettävä',
      description:
        'Malli perusvalaistukseen. Laajakulmainen (120°) Säädettävä kirkkaus ja värilämpötila välillä 3000-6000 K. Se asennetaan DENKIRS SMART -kiskojärjestelmään. Lampun säätö ja kauko-ohjaus voidaan suorittaa kosketuspaneelien DK/EU-7500-BK tai DK/EU-7500-WH, kaukosäätimen DK/EU-7300-BK tai Wi-Fi-muuntimen DK/EU-7700 kautta. -WF älypuhelimen ohjaukseen ja mahdollisuus ääniohjauksen avustajiin: Siri, Google Assistant.',
      height: null,
      angle_of_dispersion: null,
    },
    {
      SKU: 'DK/EU-8005-BK',
      title: 'DK/EU-8005-BK',
      img: '/img/pages/denkers/8005-BK',
      img2: '/img/pages/denkers/8005-BK 2',
      img3: '/img/pages/denkers/8005-BK 3',
      material: 'alumiini',
      price: 220,
      length: 600,
      dimmable: true,
      color_of_light: 'säädettävä',
      description:
        'Malli perusvalaistukseen. Laajakulmainen (120°) Säädettävä kirkkaus ja värilämpötila välillä 3000–6000 K. Se asennetaan DENKIRS SMART -kiskojärjestelmään. Lampun säätö ja kauko-ohjaus voidaan suorittaa kosketuspaneelien DK/EU-7500-BK tai DK/EU-7500-WH, kaukosäätimen DK/EU-7300-BK tai Wi-Fi-muuntimen DK/EU-7700 kautta. -WF älypuhelimen ohjaukseen ja mahdollisuus ääniohjauksen avustajiin: Siri, Google Assistant.',
      height: null,
      angle_of_dispersion: null,
    },
  ],
};

// Function for automatic assignment of unique IDs
const assignIds = (products) => {
  let currentId = 0;
  Object.keys(products).forEach((key) => {
    products[key] = products[key].map((item) => {
      item.id = currentId++;
      return item;
    });
  });
  return products;
};

export const PRODUCTS = assignIds(PRODUCT_DATA);

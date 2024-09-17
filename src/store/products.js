const PRODUCT_DATA = {
  galleryItems: [
    {
      id: 0,
      title: 'Toimisto',
      img: '/img/pages/gallery/toimisto.jpeg',
    },
    {
      id: 1,
      title: 'Lääkärin',
      img: '/img/pages/gallery/laakarin.jpg',
    },
    {
      id: 2,
      title: 'Ravintola',
      img: '/img/pages/gallery/ravintola.jpeg',
    },
    {
      id: 3,
      title: 'Käytävä',
      img: '/img/pages/gallery/kaytava.jpeg',
    },
    {
      id: 4,
      title: 'Olohuone',
      img: '/img/pages/gallery/olohuone.jpeg',
    },
    {
      id: 5,
      title: 'Makuuhuone',
      img: '/img/pages/gallery/makuuhuone.jpeg',
    },
    {
      id: 6,
      title: 'Lastenhuone',
      img: '/img/pages/gallery/lastenhuone.jpeg',
    },
    {
      id: 7,
      title: 'Kylpyhuone',
      img: '/img/pages/gallery/kylpyhuone.jpeg',
    },
    {
      id: 8,
      title: 'Parturikampaamo',
      img: '/img/pages/gallery/parturikampaamo.jpeg',
    },
    {
      id: 9,
      title: 'Hotelli',
      img: '/img/pages/gallery/hoteli.jpeg',
    },
    {
      id: 10,
      title: '3d-konsepti olohuoneeseen',
      img: '/img/pages/gallery/3d-konspecti.jpeg',
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

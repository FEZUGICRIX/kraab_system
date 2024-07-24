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

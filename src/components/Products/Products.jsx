const Products = ({ products }) => {
  return (
    <>
      {products.map((item) => (
        <div className="product__item" key={item.id}>
          <img
            src={item.img}
            alt="product image"
            className="product__img"
          />

          <div className="product__title">{item.title}</div>

          <div className="product__colors">
            {item.colors?.map((color, index) => (
              <div
                key={index}
                style={{
                  width: 10,
                  height: 10,
                  background: color,
                  borderRadius: 10,
                }}
              ></div>
            ))}
          </div>

          <div className="product__price">{item.price}€</div>
        </div>
      ))}
    </>
  );
};

export default Products;

function ProductItem({ product }) {
  return (
    <div className="col">
      <div className="card h-100">
        <img src={product.image} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{product.title}</h5>
          <p className="card-text">{product.description}</p>
        </div>
        <div className="card-footer">
          <h5 className="">{product.price} $</h5>
        </div>
      </div>
    </div>
  );
}

export default ProductItem;

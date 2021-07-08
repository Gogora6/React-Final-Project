import { useEffect, useState } from "react";
import { getProducts } from "../../../services";
import ProductItem from "./ProductItem";
function ProductList(props) {
  const [Products, setProductsData] = useState([]);

  const LoadProfileData = async () => {
    const result = await getProducts();
    if (result) {
      setProductsData(result);
    }
  };

  useEffect(() => {
    LoadProfileData();
  }, []);
  return (
    <div className  ="row row-cols-1 row-cols-md-3 g-4">
      {Products.map((product) => {
        return <ProductItem product={product} key={product.id} />;
      })}
    </div>
  );
}

export default ProductList;

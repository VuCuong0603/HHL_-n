import useSwr from "swr";
import ProductItem from "../../product-item";
import ProductsLoading from "./loading";
import { ProductTypeList } from "types";
import { getproductAPI } from "utils/data/products";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

const ProductsContent = () => {
  const router = useRouter();
  const [data, setData] = useState([]);

  const { aolen } = router.query;

  const getData = async (aolen: any) => {
    const res = await getproductAPI();
    if (res) {
      if (aolen) {
        setData(() =>
          res.result.products.filter((item: any) => item.categoryId === aolen)
        );
      } else {
        setData(res.result.products);
      }
    }
  };

  useEffect(() => {
    getData(aolen);
  }, [aolen]);

  useEffect(() => {
    const a = data.filter((item: any) => item.categoryId === aolen);
    console.log("a..", a);
  }, [aolen]);

  console.log("datadata..", data);

  if (data.length < 0) return <div>Failed to load users</div>;

  return (
    <>
      {data.length < 0 && <ProductsLoading />}

      {data.length > 0 && (
        <section className="products-list">
          {data.map((item: any) => (
            <ProductItem
              id={item._id}
              name={item.name}
              price={item.price}
              color={item.quantity[0].color}
              // currentPrice={item.currentPrice}
              key={item._id}
              images={item.image.url}
            />
          ))}
        </section>
      )}
    </>
  );
};

export default ProductsContent;

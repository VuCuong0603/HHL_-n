// import type { NextApiRequest, NextApiResponse } from "next";
// import { useEffect, useState } from "react";
// import { getproductAPI } from "utils/data/products";

// // fake data
// // import products from "../../../utils/data/products";
// // const [products, setProducts] = useState<any>([]);
// // const productapi = async () => {
// //   const res = await getproductAPI();
// //   setProducts(res.result.products);
// // };
// // useEffect(() => {
// //   productapi();
// // }, []);

// const Product = (req: NextApiRequest, res: NextApiResponse) => {
//   const {
//     query: { pid },
//   } = req;

//   const [products, setProducts] = useState<any>([]);

//   const productapi = async () => {
//     const res = await getproductAPI();
//     console.log("res..", res);
//     setProducts(res.result.products);
//   };

//   useEffect(() => {
//     productapi();
//   }, []);

//   const product = products.find((x: any) => x._id === pid);
//   res.status(200).json(product);
// };

// export default Product;

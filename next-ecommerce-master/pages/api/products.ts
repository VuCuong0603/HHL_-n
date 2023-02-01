// import type { NextApiRequest, NextApiResponse } from "next";
// // import { useEffect, useState } from "react";
// // import { getproductAPI } from "utils/data/products";

// // fake data
// import products from "../../utils/data/products";
// // const [products, setProducts] = useState<any>([]);
// // const productapi = async () => {
// //   const res = await getproductAPI();
// //   setProducts(res.result.products);
// // };
// // useEffect(() => {
// //   productapi();
// // }, []);
// export default (req: NextApiRequest, res: NextApiResponse) => {
//   console.log(req);

//   // fake loading time
//   setTimeout(() => {
//     res.status(200).json(products);
//   }, 800);
// };

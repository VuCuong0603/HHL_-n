import React, { useEffect, useState } from "react";
import { getNewsAPI } from "../../utils/data/news";
const ShopNew = () => {
  const [data, setData] = useState([]);

  const getblog = async () => {
    try {
      const res = await getNewsAPI();

      setData(res.result.blogs);
    } catch (error) {}
  };
  useEffect(() => {
    getblog();
  }, []);

  return (
    <div className="container">
      <h1>Tin tức nổi bật nhất:</h1>
      {data.map((i: any) => (
        <div style={{ padding: "2rem" }}>
          <h2>{i.title}</h2>
          <div
            style={{
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "center",
              paddingTop: "0.5rem",
            }}
          >
            <img
              src={`${i.image.url}`}
              style={{ width: "100px", objectFit: "contain" }}
            />

            <p
              style={{
                overflow: "hidden",
                whiteSpace: "nowrap",
                textOverflow: "ellipsis",
              }}
            >
              {i.detail}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ShopNew;

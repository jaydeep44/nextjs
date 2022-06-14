import { useEffect, useState } from "react";
import Navbar from "../component/navbar";
import Image from "next/image";

const shop = () => {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((json) => {
        setProduct(json.products);
        // this.setState({
        //     items: json,
        //     DataisLoaded: true
        // });
      });
  }, [product]);
  console.log(product);

  return (
    <div>
      <Navbar />
      <div className={"head"}>
        {product?.slice(0, 4).map((item) => (
          <div>
            <span>{item.title}</span>
            <Image
              width={"100px"}
              height={"100px"}
              src={item.images[0]}
            ></Image>
          </div>
        ))}
      </div>
      <h1 style={{ color: "red" }}>Shop</h1>
    </div>
  );
};

export default shop;

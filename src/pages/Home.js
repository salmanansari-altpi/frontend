import { Link } from "react-router-dom";
import NavBar from "../features/navbar/Navbar";
import ProductList from "../features/product/components/ProductList";
import Header from "../features/LandingPage/Header";
import { useState } from "react";

function Home() {
  const [Size, setSize] = useState();
  const [productName, setProductName] = useState("");
  const sortProduct = () => {};
  const sortProductName = (ele) => {
    // console.log(ele);
    setProductName(ele);
  };
  const filterBySize = (ele) => {
    // console.log(ele);
    setSize(ele);
  };

  return (
    <div>
      <Header sortProductName={sortProductName} filterBySize={filterBySize} />
      <ProductList sortByName={productName}></ProductList>
    </div>
  );
}

export default Home;

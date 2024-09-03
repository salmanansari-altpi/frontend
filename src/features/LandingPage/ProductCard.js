// src/NewProductSection.js

import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './style.css';
import img1 from './product-1.jpg'
import img2 from './product-2.jpg'
import img3 from './product-3.jpg'
import img4 from './product/product-4.jpg'
import { ArrowsPointingOutIcon, HeartIcon, ShoppingBagIcon } from '@heroicons/react/24/outline';





const ProductCard = () => {
  const products = [
    {
      category: "women",
      img: img1,
      label: "New",
      title: "Buttons tweed blazer",
      price: "$59.0",
      
    },
    {
      category: "men",
      img: img2,
      title: "Flowy striped skirt",
      price: "$49.0",
  
    },
    {
      category: "accessories",
      img: img3,
      label: "out of stock",
      title: "Cotton T-Shirt",
      price: "$59.0",
     
    },
    {
      category: "accessories",
      img: img4,
      title: "Slim striped pocket shirt",
      price: "$59.0",
      
    },
  ];

  

  return (
    <section className="product spad">
      <Container>
        <Row>
          <Col lg={4} md={4}>
            <div className="section-title">
              <h4>New product</h4>
            </div>
          </Col>
          <Col lg={8} md={8}>
            <ul className="filter__controls">
              <li className="active" data-filter="*">All</li>
              <li data-filter=".women">Women’s</li>
              <li data-filter=".men">Men’s</li>
              <li data-filter=".kid">Kid’s</li>
              <li data-filter=".accessories">Accessories</li>
              <li data-filter=".cosmetic">Cosmetics</li>
            </ul>
          </Col>
        </Row>
        <Row className="property__gallery">
          {products.map((product, index) => (
            <Col lg={3} md={4} sm={6} key={index} className={`mix ${product.category}`}>
              <div className="product__item">
                <div className="product__item__pic set-bg" style={{ backgroundImage: `url(${product.img})` }}>
                  {product.label && <div className={`label ${product.label.toLowerCase().replace(" ", "")}`}>{product.label}</div>}
                  <ul className="product__hover">
                    <li><a href={product.img} className="image-popup"><ArrowsPointingOutIcon/></a></li>
                    <li><a href="#"><HeartIcon/></a></li>
                    <li><a href="#"><ShoppingBagIcon/></a></li>
                  </ul>
                </div>
                <div className="product__item__text">
                  <h6><a href="#">{product.title}</a></h6>
                  <div className="product__price">{product.price}</div>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default ProductCard;

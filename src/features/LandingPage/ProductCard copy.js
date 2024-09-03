// src/NewProductSection.js

import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './style.css';
import thumbnail1 from './product-1.jpg'
import thumbnail2 from './product-2.jpg'
import thumbnail3 from './product-3.jpg'
import thumbnail4 from './product/product-4.jpg'
import { useSelector, useDispatch } from 'react-redux';
import { ArrowsPointingOutIcon, HeartIcon, ShoppingBagIcon } from '@heroicons/react/24/outline';
import {
  fetchBrandsAsync,
  fetchCategoriesAsync,
  fetchProductsByFiltersAsync,
  selectAllProducts,
  selectBrands,
  selectCategories,
  selectTotalItems,
} from '../product/productSlice';
import { defaultMethod } from 'react-router-dom/dist/dom';





export default function ProductCard  ()  {
  const dispatch = useDispatch();
  const products = useSelector(selectAllProducts);

  const renderRating = (rating) => {
    const stars = [];
    for (let i = 0; i < rating; i++) {
      stars.push(<i className="fa fa-star" key={i}></i>);
    }
    return stars;
  };

  <div className="lg:col-span-3">
  <ProductGrid products={products}></ProductGrid>
</div>
};

function ProductGrid({ products }) {
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
                <div className="product__item__pic set-bg" style={{ backgroundImage: `url(${product.thumbnail})` }}>
                  {product.label && <div className={`label ${product.label.toLowerCase().replace(" ", "")}`}>{product.label}</div>}
                  <ul className="product__hover">
                    <li><a href={product.thumbnail} className="image-popup"><ArrowsPointingOutIcon/></a></li>
                    <li><a href="#"><HeartIcon/></a></li>
                    <li><a href="#"><ShoppingBagIcon/></a></li>
                  </ul>
                </div>
                <div className="product__item__text">
                  <h6><a href="#">{product.title}</a></h6>
                  <div className="rating">
                    {renderRating(product.rating)}
                  </div>
                  <div className="product__price">{product.price}</div>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

import React, { useState, useEffect } from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import axios from 'axios';
import images from '../data/images';

const Gallery = () => {
  const ImagesScreen = () => {
    images.map((key, index) => {
      return (
        <Col xs='12' sm='4' md='4'>
          <img src='https://picsum.photos/id/237/200/300'></img>
        </Col>
      );
    });
  };

  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const { data } = await axios.get(`/api/products`);
      setProducts(data);
    };
    fetchProducts();
  }, []);

  return (
    <div>
      <h1>This is Gallery page</h1>

      <Row>
        <Col xs='12' sm='4' md='4'>
          <img src='https://picsum.photos/id/237/200/300'></img>
        </Col>
        <Col xs='12' sm='4' md='4'>
          <img src='https://picsum.photos/id/237/200/300'></img>
        </Col>
        <Col xs='12' sm='4' md='4'>
          <img src='https://picsum.photos/id/237/200/300'></img>
        </Col>
      </Row>
    </div>
  );
};

export default Gallery;

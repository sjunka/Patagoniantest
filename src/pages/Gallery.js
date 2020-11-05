import React, { useState, useEffect } from 'react';
import { Row, Col, Button, Form } from 'react-bootstrap';
import axios from 'axios';
import images from '../data/images';

const Gallery = () => {
  const imageUpload = (e) => {
    e.preventDefault();
    console.log(e);
  };
  // const [products, setProducts] = useState([]);

  // useEffect(() => {
  //   const fetchProducts = async () => {
  //     const { data } = await axios.get(`/api/products`);
  //     setProducts(data);
  //   };
  //   fetchProducts();
  // }, []);

  return (
    <div>
      <h1>This is Gallery page</h1>
      <Row>
        {images.map((e, index) => {
          return (
            <Col
              key={index}
              xs='12'
              sm='4'
              md='4'
              style={{ marginBottom: '16px' }}
            >
              <img src={e.src} alt='not found' />;
            </Col>
          );
        })}
      </Row>
      <Row>
        <Col>
          <Form>
            <Form.Group controlId='formBasicEmail'>
              <Form.Label>Image URL</Form.Label>
              <Form.Control type='text' placeholder='Enter image url' />
              <Form.Text className='text-muted'>
                We'll never share your image with anyone else.
              </Form.Text>
            </Form.Group>

            <Button onClick={imageUpload} variant='primary' type='submit'>
              Upload
            </Button>
          </Form>
        </Col>
      </Row>
    </div>
  );
};

export default Gallery;

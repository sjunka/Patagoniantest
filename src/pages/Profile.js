import React from 'react';
import { Row, Col, Jumbotron, Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { EffectFade, EffectFlip } from 'swiper';
import 'swiper/swiper-bundle.css';

SwiperCore.use([EffectFlip]);

const Profile = () => {
  return (
    <div>
      <Jumbotron>
        <h1>Welcome to my profile!</h1>
        <p>
          This is a simple hero unit, a simple jumbotron-style component for
          calling extra attention to featured content or information.
        </p>
        <p>
          <Button variant='primary'>Learn more</Button>
        </p>
      </Jumbotron>

      <Row>
        <Col xs='12' md='auto'>
          <Card style={{ width: '300px', border: 'none' }}>
            <Card.Img
              className='card-image'
              variant='top'
              src='https://avatars3.githubusercontent.com/u/12448595?s=400&u=5984ae94c5bc13ceb32c11a8331cbf783dec02bd&v=4'
            />
            <Card.Body className='card-body'>
              <Card.Title>Software Developer</Card.Title>
              <Card.Text>
                Hello, I'm a software developer, working much with JS.
              </Card.Text>
              <Button
                variant='success'
                onClick={() =>
                  (window.location.href =
                    'https://wa.me/573155695728?text=Are%20you%20available%20for%20work?')
                }
              >
                <i className='fab fa-whatsapp pr-2'></i>Let's chat
              </Button>
            </Card.Body>
            <Card.Footer className='text-muted' style={{ textAlign: 'center' }}>
              <Row>
                <Col xs={4}>
                  <Link
                    to={{ pathname: 'https://github.com/sjunka' }}
                    target='_blank'
                  >
                    <div>
                      <i className='fab fa-github'></i>
                    </div>
                  </Link>
                </Col>
                <Col xs={4}>
                  <Link
                    to={{ pathname: 'https://www.linkedin.com/in/sjunka/' }}
                    target='_blank'
                  >
                    <div>
                      <i className='fab fa-linkedin'></i>
                    </div>
                  </Link>
                </Col>
                <Col xs={4}>
                  <Link
                    to={{ pathname: 'https://twitter.com/junkitapro' }}
                    target='_blank'
                  >
                    <div>
                      <i className='fab fa-twitter'></i>
                    </div>
                  </Link>
                </Col>
              </Row>
            </Card.Footer>
          </Card>
        </Col>
        <Col xs='12' md='6'>
          <Swiper
            effect='flip'
            slidesPerView={1}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
          >
            <SwiperSlide>Slide 1</SwiperSlide>
            <SwiperSlide>Slide 2</SwiperSlide>
            <SwiperSlide>Slide 3</SwiperSlide>
            <SwiperSlide>Slide 4</SwiperSlide>
          </Swiper>
        </Col>
      </Row>
    </div>
  );
};

export default Profile;

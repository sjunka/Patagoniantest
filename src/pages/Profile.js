import React from 'react';
import { Row, Col, Jumbotron, Button, Card, CardDeck } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { EffectFlip } from 'swiper';
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
        <Col xs='12' md='6'>
          <Card style={{ width: '300px', border: 'none', textAlign: 'center' }}>
            <Card.Img
              className='card-image'
              variant='top'
              src='https://avatars3.githubusercontent.com/u/12448595?s=400&u=5984ae94c5bc13ceb32c11a8331cbf783dec02bd&v=4'
            />
            <Card.Body className='card-body'>
              <Card.Title>Software Developer</Card.Title>
              <Card.Text>
                Hello, I'm a software developer, working with JS.
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
            <SwiperSlide>
              <CardDeck>
                <Card>
                  <Card.Img variant='top' src='holder.js/100px160' />
                  <Card.Body>
                    <Card.Title>Card title</Card.Title>
                    <Card.Text>
                      This is a wider card with supporting text below as a
                      natural lead-in to additional content. This content is a
                      little bit longer.
                    </Card.Text>
                  </Card.Body>
                </Card>
                <Card>
                  <Card.Img variant='top' src='holder.js/100px160' />
                  <Card.Body>
                    <Card.Title>Card title</Card.Title>
                    <Card.Text>
                      This card has supporting text below as a natural lead-in
                      to additional content.{' '}
                    </Card.Text>
                  </Card.Body>
                </Card>
                <Card>
                  <Card.Img variant='top' src='holder.js/100px160' />
                  <Card.Body>
                    <Card.Title>Card title</Card.Title>
                    <Card.Text>
                      This is a wider card with supporting text below as a
                      natural lead-in to additional content. This card has even
                      longer content than the first to show that equal height
                      action.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </CardDeck>
            </SwiperSlide>
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

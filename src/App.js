import React from 'react';
import './App.css';

import { Container } from 'react-bootstrap';
import { BrowserRouter, Route } from 'react-router-dom';

import Navbar from './components/NavBar';
import Footer from './components/Footer';
import Profile from './pages/Profile';
import Gallery from './pages/Gallery';
import Table from './pages/Table';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <main className='py-3'>
        <Container>
          <Route path='/' component={Profile} exact />
          <Route path='/gallery' component={Gallery} />
          <Route path='/table' component={Table} />
        </Container>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;

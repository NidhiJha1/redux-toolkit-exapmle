import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { Layout, Typography, Space } from 'antd';
import Homepage from './components/HomePage';
import Navbar from './components/Navbar';
import Exchanges from './components/Exchanges';
import Cryptocurrencies from './components/Cryptocurrencies';
import CryptoDetails from './components/CryptoDetail';
import News from './components/News';
import { BrowserRouter as Router} from 'react-router-dom';

import './App.css';

const App = () => (
    <Router>
  <div className="app">
    <div className="navbar">
      <Navbar />
    </div>
    <div className="main">
      <Layout>
        <div className="routes">
          <Routes>
            <Route path="/" element={<Homepage/>} />
            <Route path="/exchanges" element={ <Exchanges />} />
            <Route path="/cryptocurrencies" element={<Cryptocurrencies />} />
            <Route path="/crypto/:coinId" element={<CryptoDetails />} />
            <Route path="/news" element={<News />} />
          </Routes>
        </div>
      </Layout>
      <div className="footer">
        <Typography.Title level={5} style={{ color: 'white', textAlign: 'center' }}>Copyright © 2021
          <Link to="/">
            Cryptoverse Inc.
          </Link> <br />
          All Rights Reserved.
        </Typography.Title>
        <Space>
          <Link to="/">Home</Link>
          <Link to="/exchanges">Exchanges</Link>
          <Link to="/news">News</Link>
        </Space>
      </div>
    </div>
  </div>
  </Router>
);

export default App;
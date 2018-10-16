import React, { Component } from 'react';

import { Row, Col } from 'react-materialize';

import './Header.css';

import ripple from './ripple.png';
import litecoin from './litecoin.png';
import bitcoin from './bitcoin.png';
import ethereum from './ethereum.png';
import monero from './monero.png';

class Header extends Component {
  render() {
    return (
      <div className="Header row">
        <h1>Crypto Fee Calculator</h1>
        <Row className="cryptos">
          <Col s={2}>
            <button class="ripple btn btn-floating">
              <img src={ripple} alt="Ripple" />
            </button>
          </Col>
          <Col s={2}>
            <button class="litecoin btn-floating">
              <img src={litecoin} alt="Litecoin" />
            </button>
          </Col>
          <Col s={2}>
            <button class="bitcoin btn-floating">
              <img src={bitcoin} alt="Bitcoin" />
            </button>
          </Col>
          <Col s={2}>
            <button class="ethereum btn-floating">
              <img src={ethereum} alt="Ethereum" />
            </button>
          </Col>
          <Col s={2}>
            <button class="monero btn-floating">
              <img src={monero} alt="Monero" />
            </button>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Header;

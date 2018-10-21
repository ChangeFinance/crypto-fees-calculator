import React, { Component } from 'react';

import { Row, Col } from 'react-materialize';

import CryptoPrice from 'crypto-price';

import CryptoMenu from '../crypto-menu/CryptoMenu';

import exchanges from '../exchanges/exchanges';

import './Home.css';
import './Header.css';

import 'materialize-css/dist/css/materialize.min.css'

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      amount: 0
    };
  }

  renderExchange(exchange) {
    const priceInCrypto = this.state.amount * this.state.selectedCrypto.price;
    const worthInEuro = (priceInCrypto * exchange.fees.buy).toFixed(2).replace(/\.0+$/,'');

    return (
      <Row>
        <Col s={4} key={exchange.name}>
          <span>
            <a
              href={exchange.link}
              target="_blank"
              rel="noopener noreferrer">
                {exchange.name}
            </a>
          </span>
        </Col>
        <Col s={4}>
          <span>{exchange.fees.buy * 100}%</span>
        </Col>
        <Col s={4}>
          <span>{worthInEuro > 0 ? `€${worthInEuro}` : 'Free'}</span>
        </Col>
      </Row>
    );
  }

  render() {
    return (
      <div className="container">
        <div className="Header row">
          <h1>Crypto Fee Calculator</h1>
          <CryptoMenu
            selected={this.state.selectedCrypto}
            onSelectedCrypto={async (crypto) => {
              await CryptoPrice.getCryptoPrice('EUR', crypto.ticker)
                .then((result) => {
                  crypto.price = result.price;

                  this.setState({
                    selectedCrypto : crypto
                  })
                })
                .catch(console.error);
            }}
          />
        </div>

        <Row className="fees">
          <div className="row">
            { this.state.selectedCrypto ?
              <div className="currency input-field col s8 offset-s2">
                <input type="number" className="validate" onChange={event => {
                  this.setState({
                    amount : event.target.value
                  });
                }} />
                <strong>{this.state.selectedCrypto.ticker}</strong>
              </div>
              :
              <p>Please select a cryptocurrency above</p>
            }
          </div>

          { this.state.amount ?
            <div>
              <Row className="blue-table-header">
                <Col s={4}>
                  <span>Buy with</span>
                </Col>
                <Col s={4}>
                  <span>Fees</span>
                </Col>
                <Col s={4}>
                  <span>Worth in Euro</span>
                </Col>
              </Row>

              {exchanges.map(exchange => this.renderExchange(exchange))}
            </div>
            : null}
        </Row>
      </div>
    );
  }
}

export default Home;

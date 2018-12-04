import React from 'react';
import './App.css';

import { LogIn, Order, Checkout } from 'components'

export default class App extends React.Component {
  render() {
    return (
      <div className="App">
        <LogIn />
        <Order />
        <Checkout/>
      </div>
    );
  }
}
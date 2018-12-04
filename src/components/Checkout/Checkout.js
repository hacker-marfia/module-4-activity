import React from 'react';
import { Button, notification } from 'antd'

export default class Checkout extends React.Component {
  render() {
    const price = window.location.pathname.split('/')[2] ? window.location.pathname.split('/')[2] * 4 : 0
    return (
      <div>
        <h2>Total:</h2>
        <h3>${price}</h3>
        <Button type="primary" onClick={this.buy} >Buy!</Button>
      </div>
    );
  }

  buy = () => {
    if (window.location.pathname.split('/')[1] === 'false') {
      notification.error({
        message: 'Oops',
        description: 'Please log in to be able to buy'
      })
    }
    else {
      notification.success({
        message: 'Yay!',
        description: 'You bought some bread'
      })
    }
    console.log('hey')
    console.log(window.location)
  }
}
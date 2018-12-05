import React from 'react';
import { Button, notification } from 'antd'

export default class Checkout extends React.Component {
  render() {
    // We check in the url if the user is logged in and if they selected some bread
    const isAuthenticated = window.location.pathname.split('/')[1] === 'false'
    const selectedBread = window.location.pathname.split('/')[2]

    let price = 0
    if (selectedBread !== undefined ) {
      price = selectedBread * 4
    }
    return (
      <div>
        <h2>Total:</h2>
        <h3>${price}</h3>
        <Button type="primary" onClick={() => {
          if (!isAuthenticated && !selectedBread) {
            notification.error({
              message: 'Oops',
              description: 'Please log in and select bread to be able to buy'
            })
          }
          else {
            notification.success({
              message: 'Yay!',
              description: 'You bought some bread'
            })
          }}}>
            Buy!
          </Button>
      </div>
    );
  }
}
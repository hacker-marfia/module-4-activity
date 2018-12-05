import React from 'react';
import { Button, InputNumber, notification } from 'antd'

export default class Order extends React.Component {

  state = {
    selectedBread: 1
  }

  componentDidMount() {
    // We check in the url if the user has selected some bread
    // If not, the state will be left as default
    const selectedBread = window.location.pathname.split('/')[2]
    if(selectedBread !== undefined) {
      this.setState({ selectedBread: selectedBread })
    }
    else {
      this.setState({ selectedBread: 1 })
    }
  }

  render() {
    // We check in the url if the user is logged in
    const isAuthenticated = window.location.pathname.split('/')[1] === 'true'
    return (
      <div>
        <h2>Select the quantity of bread you want to buy</h2>
        <div className="Form" >
          <InputNumber min={1} max={10} disabled={!isAuthenticated} value={this.state.selectedBread} onChange={(value) => {
            const newBread = value
            this.setState({ selectedBread: newBread })
          }} />
          <Button type="primary" onClick={() => {
            const selectedBread = this.state.selectedBread
            if(!isAuthenticated) {
              notification.error({
                message: 'Oops',
                description: 'Please log in to be able to buy'
              })
            }
            else {
              // Some weird stuff is also happening here.
              // This basically changes the url so you are able to buy the bread
              let path = window.location.pathname.split('/')
              path.splice(2, 1, selectedBread)
              path = path.join('/')
              const newUrl = window.location.origin+path
              window.location.replace(newUrl)
            }
          }} >
            Select
          </Button>
        </div>
      </div>
    );
  }
}
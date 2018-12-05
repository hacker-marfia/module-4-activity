import React from 'react';
import { Input, Button } from 'antd'
import './LogIn.css'

const fakeDB = [
  { username: 'hello', password: 'world' },
  { username: 'username', password: 'password' },
  { username: 'JohnAppleseed', password: 'iLikeTurtles19' },
]

export default class LogIn extends React.Component {

  state = {
    username: '',
    password: '',
  }

  render() {
    return (
      <div>
        <h1>Welcome</h1>
        <h3>Log in to your account</h3>
        <div className="Form" >
          <Input placeholder="Username" onChange={(event) => {
            const text = event.target.value
            this.setState({username: text})
          }} />

          <Input placeholder="Password" type="password" onChange={(event) => {
            const text = event.target.value
            this.setState({password: text})
          }} />

          <Button type="primary" onClick={()=> {
            const username = this.state.username
            const password = this.state.password

            const userObj = { 
              username: username, 
              password: password 
            }

            let comparisons = fakeDB.map(item =>  JSON.stringify(item) === JSON.stringify(userObj))
            comparisons = comparisons.filter(item => item !== false)
            const isAuthenticated = comparisons.length > 0

            // Some weird stuff is happening here.
            // You may not need to understand it.
            // This basically changes the url so you are logged in
            let path = window.location.pathname.split('/')
            path.splice(1, 1, isAuthenticated)
            path = path.join('/')
            const newUrl = window.location.origin+path
            window.location.replace(newUrl)
          }} >
            Log in
          </Button>
        </div>
      </div>
    );
  }
}
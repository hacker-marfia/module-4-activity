import React from 'react';
import { Input, Button, Form } from 'antd'
import './LogIn.css'

const fakeDB = [
  { username: 'hello', password: 'world!' },
  { username: 'username', password: 'password' },
  { username: 'JohnAppleseed', password: 'iLikeTurtles19' },
]

class LogIn extends React.Component {
  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div>
        <h1>Welcome</h1>
        <h3>Log in to your account</h3>
        <Form onSubmit={this.handleSubmit} className="Form" >
          <Form.Item>
            {getFieldDecorator('username', { 
              rules: [{ required: true, message: 'Please write your username', whitespace: true }]
            })(
              <Input placeholder="Username" />
            )}
          </Form.Item>
          <Form.Item>
            {getFieldDecorator('password', { 
              rules: [{ required: true, message: 'Please write your password', whitespace: true }]
            })(
              <Input placeholder="Password" />
            )}
          </Form.Item>
          <Button type="primary" htmlType="submit"  >Log in</Button>
        </Form>
      </div>
    );
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.form.validateFields((error, values) => {
      if (!error) {
        const isAuthenticated = Boolean(fakeDB.map(item =>  JSON.stringify(item) === JSON.stringify(values)).filter(item => item).length)
        let path = window.location.pathname.split('/')
        path.splice(1, 1, isAuthenticated)
        path = path.join('/')
        const newUrl = window.location.origin+path
        window.location.replace(newUrl)
      }
    });
  }
}

export default Form.create()(LogIn)
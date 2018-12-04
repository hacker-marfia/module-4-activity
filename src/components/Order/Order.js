import React from 'react';
import { Button, Form, InputNumber, notification } from 'antd'

class Order extends React.Component {
  render() {
    const { getFieldDecorator } = this.props.form;
    const disabled = window.location.pathname.split('/')[1] === 'false'
    const selectedBread = window.location.pathname.split('/')[2] ? window.location.pathname.split('/')[2] : 1
    return (
      <div>
        <h2>Select the quantity of bread you want to buy</h2>
        <Form onSubmit={this.handleSubmit} className="Form" >
          <Form.Item>
            {getFieldDecorator('bread', { 
              rules: [{ required: true, message: 'Please select some bread' }],
              initialValue: selectedBread,
            })(
              <InputNumber min={1} max={10} disabled={disabled} />
            )}
          </Form.Item>
          <Button type="primary" htmlType="submit">Select</Button>
        </Form>
      </div>
    );
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.form.validateFields((error, values) => {
      if (!error) {
        if (window.location.pathname.split('/')[1] === 'false') {
          notification.error({
            message: 'Oops',
            description: 'Please log in to be able to buy'
          })
        }
        else {
          let path = window.location.pathname.split('/')
          path.splice(2, 1, values.bread)
          path = path.join('/')
          const newUrl = window.location.origin+path
          window.location.replace(newUrl)
        }
      }
    });
  }
}

export default Form.create()(Order)
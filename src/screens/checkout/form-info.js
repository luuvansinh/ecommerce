import React, { Component } from 'react'
import { Alert } from 'react-native'
import { List, InputItem, Button } from 'antd-mobile-rn'
import { createForm } from 'rc-form'

export class FormInfo extends Component {
  onSubmit = () => {
    this.props.form.validateFields({ force: true }, (error) => {
      if (!error) {
        // TODO: submit form
        console.log(this.props.form.getFieldsValue())
      } else {
        Alert.alert('Thông báo',error[Object.keys(error)[0]].errors[0].message)
      }
    })
  }

  render() {
    const { getFieldProps } = this.props.form
    return (
      <List
        renderHeader={() => 'Thông tin người nhận'}
      >
        <InputItem
          {...getFieldProps('name', {
            rules: [
              { required: true, message: 'Vui lòng điền họ tên!' }
            ],
          })}
          placeholder=""
        >
          Họ tên *
        </InputItem>
        <InputItem
          {...getFieldProps('address', {
            rules: [
              { required: true, message: 'Vui lòng nhập địa chỉ!' }
            ],
          })}
          placeholder=""
        >
          Địa chỉ *
        </InputItem>
        <InputItem
          {...getFieldProps('phone', {
            rules: [
              { required: true, message: 'Vui lòng nhập sđt!' }
            ],
          })}
          placeholder=""
        >
          SĐT *
        </InputItem>
        <InputItem
          {...getFieldProps('note', {
            rules: [],
          })}
          placeholder=""
        >
          Ghi chú
        </InputItem>
        <List.Item>
          <Button type="primary" onClick={this.onSubmit}>Xác nhận</Button>
        </List.Item>
      </List>
    )
  }
}

export default createForm()(FormInfo)

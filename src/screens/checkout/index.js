import React, { Component } from 'react'
import { createForm } from 'rc-form'
import { List, InputItem, Button } from 'antd-mobile-rn'
import { Text, View, ScrollView, FlatList, Alert } from 'react-native'
import { connect } from 'react-redux'
import { CartItem } from '../../components'
import { format, helper } from '../../utils';


class CheckoutView extends Component {
  static navigationOptions = {
    title: 'Kiểm tra'
  }

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
    const { form: { getFieldProps }, cart } = this.props
    return (
      <ScrollView>
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
            Họ tên
          </InputItem>
          <InputItem
            {...getFieldProps('address', {
              rules: [
                { required: true, message: 'Vui lòng nhập địa chỉ!' }
              ],
            })}
            placeholder=""
          >
            Địa chỉ
          </InputItem>
          <InputItem
            {...getFieldProps('phone', {
              rules: [
                { required: true, message: 'Vui lòng nhập sđt!' }
              ],
            })}
            placeholder=""
          >
            SĐT
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
            <Text style={{ fontSize: 16, color: 'black', marginBottom: 10 }}>Thông tin đơn hàng</Text>
            <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
              <Text>{cart.length} Sản phẩm</Text>
              <Text>{format.number(helper.calculateTotal(cart))} đ</Text>
            </View>
          </List.Item>
          <List.Item>
            <FlatList
              data={cart}
              renderItem={({ item }) => (
                <CartItem
                  key={item.id}
                  product={item}
                  onChangeQuantity={this.handleChangeQuantity}
                  onRemoveItem={this.handleRemoveItem}
                  editable={false}
                />
              )}
              keyExtractor={item => item.id.toString()}
            />
          </List.Item>
          <List.Item>
            <Button type="primary" onClick={this.onSubmit}>Xác nhận</Button>
          </List.Item>
        </List>
      </ScrollView>
    )
  }
}

mapStateToProps = state => ({
  cart: state.cart,
})

export default connect(mapStateToProps)(createForm()(CheckoutView))

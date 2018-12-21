import React, { Component } from 'react'
import { List, Button } from 'antd-mobile-rn'
import { Text, View, ScrollView, FlatList } from 'react-native'
import { Formik } from 'formik'
import * as Yup from 'yup'
import { CartItem, Input } from '../../components'
import { format, helper } from '../../utils'

class                                                                                                                                                          FormInfo extends Component {
  handleSubmit = (values) => {
    this.props.dispatch({
      type: 'CREATE_ORDER',
      navigation: this.props.navigation,
      payload: {
        ...values,
        full_name: values.name,
        payment_method_id: 1,
        delivery_time: '2018-12-30',
      }
    })
  }

  render() {
    const { cart, user } = this.props
    // if (!user) {
    //   return null
    // }
    return (
      <ScrollView>
        <Formik
          initialValues={{
            name: user ? user.fullname : '',
            address: user ? user.address : '',
            phone: user ? user.phone : '',
          }}
          onSubmit={this.handleSubmit}
          validationSchema={Yup.object().shape({
            name: Yup.string().required('Tên không được trống'),
            address: Yup.string().required('Địa chỉ không được trống'),
            phone: Yup.string().required('SĐT không được trống'),
          })}
          render={({ values, setFieldValue, errors, handleSubmit }) => {
            return (
              <List
                renderHeader={() => 'Thông tin người nhận'}
              >
                <Input
                  label="Họ tên"
                  value={values.name}
                  onChange={setFieldValue}
                  name="name"
                  error={errors.name}
                />
                <Input
                  label="Địa chỉ"
                  value={values.address}
                  onChange={setFieldValue}
                  name="address"
                  error={errors.address}
                />
                <Input
                  label="SĐT"
                  value={values.phone}
                  onChange={setFieldValue}
                  name="phone"
                  error={errors.phone}
                />
                <Input
                  label="Ghi chú"
                  onChange={setFieldValue}
                  name="note"
                />
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
                  <Button type="primary" onClick={handleSubmit}>Xác nhận</Button>
                </List.Item>
              </List>
            )
          }}
        />
      </ScrollView>
    )
  }
}

export default FormInfo

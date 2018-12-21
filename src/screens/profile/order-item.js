import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { Card, WingBlank, WhiteSpace } from 'antd-mobile-rn'
import { format } from '../../utils'
import ProductItem from './product-item'

const { Header, Body, Footer } = Card

export class OrderItem extends Component {
  render() {
    const { order } = this.props
    return (
      <React.Fragment>
        <WhiteSpace size="lg" />
        <WingBlank>
          <Card>
            <Header
              title={`Đơn hàng: #${order.code}`}
              extra={<Text style={{ textAlign: 'right', fontSize: 12 }}>{format.date(order.created_at)}</Text>}
            />
            <Body>
              <View>
                {
                  order.order_details.map(product => (
                    <ProductItem key={product.id} product={product} />
                  ))
                }
              </View>
            </Body>
            <Footer
              extra={`Tổng cộng: ${format.number(order.total_money)} đ`}
            />
          </Card>
        </WingBlank>
      </React.Fragment>
    )
  }
}

export default OrderItem

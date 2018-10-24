import React from 'react'
import { Text, View, FlatList, ScrollView, StyleSheet } from 'react-native'
import { Header, Button } from 'react-native-elements'
import { SafeAreaView } from 'react-navigation'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { connect } from 'react-redux'
import { ComponentConst } from '../../configs'
import { CartItem, IconLoading } from '../../components'
import { format } from '../../utils'

class CartView extends React.Component {
  componentDidMount() {
    this.props.dispatch({
      type: 'FETCH_CART'
    })
  }

  handleChangeQuantity = (productId, value) => {
    this.props.dispatch({
      type: 'CHANGE_QUANTITY',
      productId,
      value,
    })
  }

  handleRemoveItem = (productId) => {
    this.props.dispatch({
      type: 'REMOVE_ITEM',
      productId,
    })
  }

  render() {
    const { cart } = this.props
    if (!cart.length) {
      return <IconLoading />
    }
    const total = cart.length ? cart.map(item => item.quantity * item.price)
      .reduce((previous, current) => previous + current) : 0

    return (
      <SafeAreaView forceInset={{ horizontal: 'always', top: 'always' }}>
        <Header
          leftComponent={(
            <View>
              <Text style={ComponentConst.header}>Giỏ hàng của tôi {!!cart.length && `(${cart.length})`}</Text>
            </View>
          )}
        />
        <ScrollView style={style.cartList}>
          <FlatList
            data={cart}
            renderItem={({ item }) => (
              <CartItem
                key={item.id}
                product={item}
                onChangeQuantity={this.handleChangeQuantity}
                onRemoveItem={this.handleRemoveItem}
              />
            )}
            keyExtractor={item => item.id.toString()}
          />
          <View>
            <Text style={style.textRight}>Tổng cộng: {format.number(total)} đ</Text>
          </View>
          <Button
            title="Thanh toán"
          />
        </ScrollView>
      </SafeAreaView>
    )
  }
}

const style = StyleSheet.create({
  cartList: {
    marginBottom: 80,
  },
  textRight: {
    textAlign: 'right',
    fontSize: 20,
    padding: 12,
    color: '#ff2e63',
    fontStyle: 'italic',
  }
})

CartView.navigationOptions = {
  tabBarLabel: 'Giỏ hàng',
  tabBarIcon: ({ tintColor, horizontal }) => (
    <Ionicons
      name="ios-cart"
      size={horizontal ? 20 : 26}
      style={{ color: tintColor }}
    />
  ),
}

mapStateToProps = state => ({
  cart: state.cart,
})

export default connect(mapStateToProps)(CartView)

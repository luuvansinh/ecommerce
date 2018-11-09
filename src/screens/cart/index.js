import React from 'react'
import { Text, View, FlatList, ScrollView, StyleSheet } from 'react-native'
import { Header, Button } from 'react-native-elements'
import { SafeAreaView } from 'react-navigation'
import { connect } from 'react-redux'
import { CartItem, IconLoading, HeaderBar, CartBadge } from '../../components'
import { format } from '../../utils'

class CartView extends React.Component {
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
      return <Text>Giỏ hàng của bạn đang trống</Text>
    }
    const total = cart.length ? cart.map(item => item.quantity * item.price)
      .reduce((previous, current) => previous + current) : 0

    return (
      <SafeAreaView forceInset={{ horizontal: 'always', top: 'always' }}>
        <Header
          backgroundColor="white"
          outerContainerStyles={{ height: 60 }}
        >
          <HeaderBar
            title={`Giỏ hàng của tôi (${cart.length})`}
            hasCart={false}
          />
        </Header>
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
            borderRadius={20}
            backgroundColor="#e01a2e"
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
  tabBarIcon: () => (
    <CartBadge />
  ),
}

mapStateToProps = state => ({
  cart: state.cart,
})

export default connect(mapStateToProps)(CartView)

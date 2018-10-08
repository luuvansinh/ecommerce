import React from 'react'
import { Text, View } from 'react-native'
import { Button, Header } from 'react-native-elements'
import { SafeAreaView } from 'react-navigation'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { ComponentConst } from '../../configs'

class CartView extends React.Component {
  render() {
    return (
      <SafeAreaView forceInset={{ horizontal: 'always', top: 'always' }}>
        <Header
          leftComponent={<View><Text style={ComponentConst.header}>Giỏ hàng của tôi</Text></View>}
        />
        <Button
          title="Go to People"
          onPress={() => this.props.navigation.navigate('People')}
        />
      </SafeAreaView>
    )
  }
}

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

export default CartView

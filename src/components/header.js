import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import CartBadge from './cart-badge'

class HeaderBar extends Component {
  render() {
    const { title, navigation, hasCart = true } = this.props
    return (
      <View style={style.container}>
        <Text style={style.title}>{title}</Text>
        {
          hasCart && <CartBadge navigation={navigation} />
        }
      </View>
    )
  }
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  title: {
    flexGrow: 1,
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black'
  },
})

export default HeaderBar

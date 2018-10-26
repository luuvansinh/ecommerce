import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableHighlight } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'
import IconBadge from 'react-native-icon-badge'
import { connect } from 'react-redux'

class CartBadge extends Component {
  render() {
    const { navigation, cartLength } = this.props
    return (
      <View style={styles.container}>
        {
          navigation ? <TouchableHighlight
            onPress={() => {
              navigation.navigate('Cart')
            }}
          >
            <IconBadge
              MainElement={
                <Ionicons style={styles.icon} name="ios-cart" size={30} />
              }
              BadgeElement={
                <Text style={{color:'#FFFFFF'}}>{cartLength || 0}</Text>
              }
            />
          </TouchableHighlight> :
          <IconBadge
          MainElement={
            <Ionicons style={styles.icon} name="ios-cart" size={30} />
          }
          BadgeElement={
            <Text style={{color:'#FFFFFF'}}>{cartLength || 0}</Text>
          }
        />
        }
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    marginRight: 10,
  }
})
const mapStateToProps = state => ({
  cartLength: state.cart.length
})

export default connect(mapStateToProps)(CartBadge)

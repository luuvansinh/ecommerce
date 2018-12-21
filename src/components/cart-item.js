import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, TouchableHighlight } from 'react-native'
import { Avatar } from 'react-native-elements'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { format } from '../utils'
import { ApiConst, ImageConst } from '../configs';

class CartItem extends Component {
  render() {
    const { product, onChangeQuantity, onRemoveItem, editable = true } = this.props
    const image = (product.images && product.images.length) ? product.images[0] : ImageConst.defaultImage
    return (
      <View style={style.listViewItem}>
        <Avatar
          source={{ uri: image }}
          large
        />
        <View style={style.centerItem}>
          <View>
            <Text style={style.title}>{product.name}</Text>
            <Text style={style.content}>{format.number(product.price)} đ/kg</Text>
          </View>
        </View>
        {
          editable &&
          <View style={style.rightItem}>
          <TouchableOpacity
            onPress={() => {
              onRemoveItem(product.id)
            }}
            style={{ marginBottom: 10 }}
          >
            <Ionicons
              name="ios-trash"
              size={25}
            />
          </TouchableOpacity>
          <View style={style.cartEdit}>
            <TouchableHighlight
              style={style.editButtonLeft}
              onPress={() => {
                onChangeQuantity(product.id, -1)
              }}
              disabled={product.quantity<2}
            >
              <Text style={style.textCenter}>-</Text>
            </TouchableHighlight>
            <Text style={[style.quantityItem, style.textCenter]}>{product.quantity}</Text>
            <TouchableHighlight
              style={style.editButtonRight}
              onPress={() => {
                onChangeQuantity(product.id, +1)
              }}
            >
              <Text style={style.textCenter}>+</Text>
            </TouchableHighlight>
          </View>
        </View>
        }
      </View>
    )
  }
}

const style = StyleSheet.create({
  listViewItem: {
    borderColor: '#252a34',
    borderWidth: 0.5,
    borderRadius: 3,
    display: 'flex',
    flexDirection: 'row',
    margin: 6,
  },
  centerItem: {
    display: 'flex',
    paddingLeft: 8,
    justifyContent: 'center',
    flexGrow: 1,
  },
  rightItem: {
    width: 100,
    alignItems: 'center',
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#252a34'
  },
  content: {
    fontSize: 16,
    marginBottom: 5,
  },
  cartEdit: {
    flexDirection: 'row',
    borderWidth: 0.5,
    borderColor: 'black',
    height: 20,
    borderRadius: 5,
  },
  editButtonLeft: {
    width: 30,
    borderRightWidth: 0.5,
  },
  textCenter: {
    textAlign: 'center',
  },
  editButtonRight: {
    width: 30,
    borderLeftWidth: 0.5,
  },
  quantityItem: {
    width: 30,
  }
})

export default CartItem

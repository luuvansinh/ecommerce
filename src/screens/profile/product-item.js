import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableHighlight } from 'react-native'
import { Avatar } from 'react-native-elements'
import { ImageConst } from '../../configs'
import { format } from '../../utils'

class ProductItem extends Component {
  onPressItem = () => {
    const { onPressItem, product } = this.props
    onPressItem(product.id)
  }

  render() {
    const { product } = this.props
    const image = (product.product.images && product.product.images.length) ? product.product.images[0] : ImageConst.defaultImage
    console.log({ product })
    return (
      <TouchableHighlight onPress={this.onPressItem}>
        <View style={style.listViewItem}>
          <Avatar
            source={{ uri: image }}
            large
          />
          <View style={style.centerItem}>
            <View>
              <Text style={style.title}>{product.product.name}</Text>
              <Text style={style.content}>{format.number(product.price)} đ/kg</Text>
            </View>
          </View>
          <View style={style.rightItem}>
            <Text>Số lượng: {product.quantity} kg</Text>
          </View>
        </View>
      </TouchableHighlight>
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
    justifyContent: 'center',
  },
  title: {
    fontSize: 16,
    color: '#252a34',
    fontWeight: 'bold'
  },
  content: {
    fontSize: 16,
    marginBottom: 5,
  }
})

export default ProductItem

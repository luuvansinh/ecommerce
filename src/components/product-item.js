import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableHighlight } from 'react-native'
import { Avatar, Button, Rating } from 'react-native-elements'
import { format } from '../utils'
import { ImageConst } from '../configs'

class ProductItem extends Component {
  onPressItem = () => {
    const { onPressItem, product } = this.props
    onPressItem(product.id)
  }

  handleAddToCart = () => {
    const { product, dispatch } = this.props
    dispatch({
      type: 'ADD_TO_CART',
      product
    })
  }
  render() {
    const { product } = this.props
    const image = (product.images && product.images.length) ? product.images[0] : ImageConst.defaultImage
    return (
      <TouchableHighlight onPress={this.onPressItem}>
        <View style={style.listViewItem}>
          <Avatar
            source={{ uri: image }}
            large
          />
          <View style={style.centerItem}>
            <View>
              <Text style={style.title}>{product.name}</Text>
              <Text style={style.content}>{format.number(product.price)} đ/kg</Text>
              <Rating
                imageSize={10}
                startingValue={product.avg_ratings}
                readonly
              />
            </View>
          </View>
          <View style={style.rightItem}>
            <Button
              backgroundColor="#e01a2e"
              borderRadius={10}
              icon={{name: 'cart-plus', type: 'font-awesome'}}
              onPress={this.handleAddToCart}
            />
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

import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Avatar } from 'react-native-elements'

class ProductOrder extends Component {
 
  render() {
    const { product } = this.props
    console.log('order', product)
    return (
      <View style={{display: "flex", flexDirection: "row", marginTop: 5}}>
        <View>
          <Avatar
            source={{ uri: product.avatar_url }}
            large
          />
        </View>
        <View>
          <Text style={{fontWeight: "bold"}}> {product.name} </Text>
          <Text> Cung cấp bởi: {product.provider} </Text>
          <Text> {product.total} vnđ</Text>
        </View>
      </View>
    );
  }
}

export default ProductOrder;

import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Avatar, Rating } from 'react-native-elements'
import { green } from 'ansi-colors';

class ProductOrder extends Component {
 
  render() {
    const { product } = this.props
    console.log('order', product)
    return (
      <View style={{display: "flex", flexDirection: "row", marginTop: 10}}>
        <View>
          <Avatar
            source={{ uri: product.avatar_url }}
            large
          />
        </View>
        <View style={{marginLeft: 10}}>
          <Text style={{fontWeight: "bold"}}> {product.name} </Text>
          <View style= {{ flexDirection: "row"}}>
            <Text> Cung cấp bởi:  </Text>
            <Text style={{color: "green"}}>{product.provider}</Text>
          </View>
          <Text style= {{color: "red"}}> {product.total} vnđ</Text>
          <Text  style={{textDecorationLine: 'line-through'}}> 90000 vnđ</Text>
          <Rating
                imageSize={10}
                startingValue={product.rating}
                readonly
              />
        </View>
      </View>
    );
  }
}

export default ProductOrder;

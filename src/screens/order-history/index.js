import React, { Component } from 'react';
import { View, Text, ScrollView, FlatList } from 'react-native';
import {ProductOrder} from '../../components';


class OrderHistory extends Component {
  static navigationOptions = {
    title: 'Sản phẩm đã mua',
  }
  
  render() {
    const products = [
      {
        id: 1,
        name: 'Amy Farha',
        avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
        subtitle: 'Vice President',
        provider: 'rausach.com',
        total: 100000,
        rate: 4,
        comment: 10
      },
      {
        id: 2,
        name: 'Chris Jackson',
        avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
        subtitle: 'Vice President',
        provider: 'rausach.com',
        total: 100000,
        rate: 4,
        comment: 10
      },
    ]
    return (
      <View>
          <View style={{height: 50, backgroundColor: "green"}}>
            <Text>Tất cả sản phẩm</Text>
          </View>

          <ScrollView >
            <FlatList
              data={products}
              renderItem={({ item }) => (
                <ProductOrder
                  key={item.id}
                  product={item}
                />
              )}
              keyExtractor={item => item.id.toString()}
            />
          </ScrollView>
      </View>      
    );
  }
}

export default OrderHistory;
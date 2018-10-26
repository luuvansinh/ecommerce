import React, { Component } from 'react';
import { connect } from 'react-redux'
import { View, Text, ScrollView, FlatList } from 'react-native';
import {ProductOrder} from '../../components';


class OrderHistory extends Component {
  componentDidMount() {
    this.props.dispatch({
      type: 'FETCH_PRODUCTS_ORDER'
    })
  }
  static navigationOptions = {
    title: 'Sản phẩm đã mua',
  }
  
  render() {
    const { products } = this.props
    return (
      <View>
          <View style={{height: 50, backgroundColor: "green"}}>
            <Text style= {{marginTop: 10, marginLeft: 5, fontSize: 20, fontWeight: "bold"}}>Tất cả sản phẩm</Text>
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
const mapStateToProps = state => ({
  products: state.order_products
})

export default connect(mapStateToProps)(OrderHistory)
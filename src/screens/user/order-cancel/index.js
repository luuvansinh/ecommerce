import React, { Component } from 'react';
import { View, Text, ScrollView, FlatList } from 'react-native';
import { connect } from 'react-redux'
import {OrderDoneCart} from '../../../components'
import { red } from 'ansi-colors';

class OrderCancel extends Component {
  componentDidMount() {
    this.props.dispatch({
      type: 'FETCH_ORDERS_CANCEL'
    })
  }
  static navigationOptions = {
    title: 'Đơn hàng đã hủy',
  }
  
  render() {
    // const {orders} = this.props
    const orders =[
      
    ]
    
    return (
      <View>
        <View style={{height: 50, backgroundColor: "green"}}>
          <Text style= {{marginTop: 10, marginLeft: 5, fontSize: 20, fontWeight: "bold"}}>Tất cả đơn hàng</Text>
        </View>
        {  
          orders.length == 0 && <Text style={{marginTop: 10, marginLeft: 10, color: red, fontWeight: "bold"}}>Hiện bạn chưa có đơn hàng nào!</Text>
        }
        <ScrollView >
            <FlatList
              data={orders}
              renderItem={({ item }) => (
                <OrderDoneCart
                  key={item.id}
                  order={item}
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
  orders : state.orders_cancel
})

export default connect(mapStateToProps)(OrderCancel);

import React, { Component } from 'react';
import { View, Text, ScrollView, FlatList } from 'react-native';
import { connect } from 'react-redux'
import {OrderDoneCart} from '../../components'

class OrderDone extends Component {

  componentDidMount() {
    this.props.dispatch({
      type: 'FETCH_PRODUCTS_DONE'
    })
  }
  static navigationOptions = {
    title: 'Đơn hàng đã giao',
  }
  
  render() {
    // const {orders} = this.props
    const orders =[
      {
        id: 1,
        name: "lê viết học book",
        code: 'ASDF',
        dateOrder: '09:00, 05/06/2017',
        status: 'done'
      },
      {
        id: 2,
        name: "lê viết học book",
        code: 'FDSA',
        dateOrder: '09:00, 05/07/2017',
        status: 'done'
      },
      {
        id: 3,
        name: "lê viết học book",
        code: 'ASDF',
        dateOrder: '09:00, 05/06/2017',
        status: 'done'
      },
      {
        id: 4,
        name: "lê viết học book",
        code: 'FDSA',
        dateOrder: '09:00, 05/07/2017',
        status: 'done'
      },
      {
        id: 5,
        name: "lê viết học book",
        code: 'ASDF',
        dateOrder: '09:00, 05/06/2017',
        status: 'done'
      },
      {
        id: 6,
        name: "lê viết học book",
        code: 'FDSA',
        dateOrder: '09:00, 05/07/2017',
        status: 'done'
      },
      {
        id: 7,
        name: "lê viết học book",
        code: 'ASDF',
        dateOrder: '09:00, 05/06/2017',
        status: 'done'
      },
      {
        id: 8,
        name: "lê viết học book",
        code: 'FDSA',
        dateOrder: '09:00, 05/07/2017',
        status: 'done'
      },
    ]
    return (
      <View>
         <View style={{height: 50, backgroundColor: "green"}}>
            <Text style= {{marginTop: 10, marginLeft: 5, fontSize: 20, fontWeight: "bold"}}>Tất cả đơn hàng</Text>
          </View>
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
  orders : state.products_done
})

export default connect(mapStateToProps)(OrderDone);

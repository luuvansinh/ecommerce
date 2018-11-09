import React, { Component } from "react";
import { View, Text } from "react-native";

class OrderDoneCart extends Component {
  render() {
    const { order } = this.props;
    return (
      <View
        style={{
          display: "flex",
          marginTop: 10,
          marginLeft: 10,
          borderBottomWidth: 1
        }}
      >
        <Text style={{ fontWeight: "bold", fontSize: 18 }}>{order.name}</Text>
        <Text>Mã đơn hàng: {order.code}</Text>
        <Text>Ngày đặt hàng: {order.dateOrder}</Text>
        <Text>Trạng thái: {order.status}</Text>
      </View>
    );
  }
}

export default OrderDoneCart;

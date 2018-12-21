import React from 'react'
import { View, TouchableHighlight, FlatList } from 'react-native'
import { SafeAreaView } from 'react-navigation'
import { Text, Avatar, Icon, Button } from 'react-native-elements'
import style from "./style"
import { IconLoading } from '../../components'
import { ImageConst } from '../../configs'
import OrderItem from './order-item'


class InfoView extends React.Component {
  componentDidMount() {
    this.props.dispatch({
      type: 'FETCH_ORDERS',
    })
  }
  render() {
    const { user, dispatch, orders: { orders } } = this.props
    if (!user) {
      return <IconLoading />
    }
    return (
      <SafeAreaView forceInset={{ horizontal: 'always', top: 'always' }}>
        <View style={style.profileView}>
          <Avatar
            xlarge
            rounded
            source={{uri: ImageConst.defaultAvatar }}
            onPress={() => console.log("Works!")}
            activeOpacity={0.7}
          />
          <View style={style.profileName}>
            <View style={style.row}>
              <Icon 
                name= 'account-box'
                size= {20}
                color= 'green' />
                <Text style={{fontSize: 25, color: "red", marginLeft: 5}}>{user.fullname}</Text>
            </View>
            <View style={style.row}>
              <Icon 
                name= 'phone'
                size= {15}
                color= 'green'
              />
              <Text style={style.profilePhone}>{user.phone}</Text>
            </View>
            <View style={style.row}>
              <Icon 
                name= 'mail'
                size= {15}
                color= 'green'
              />
              <Text style={style.profilePhone}>{user.email}</Text>
            </View>
            <View style={style.row}>
              <Icon 
                name='map'
                size={15}
                color='green'
              />
              <Text style={style.profilePhone}>{user.address}</Text>
            </View>
          </View>
          <View style={style.EditProfile}>
            <Icon 
              name= 'edit'
              size= {27}
              color= 'green' />
          </View>
        </View>
        <View  style={style.statisticUser}>
          <View style={style.statisticUserStase}>
          <TouchableHighlight
            onPress={() => {
              console.log("press order")
              this.props.navigation.navigate('OrderHistory')
            }}
          >
            <Text style={style.statisticText}>Đơn hàng</Text>
          </TouchableHighlight>
          <Text>{user.order}</Text>
        </View>
          <View style={style.statisticUserStaseMid}>
            <Text style={style.statisticText}>Sản Phẩm</Text>
            <Text>{user.product}</Text>
          </View>
          <View style={style.statisticUserStase}>
            <Text style={style.statisticText}>Tổng số tiền</Text>
            <Text>{user.total} vnđ</Text>
          </View>
        </View>
        <View style={style.ActionUser}>
          <View style={style.Action}>
            <Icon
              marginLeft= {2}
              name="receipt"
            />
            <Text style={style.ActionText}>Đơn hàng của tôi ({orders.length})</Text>
          </View>
        </View>
        <FlatList
          data={orders}
          renderItem={({ item }) => (
            <OrderItem order={item} />
          )}
          keyExtractor={item => item.id.toString()}
        />
        <View style={style.Logout}>
          <Button
            raised
            icon={{name: 'cached'}}
            title='Đăng xuất'
            onPress={() => dispatch({ type: 'LOGOUT' })}
          />
        </View>
      </SafeAreaView>
    )
  }
}

export default InfoView

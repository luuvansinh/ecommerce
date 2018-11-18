import React from 'react'
import { View, ScrollView, TouchableHighlight } from 'react-native'
import { SafeAreaView } from 'react-navigation'
import { Text, Avatar, Icon, Button } from 'react-native-elements'
import style from "./style"
import { IconLoading } from '../../components'
import { ImageConst } from '../../configs'


class InfoView extends React.Component {
  render() {
    const { user } = this.props
    if (!user) {
      return <IconLoading />
    }
    return (
      <SafeAreaView forceInset={{ horizontal: 'always', top: 'always' }}>
        <ScrollView>
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
                  <Text style={{fontSize: 25, color: "red", marginLeft: 5}}>{user.name}</Text>
              </View>
              <View style={style.row}>
                <Icon 
                  name= 'phone'
                  size= {15}
                  color= 'green'
                />
                <Text style={style.profilePhone}>{user.phone}</Text>
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
              <Text style={style.ActionText}>Quản lý đặt hàng</Text>
            </View>
            <View style={style.ActionDetail}>
              <View style={style.ActionChild}>
                <Text style={style.ActionChildText}>Đơn hàng đang vận chuyển</Text>
              </View>
              <View style={style.ActionChild}>
                <Text style={style.ActionChildText}>Đơn hàng thành công</Text>
              </View>
              <View style={style.ActionChild}>
                <Text style={style.ActionChildText}>Đơn hàng đã hủy</Text>
              </View>
            </View>
            <View style={style.Action}>
              <Icon
                marginLeft= {2}
                name="location-on"
              />
              <Text style={style.ActionText}>Sổ địa chỉ</Text>
            </View>
            <View style={style.Action}>
              <Icon
                marginLeft= {2}
                name="comment"
              />
              <Text style={style.ActionText}>Nhận xét của tôi</Text>
            </View>
          </View>
          <View style={style.Logout}>
            <Button
              raised
              icon={{name: 'cached'}}
              title='Đăng xuất' />
          </View>
        </ScrollView>
      </SafeAreaView>
    )
  }
}

export default InfoView

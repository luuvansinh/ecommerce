import React from 'react'
import { View, Image } from 'react-native'
import { SafeAreaView } from 'react-navigation'
import { Header, Text, Avatar, Icon } from 'react-native-elements'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { ComponentConst } from '../../configs'
import style from "./style"


class ProfileView extends React.Component {
  // constructor(props) {
  //   this.state = {
  //     imgWidth: 0,
  //     imgHeight: 0,
  //   }
  // }

  // componentDidMount() {
  //   Image.getSize("https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg", (innerWidth, height) => {
  //     const screenWidth = Dimensions.get('window').width
  //     const scaleFactor = width / screenWidth
  //     const imageHeight = height / scaleFactor
  //     this.setState({imgWidth: screenWidth, imgHeight: imageHeight})
  //   })
  // }
  render() {
    // const { imgHeight, imgWidth } = this.state
    return (
      <SafeAreaView forceInset={{ horizontal: 'always', top: 'always' }}>
        <Header
          leftComponent={<View><Text style={ComponentConst.header}>Tài khoản của tôi</Text></View>}
        />
        <View style={style.profileView}>
          <Avatar
            xlarge
            rounded
            source={{uri: "https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg"}}
            onPress={() => console.log("Works!")}
            activeOpacity={0.7}
          />
          <View style={style.profileName}>
            <View style={style.row}>
              <Icon 
                name= 'account-box'
                size= {20}
                color= 'green' />
                <Text style={{fontSize: 25, color: "red", marginLeft: 5}}>Lê Viết Học</Text>
            </View>
            <View style={style.row}>
              <Icon 
                name= 'phone'
                size= {15}
                color= 'green'
              />
              <Text style={style.profilePhone}>0388534943</Text>
            </View>
          </View>
        </View>
        
        <View  style={style.statisticUser}>
          <View style={style.statisticUserStase}>
            <Text style={{fontSize: 17, color: "black"}}>Đơn hàng</Text>
            <Text>2</Text>
          </View>
          <View style={style.statisticUserStaseMid}>
            <Text style={{fontSize: 17, color: "black"}}>Sản Phẩm</Text>
            <Text>3</Text>
          </View>
          <View style={style.statisticUserStase}>
            <Text style={{fontSize: 17, color: "black"}}>Tổng số tiền</Text>
            <Text>100,000 vnđ</Text>
          </View>
        </View>

        <View style={{ marginTop: 5, justifyContent: "center"}}>
          <View style={{flexDirection: "row", marginTop: 5, height: 50, backgroundColor: "white"}}>
            <Icon
              name="receipt"
            />
            <Text>Quản lý đơn hàng</Text>
          </View>
          <View style={{flexDirection: "row", marginTop: 5, height: 50, backgroundColor: "white"}}>
            <Icon
              name="location-on"
            />
            <Text>Sổ địa chỉ</Text>
          </View>
          <View style={{flexDirection: "row", marginTop: 5, height: 50, backgroundColor: "white"}}>
            <Icon
              name="comment"
            />
            <Text>Nhận xét của tối</Text>
          </View>
        </View>
      </SafeAreaView>
    )
  }
}
ProfileView.navigationOptions = {
  tabBarLabel: 'Tài khoản',
  tabBarIcon: ({ tintColor, horizontal }) => (
    <Ionicons
      name="ios-person"
      size={horizontal ? 20 : 26}
      style={{ color: tintColor }}
    />
  ),
}

export default ProfileView

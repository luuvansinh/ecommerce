import React from 'react'
import { View, Image } from 'react-native'
import { SafeAreaView } from 'react-navigation'
import { Header, Text } from 'react-native-elements'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { ComponentConst } from '../../configs'
import { HeaderBar } from '../../components'


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
          backgroundColor="white"
          outerContainerStyles={{ height: 60 }}
        >
          <HeaderBar
            title="Tài khoản của tôi"
            hasCart={false}
          />
        </Header>
        <Image
          source={{ uri: "https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg" }}
          resizeMode="cover"
          style={{ width: 500, height: 200 }}
        />
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

import React from 'react'
import { ScrollView } from 'react-native'
import { SafeAreaView } from 'react-navigation'
import { Header } from 'react-native-elements'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { connect } from 'react-redux'
import { List, Button } from 'antd-mobile-rn'
import { HeaderBar } from '../../components'
import InfoView from './info'

class ProfileView extends React.Component {
  render() {
    const { navigation, app: { user, isLoggedIn }, dispatch, orders } = this.props
    return (
      <SafeAreaView forceInset={{ horizontal: 'always', top: 'always' }}>
        <Header
          backgroundColor="white"
          outerContainerStyles={{ height: 60 }}
        >
          <HeaderBar
            title="Tài khoản"
            navigation={navigation}
          />
        </Header>
        <ScrollView>
        {
          isLoggedIn ? (
            <InfoView
              dispatch={dispatch}
              user={user}
              orders={orders}
            />
          )
          :
          <List>
            <List.Item>
              <Button
                type="primary"
                onClick={() => navigation.navigate('Login')}
              >Đăng nhập</Button>
            </List.Item>
            <List.Item>
              <Button
                type="primary"
                onClick={() => navigation.navigate('SignUp')}
              >Đăng ký</Button>
            </List.Item>
          </List>
        }
        </ScrollView>
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

const mapStateToProps = ({ user, app, orders }) => ({
  user,
  app,
  orders,
})


export default connect(mapStateToProps)(ProfileView)
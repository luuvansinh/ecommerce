import React from 'react'
import { SafeAreaView } from 'react-navigation'
import { Header } from 'react-native-elements'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { connect } from 'react-redux'
import { HeaderBar } from '../../components'
import InfoView from './info'
import { List, Button } from 'antd-mobile-rn';

class ProfileView extends React.Component {
  componentDidMount() {
    this.props.dispatch({
      type: 'FETCH_USER'
    })
  }

  render() {
    const { navigation, app: { user, isLoggedIn } } = this.props
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
        {
          isLoggedIn ? <InfoView user={user} />
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

const mapStateToProps = ({ user, app }) => ({
  user,
  app,
})


export default connect(mapStateToProps)(ProfileView)
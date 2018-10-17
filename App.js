import React from 'react'
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation'
import ProfileView from './src/screens/profile'
import HomeView from './src/screens/home'
import CartView from './src/screens/cart'

const BottomTabs = createBottomTabNavigator(
  {
    Home: {
      screen: HomeView,
      path: '',
    },
    Cart: {
      screen: CartView,
      path: 'cart',
    },
    People: {
      screen: ProfileView,
      path: 'profile',
    },
  },
  {
    tabBarOptions: {
      activeTintColor: '#e91e63',
    },
  }
)

class DefaultScreen extends React.Component {
  static router = BottomTabs.router
  static navigationOptions = {
    title: 'Home',
    headerStyle: {
      display: 'none',
    },
  }
  render() {
    return (
      <BottomTabs navigation={this.props.navigation} />
    )
  }
}

const RootStack = createStackNavigator(
  {
    Home: DefaultScreen,
  },
  {
    initialRouteName: 'Home',
  }
)

export default class App extends React.Component {
  render() {
    return <RootStack />
  }
}
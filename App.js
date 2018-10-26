import React from 'react'
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation'
import ProfileView from './src/screens/user/profile'
import HomeView from './src/screens/home'
import CartView from './src/screens/cart'
import ProductView from './src/screens/product'
import OrderHistory from './src/screens/user/order-history'
import OrderDone from './src/screens/user/order-done'
import OrderCancel from './src/screens/user/order-cancel'
import OrderDelivery from './src/screens/user/order-delivery'

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
    Profile: {
      screen: ProfileView,
      path: 'profile',
    },
  },
  {
    tabBarOptions: {
      activeTintColor: '#ff2e63',
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
    Product: ProductView,
    OrderHistory,
    OrderDone,
    OrderCancel,
    OrderDelivery
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

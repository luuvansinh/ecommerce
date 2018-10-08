import React from 'react'
import { Text } from 'react-native'
import { SearchBar, Button } from 'react-native-elements'
import { SafeAreaView } from 'react-navigation'
import Ionicons from 'react-native-vector-icons/Ionicons'

class HomeView extends React.Component {
  render() {
    return (
      <SafeAreaView forceInset={{ horizontal: 'always', top: 'always' }}>
        <SearchBar
          lightTheme
          round
          onChangeText={() => {}}
          onClearText={() => {
            console.log('clear')
          }}
          placeholder='Tìm kiếm...'
        />
        <Button
          title="Go to People"
          onPress={() => this.props.navigation.navigate('People')}
        />
      </SafeAreaView>
    )
  }
}

HomeView.navigationOptions = {
  headerTitle: <Text>My header</Text>,
  tabBarLabel: 'Trang chủ',
  tabBarIcon: ({ tintColor, horizontal }) => (
    <Ionicons
      name="ios-home"
      size={horizontal ? 20 : 26}
      style={{ color: tintColor }}
    />
  ),
}

export default HomeView

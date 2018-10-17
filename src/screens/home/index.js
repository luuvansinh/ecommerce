import React from 'react'
import { Text, ScrollView, StyleSheet } from 'react-native'
import { SearchBar, List, ListItem } from 'react-native-elements'
import { SafeAreaView } from 'react-navigation'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { connect } from 'react-redux'

import { fetchProducts } from '../../actions'

class HomeView extends React.Component {
  componentDidMount() {
    this.props.onFetchProducts()
  }
  render() {
    const { products } = this.props
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
        <ScrollView style={style.scrollView}>
          <List containerStyle={{marginBottom: 20}}>
            {
              products.map((l) => (
                <ListItem
                  avatar={{uri:l.avatar_url}}
                  key={l.name}
                  title={l.name}
                />
              ))
            }
          </List>
        </ScrollView>
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

const style = StyleSheet.create({
  scrollView: {
    marginBottom: 35,
  }
})

const mapStateToProps = state => ({
  products: state.productReducers
})

const mapDispatchToProps = dispatch => ({
  onFetchProducts: () => {
    dispatch(fetchProducts())
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(HomeView)

import React from 'react'
import { Text, StyleSheet, FlatList, ScrollView } from 'react-native'
import { SearchBar } from 'react-native-elements'
import { SafeAreaView } from 'react-navigation'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { connect } from 'react-redux'

import { ProductItem, IconLoading } from '../../components'
import PromotionList from './promotion'
import CategoryGrid from './category'

class HomeView extends React.Component {
  componentDidMount() {
    const { dispatch } = this.props
    dispatch({ type: 'FETCH_PRODUCTS' })
    dispatch({ type: 'FETCH_PROMOTIONS' })
    dispatch({ type: 'FETCH_CATEGORIES' })
    dispatch({ type: 'FETCH_CART' })
  }

  handlePressItemProduct = (productId) => {
    this.props.navigation.navigate('Product', { productId })
  }

  render() {
    const { products, promotions, categories, dispatch, navigation } = this.props
    if (!products.length && !promotions.length && !categories.length) {
      return <IconLoading />
    }
    return (
      <SafeAreaView forceInset={{ horizontal: 'always', top: 'always' }}>
        <SearchBar
          lightTheme
          round
          onChangeText={() => {}}
          onClearText={() => {
            console.log('clear')
          }}
          onSubmitEditing={() => {
            alert('Submited')
          }}
          placeholder='Tìm kiếm...'
        />
        {/* <OfflineNotice /> */}
        <ScrollView>
          <PromotionList promotions={promotions} navigation={navigation} />
          <CategoryGrid categories={categories} navigation={navigation} />
          <FlatList
            style={style.listView}
            data={products}
            renderItem={({ item }) => (
              <ProductItem
                key={item.id}
                onPressItem={this.handlePressItemProduct}
                product={item}
                dispatch={dispatch}
              />
            )}
            keyExtractor={item => item.id.toString()}
          />
        </ScrollView>
      </SafeAreaView>
    )
  }
}

HomeView.navigationOptions = {
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
  listView: {
    marginBottom: 60,
    backgroundColor: 'white',
  }
})

const mapStateToProps = state => ({
  products: state.products,
  promotions: state.promotions,
  categories: state.categories,
})

export default connect(mapStateToProps)(HomeView)

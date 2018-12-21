import React, { Fragment } from 'react'
import { StyleSheet, FlatList } from 'react-native'
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
    this.fetchData()
    dispatch({ type: 'INIT' })
    dispatch({ type: 'FETCH_CART' })
  }

  onRefresh = () => {
    this.fetchData()
  }

  fetchData = () => {
    const { dispatch } = this.props
    dispatch({ type: 'FETCH_PRODUCTS' })
    dispatch({ type: 'FETCH_PROMOTIONS' })
    dispatch({ type: 'FETCH_CATEGORIES' })
  }

  handlePressItemProduct = (productId) => {
    this.props.navigation.navigate('Product', { productId })
  }

  render() {
    const { products: { products }, promotions, categories, dispatch, navigation } = this.props
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
        <FlatList
          style={style.listView}
          ListHeaderComponent={(
            <Fragment>
              <PromotionList promotions={promotions} navigation={navigation} />
              <CategoryGrid categories={categories} navigation={navigation} />
            </Fragment>
          )}
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
          // onEndReached={() => dispatch({ type: 'FETCH_PRODUCTS' })}
          // onEndReachedThreshold={0.5}
          // refreshControl={
          //   <RefreshControl
          //     refreshing={refreshing}
          //     onRefresh={this.onRefresh}
          //   />
          // }
        />
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
  app: state.app,
})

export default connect(mapStateToProps)(HomeView)

import React, { Component } from 'react'
import { View, FlatList } from 'react-native'
import { connect } from 'react-redux'
import { ProductItem, HeaderBar } from '../../components';

export class CategoryView extends Component {
  static navigationOptions = ({ navigation }) => {
    const { state } = navigation
    return {
      title: state.params.title,
      headerTitle: (
        <HeaderBar
          title={state.params.name}
          navigation={navigation}
        />
      )
    }
  }
  componentDidMount = () => {
    const { dispatch, navigation } = this.props
    dispatch({
      type: 'FETCH_CATEGORY',
      categoryId: navigation.getParam('categoryId')
    })
  }

  handlePressItemProduct = (productId) => {
    this.props.navigation.navigate('Product', { productId })
  }
  
  render() {
    const { products, dispatch } = this.props
    return (
      <View>
        <FlatList
          style={{ backgroundColor: 'white' }}
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
      </View>
    )
  }
}

const mapStateToProps = state => ({
  products: state.category
})

export default connect(mapStateToProps)(CategoryView)

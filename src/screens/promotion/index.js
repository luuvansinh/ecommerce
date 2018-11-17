import React, { Component } from 'react'
import { View, FlatList } from 'react-native'
import { connect } from 'react-redux'
import { ProductItem, HeaderBar } from '../../components';

export class PromotionView extends Component {
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
      type: 'FETCH_PROMOTION',
      promotionId: navigation.getParam('promotionId')
    })
  }

  handlePressItemProduct = (productId) => {
    this.props.navigation.navigate('Product', { productId })
  }
  
  render() {
    const { promotion, dispatch } = this.props
    if (!promotion) {
      return null
    }
    return (
      <FlatList
        style={{ backgroundColor: 'white' }}
        data={promotion.products}
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
    )
  }
}

const mapStateToProps = state => ({
  promotion: state.promotion
})

export default connect(mapStateToProps)(PromotionView)

import React, { Component } from 'react'
import { Text, StyleSheet, ScrollView, Dimensions, ImageBackground, View } from 'react-native'
import Swiper from 'react-native-swiper'
import { connect } from 'react-redux'
import { Card, Rating, Button } from 'react-native-elements'
import { IconLoading, Comment, HeaderBar } from '../../components'
import CommentDialog from './comment-dialog';
import styles from './style'

class ProductDetail extends Component {
  static navigationOptions = ({ navigation }) => {
    const { state } = navigation
    return {
      title: state.params.title,
      headerTitle: (
        <HeaderBar
          title={state.params.title}
          navigation={navigation}
        />
      )
    }
  }

  constructor(props) {
    super(props)
    this.state = {
      visibleDialog: false,
    }
  }

  componentDidMount() {
    const { dispatch, navigation } = this.props
    dispatch({
      type: 'FETCH_PRODUCT_DETAIL',
      productId: navigation.getParam('productId')
    })
  }

  componentWillUnmount() {
    this.props.dispatch({
      type: 'CLEAR_PRODUCT'
    })
  }

  componentDidUpdate() {
    const { navigation, product } = this.props
    if (!navigation.getParam('title')) {
      navigation.setParams({ title: product.name })
    }
  }
  
  hideDialog = () => {
    this.setState({ visibleDialog: false })
  }

  render() {
    const { product, dispatch } = this.props
    const { visibleDialog } = this.state
    if (!product) {
      return <IconLoading />
    }
    console.log('product', product)
    return (
      <ScrollView>
        <Swiper
          style={styles.wrapper}
          containerStyle={{width: Dimensions.get("window").width, height: 200}}
          autoplay
        >
          {
            product.images.map((item, index) => (
              <ImageBackground key={index} source={{ uri: item }} style={styles.slide} />
            ))
          }
        </Swiper>
        <View style={styles.container}>
          <Card containerStyle={[styles.cardMargin, styles.marginBottom]}>
            <Text style={styles.text}>{product.price} đ/kg</Text>
            <Text style={styles.productName}>{product.name}</Text>
            <View>
              <Rating
                style={styles.rating}
                imageSize={10}
                startingValue={product.ratings.avg}
                fractions={1}
                readonly
              />
              <Button
                title="Thêm vào giỏ hàng"
                borderRadius={20}
                backgroundColor="#e01a2e"
                containerViewStyle={{ marginTop: 10 }}
                onPress={() => {
                  dispatch({
                    type: 'ADD_TO_CART',
                    product
                  })
                }}
              />
            </View>
          </Card>
          <Card containerStyle={[styles.cardMargin, styles.marginBottom]}>
            <Text>Nguồn gốc sản phẩm: {product.origin}</Text>
            <Text>Cửa hàng: {product.shop.name}</Text>
          </Card>
          <Card
            containerStyle={[styles.cardMargin, styles.marginBottom]}
            title="Đánh giá"
          >
            {
              product.comments.length ? <Comment comments={product.comments}/> :
                <Text style={styles.aligncenter} >Hiện chưa có đánh giá nào cho sản phẩm</Text>
            }
          </Card>
          <Card
            containerStyle={[styles.cardMargin, styles.marginBottom]}
            title="Bình luận"
          >
            {
              product.comments.length ? <Comment comments={product.comments}/> :
                <Text style={styles.aligncenter} >Hiện chưa có bình luận nào cho sản phẩm</Text>
            }
            <Button
              title="Viết bình luận"
              borderRadius={20}
              backgroundColor="green"
              containerViewStyle={{ marginTop: 10 }}
              onPress={() => {
                this.setState({ visibleDialog: true })
              }}
            />
          </Card>
          <CommentDialog visible={visibleDialog} hideDialog={this.hideDialog} />
        </View>
      </ScrollView>
    )
  }
}

mapStateToProps = state => ({
  product: state.product,
})

export default connect(mapStateToProps)(ProductDetail)

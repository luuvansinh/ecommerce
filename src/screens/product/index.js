import React, { Component } from 'react'
import { Text, StyleSheet, ScrollView, Dimensions, ImageBackground, View } from 'react-native'
import Swiper from 'react-native-swiper'
import { connect } from 'react-redux'
import { Card, Rating } from 'react-native-elements'
import { IconLoading, Comment } from '../../components'

class ProductDetail extends Component {
  static navigationOptions = ({ navigation }) => {
    const { state } = navigation
    return {
      title: state.params.title,
    }
  }

  componentDidMount() {
    const { dispatch, navigation } = this.props
    dispatch({
      type: 'FETCH_PRODUCT_DETAIL',
      productId: navigation.getParam('productId', 1)
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

  render() {
    const { product } = this.props
    if (!product) {
      return <IconLoading />
    }
    return (
      <ScrollView>
        <Swiper
          style={styles.wrapper}
          containerStyle={{width: Dimensions.get("window").width, height: 200}}
          showsButtons
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
            <Rating
              style={styles.rating}
              imageSize={10}
              startingValue={product.rating}
              fractions={1}
              readonly
            />
          </Card>
          <Card containerStyle={[styles.cardMargin, styles.marginBottom]}>
            <Text>Nguồn gốc sản phẩm: {product.origin}</Text>
          </Card>
          <Card
            containerStyle={[styles.cardMargin, styles.marginBottom]}
            title="Đánh giá & nhận xét"
          >
            <Comment comments={product.comments}/>
          </Card>
        </View>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  slide: {
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: '#e8ebef',
    padding: 0,
    margin: 0,
  },
  text: {
    fontSize: 30,
    color: 'red',
    fontStyle: 'italic',
  },
  productName: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'black',
  },
  cardMargin: {
    margin: 0,
  },
  marginBottom: {
    marginBottom: 10,
  },
  rating: {
    marginTop: 10,
  }
})

mapStateToProps = state => ({
  product: state.product,
})

export default connect(mapStateToProps)(ProductDetail)

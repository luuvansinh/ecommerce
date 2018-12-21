import React, { Component } from 'react'
import { Text, ScrollView, Dimensions, ImageBackground, View, StyleSheet, TextInput } from 'react-native'
import Swiper from 'react-native-swiper'
import { connect } from 'react-redux'
import { Card, Rating, Button } from 'react-native-elements'
import { Modal } from 'antd-mobile-rn'
import { IconLoading, Comment, HeaderBar, Ratings } from '../../components'
import styles from './style'
import { format } from '../../utils'

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
      content: '',
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

  onSubmit = () => {
    const { content } = this.state
    const { dispatch, product } = this.props
    dispatch({
      type: 'COMMENT',
      payload: {
        content,
        product_id: product.id,
      },
    })
  }
  
  toggle = () => {
    const { visibleDialog } = this.state
    this.setState({ visibleDialog: !visibleDialog })
  }

  render() {
    const { product, dispatch } = this.props
    const { visibleDialog } = this.state
    if (!product) {
      return <IconLoading />
    }
    const { content } = this.state
    const footerButtons = [
      { text: 'Cancel', onPress: () => this.setState({ visibleDialog: false }) },
      { text: 'Ok', onPress: () => this.onSubmit() },
    ];
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
            <Text style={styles.text}>{format.number(product.price)} đ/kg</Text>
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
            <Text>Cửa hàng: {product.shop && product.shop.name}</Text>
          </Card>
          <Card
            containerStyle={[styles.cardMargin, styles.marginBottom]}
            title="Đánh giá"
          >
            {
              product.ratings.list.length ? <Ratings ratings={product.ratings.list}/> :
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
              onPress={() => this.setState({ visibleDialog: true })}
            />
          </Card>
          <Modal
            title="Thêm bình luận"
            transparent
            onClose={() => this.setState({ visibleDialog: false })}
            maskClosable
            visible={visibleDialog}
            closable
            footer={footerButtons}
          >
            <View style={style.textAreaContainer}>
              <TextInput
                style={style.textArea}
                multiline={true}
                numberOfLines={4}
                value={content}
                onChangeText={content => this.setState({ content })}
              />
            </View>
          </Modal>
        </View>
      </ScrollView>
    )
  }
}

mapStateToProps = state => ({
  product: state.product,
})

const style = StyleSheet.create({
  textAreaContainer: {
    borderColor: 'red',
    backgroundColor: '#FFFFFF',
    borderRadius:30,
    borderBottomWidth: 1,
    width:250,
    height:45,
    marginBottom:15,
    flexDirection: 'row',
    alignItems:'center'
  },
  textArea: {
    height:45,
    marginLeft:16,
    borderBottomColor: '#FFFFFF',
    flex:1,
  },
  closeBtn: {
    marginTop: 10,
  }
})


export default connect(mapStateToProps)(ProductDetail)

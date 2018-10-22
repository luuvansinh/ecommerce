import React, { Component } from 'react'
import { View, Text, StyleSheet, ScrollView, Dimensions } from 'react-native'
import Swiper from 'react-native-swiper'

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB',
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#97CAE5',
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#92BBD9',
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  }
})

class ProductDetail extends Component {
  static navigationOptions = {
    title: 'Product',
  }

  render() {
    return (
      <ScrollView>
        <Swiper
          style={styles.wrapper}
          // removeClippedSubviews={false}
          containerStyle={{width: Dimensions.get("window").width, height: 200}} 
          autoplay
        >
          <View style={styles.slide1}>
            <Text style={styles.text}>Swiper</Text>
          </View>
          <View style={styles.slide2}>
            <Text style={styles.text}>Beautiful</Text>
          </View>
          <View style={styles.slide3}>
            <Text style={styles.text}>And simple</Text>
          </View>
        </Swiper>
        <Text>kjbdkjsnv</Text>
      </ScrollView>
    )
  }
}

export default ProductDetail

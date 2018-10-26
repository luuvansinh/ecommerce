import React, { Component } from 'react'
import { Tile } from 'react-native-elements'
import Swiper from 'react-native-swiper'
import { StyleSheet, Dimensions, ImageBackground, Text } from 'react-native'

class PromotionList extends Component {
  render() {
    const { promotions } = this.props
    return (
      <Swiper
        style={styles.wrapper}
        containerStyle={{width: Dimensions.get("window").width, height: 200}}
        key={promotions.length}
        autoplay
      >
        {
          promotions.map(item => (
            <ImageBackground key={item.id} source={{ uri: item.image }} style={styles.slide}>
              <Text style={styles.text}>{item.name}</Text>
            </ImageBackground>
          ))
        }
      </Swiper>
    )
  }
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
  }
})

export default PromotionList

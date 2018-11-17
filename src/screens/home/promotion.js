import React, { Component } from 'react'
import Swiper from 'react-native-swiper'
import { StyleSheet, Dimensions, ImageBackground, Text, TouchableOpacity } from 'react-native'
import { ApiConst } from '../../configs';

class PromotionList extends Component {
  render() {
    const { promotions, navigation } = this.props
    return (
      <Swiper
        style={styles.wrapper}
        containerStyle={{width: Dimensions.get("window").width, height: 200}}
        key={promotions.length}
        autoplay
      >
        {
          promotions.map(item => (
            <ImageBackground key={item.id} source={{ uri: item.image ? ApiConst.host + item.image : '' }} style={styles.slide}>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('Promotion', { promotionId: item.id, name: item.name })
                }}
              >
              <Text style={styles.text}>{item.name}</Text>
              </TouchableOpacity>
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

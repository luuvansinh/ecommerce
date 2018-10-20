import React, { Component } from 'react'
import Carousel from 'react-native-snap-carousel'
import { Tile } from 'react-native-elements'

class PromotionList extends Component {
  renderItem = ({ item }) => (
    <Tile
      imageSrc={{ uri: item.image }}
      onPress={() => alert('Item pressed')}
      featured
      title={item.name}
    />
  )

  render() {
    const { promotions } = this.props
    return (
      <Carousel
        layout={'stack'}
        ref={(c) => { this._carousel = c }}
        data={promotions}
        renderItem={this.renderItem}
        hasParallaxImages={true}
        sliderWidth={360}
        itemWidth={300}
      />
    )
  }
}

export default PromotionList

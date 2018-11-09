import React, { Component } from 'react'
import { Text, StyleSheet, TouchableHighlight, ImageBackground, View } from 'react-native'
import GridView from 'react-native-super-grid'

class CategoryGrid extends Component {
  render() {
    const { categories, navigation } = this.props
    return (
      <GridView
        itemDimension={130}
        items={categories}
        style={styles.gridView}
        renderItem={item => (
          <TouchableHighlight onPress={() => navigation.navigate('SignUp')}>
            <ImageBackground
              source={{ uri: 'https://picsum.photos/300/200/?image=222' }}
              style={styles.itemContainer}
            >
              <Text style={styles.itemName}>{item.name}</Text>
            </ImageBackground>
          </TouchableHighlight>
        )}
      />
    )
  }
}

const styles = StyleSheet.create({
  gridView: {
    paddingTop: 25,
    flex: 1,
  },
  itemContainer: {
    justifyContent: 'flex-end',
    borderRadius: 5,
    // padding: 10,
    height: 100,
    width: '100%'
  },
  itemName: {
    fontSize: 16,
    color: '#fff',
    fontWeight: '600',
  },
  itemCode: {
    fontWeight: '600',
    fontSize: 12,
    color: '#fff',
  },
});

export default CategoryGrid

import React, { Component } from 'react'
import { Text, StyleSheet, TouchableHighlight, ImageBackground } from 'react-native'
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
          <TouchableHighlight onPress={() => navigation.navigate('Category', { categoryId: item.id, name: item.name })}>
            <ImageBackground
              source={{ uri: item.image }}
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
    backgroundColor: '#dce0e8'
  },
  itemContainer: {
    justifyContent: 'flex-end',
    borderRadius: 5,
    height: 100,
    width: '100%'
  },
  itemName: {
    fontSize: 16,
    color: 'black',
    fontWeight: '600',
  },
  itemCode: {
    fontWeight: '600',
    fontSize: 12,
    color: '#fff',
  },
});

export default CategoryGrid

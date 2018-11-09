import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList
} from 'react-native'

export default class Comments extends Component {
  render() {
    const { comments } = this.props
    return (
      <FlatList
        style={styles.root}
        data={comments}
        ItemSeparatorComponent={() => {
          return (
            <View style={styles.separator}/>
          )
        }}
        keyExtractor={(item)=>{
          return item.id.toString()
        }}
        renderItem={({ item }) => {
          return(
            <View style={styles.container}>
              <Image style={styles.image} source={{uri: item.author.avatar}}/>
              <View style={styles.content}>
                <View style={styles.contentHeader}>
                  <Text  style={styles.name}>{item.author.name}</Text>
                  <Text style={styles.time}>
                    {item.createdAt}
                  </Text>
                </View>
                <Text rkType='primary3 mediumLine'>{item.content}</Text>
              </View>
            </View>
          )
        }}
      />
    )
  }
}

const styles = StyleSheet.create({
  root: {
    backgroundColor: "#ffffff",
    marginTop:10,
  },
  container: {
    paddingLeft: 19,
    paddingRight: 16,
    paddingVertical: 12,
    flexDirection: 'row',
    alignItems: 'flex-start'
  },
  content: {
    marginLeft: 16,
    flex: 1,
  },
  contentHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 6
  },
  separator: {
    height: 1,
    backgroundColor: "#CCCCCC"
  },
  image:{
    width:45,
    height:45,
    borderRadius:20,
    marginLeft:0,
  },
  time:{
    fontSize:11,
    color:"#808080",
  },
  name:{
    fontSize:16,
    fontWeight:"bold",
  },
})

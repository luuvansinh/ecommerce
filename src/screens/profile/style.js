import { StyleSheet } from 'react-native'

// define style for profile screen
const style = StyleSheet.create({
  // util style
  row: {
    flexDirection: "row",
  },
  // style profile
  profileView: {
    display: "flex",
    backgroundColor: "white",
    flexDirection: "row",
    paddingBottom: 5,
    borderBottomWidth: 1,
    borderBottomColor: "gray",
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  profileName: {
    display: "flex",
    justifyContent: "center",
    marginLeft: 20,
  },
  profilePhone: {
    marginLeft: 10,
  },
  // style statistic of user profile
  statisticUser: {
    flexDirection: "row",
    marginTop: 5,
  },
  statisticUserStase: {
    width: "33%",
    alignItems: "center",
  },
  statisticUserStaseMid: {
    width: "33%", 
    alignItems: "center",
    borderLeftWidth: 1,
    borderRightWidth: 1,
  }
})

export default style

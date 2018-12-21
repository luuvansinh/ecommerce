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
  },
  statisticText: {
    fontSize: 17,
    color: "black"
  },

  // style Action of user
  ActionUser: {
    marginLeft: 5,
    marginRight: 5,
    marginTop: 5,
    justifyContent: "center",
  },
  Action: {
    flexDirection: "row", 
    marginTop: 5, 
    height: 50, 
    backgroundColor: "white",
  },
  ActionText: {
    marginLeft: 5,
    marginTop: 13,
    fontSize: 18,
    color: "black"
  },
  ActionDetail:{
    marginLeft:10
  },
  ActionChild: {
    marginTop: 2,
    height: 45, 
    backgroundColor: "white"
  },
  ActionChildText: {
    marginTop: 10,
    marginLeft: 10, 
    fontSize: 16,
    color: "black"
  },
  // style edit profile buuton
  EditProfile: {
    marginLeft:30, 
    marginTop:10, 
    width: 30, 
    height: 30, 
    backgroundColor: "#9ACEB4"
  },

  // style logout
  Logout: {
    marginTop: 10,
    marginBottom: 80,
  },
  listView: {
    marginBottom: 60,
    backgroundColor: 'white',
  }
})

export default style

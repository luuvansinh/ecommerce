import React, { Component } from 'react'
import { ScrollView } from 'react-native'
import { connect } from 'react-redux'
import FormInfo from './form-info'

class CheckoutView extends Component {
  static navigationOptions = {
    title: 'Kiểm tra'
  }

  render() {
    const { cart, app: { user }, dispatch, navigation } = this.props
    // if (!user) {
    //   return null
    // }
    return (
      <ScrollView>
        <FormInfo
          user={user}
          cart={cart}
          dispatch={dispatch}
          navigation={navigation}
        />
      </ScrollView>
    )
  }
}

const mapStateToProps = ({ cart, app }) => ({ cart, app })

export default connect(mapStateToProps)(CheckoutView)

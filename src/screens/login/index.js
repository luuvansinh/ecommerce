import React, { Component } from 'react'
import { Text, View, TextInput, TouchableOpacity, Image } from 'react-native'
import { connect } from 'react-redux'
import styles from './style'

class LoginView extends Component {
  static navigationOptions = {
    title: 'Đăng nhập',
  }
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: '',
    }
  }

  login = () => {
    const { email, password } = this.state
    const { navigation, dispatch } = this.props
    dispatch({
      type: 'LOGIN',
      navigation,
      payload: {
        email,
        password,
      }
    })
  }

  render() {
    const { email, password } = this.state
    const { navigation } = this.props
    return (
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <Image style={[styles.icon, styles.inputIcon]} source={{uri: 'https://png.icons8.com/password/androidL/40/3498db'}}/>
          <TextInput style={styles.inputs}
            placeholder="email"
            keyboardType="email-address"
            underlineColorAndroid='transparent'
            onChangeText={(text) => this.setState({ email: text })}
            value={email}
          />
        </View>
        <View style={styles.inputContainer}>
          <Image style={[styles.icon, styles.inputIcon]} source={{uri: 'https://png.icons8.com/envelope/androidL/40/3498db'}}/>
          <TextInput style={styles.inputs}
            placeholder="Password"
            secureTextEntry={true}
            underlineColorAndroid='transparent'
            onChangeText={(text) => this.setState({ password: text })}
            value={password}
          />
        </View>
        
        <TouchableOpacity
          style={[styles.buttonContainer, styles.loginButton]}
          onPress={this.login}
        >
          <Text style={styles.loginText}>Đăng nhập</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.buttonContainer, styles.registerButton]}
          onPress={() => navigation.navigate('SignUp') }
        >
          <Text style={styles.loginText}>Đăng ký tài khoản mới</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

export default connect()(LoginView)
 
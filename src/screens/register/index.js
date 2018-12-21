import React, { Component } from 'react'
import { Text, View, TextInput, TouchableHighlight, Image, Alert } from 'react-native'
import { connect } from 'react-redux'
import { Radio } from 'antd-mobile-rn'
import styles from './style'

const { RadioItem } = Radio

class SignUpView extends Component {
  static navigationOptions = {
    title: 'Đăng ký',
  }

  constructor(props) {
    super(props);
    this.state = {
      username: 'abc',
      fullname: '',
      email   : '',
      password: '',
      address: '',
      phone: '',
      gender: 1,
    }
  }

  register = () => {
    const { dispatch, navigation } = this.props
    dispatch({
      type: 'REGISTER',
      payload: this.state,
      navigation,
    })
  }

  render() {
    const { fullname, email, password, address, phone, gender } = this.state
    const { navigation } = this.props
    return (
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <Image style={styles.inputIcon} source={{uri: 'https://png.icons8.com/male-user/ultraviolet/50/3498db'}}/>
          <TextInput style={styles.inputs}
              placeholder="Full name"
              underlineColorAndroid='transparent'
              value={fullname}
              onChangeText={(fullname) => this.setState({fullname})}/>
        </View>

        <View style={styles.inputContainer}>
          <Image style={styles.inputIcon} source={{uri: 'https://png.icons8.com/message/ultraviolet/50/3498db'}}/>
          <TextInput style={styles.inputs}
              placeholder="Email"
              keyboardType="email-address"
              value={email}
              underlineColorAndroid='transparent'
              onChangeText={(email) => this.setState({email})}/>
        </View>
        
        <View style={styles.inputContainer}>
          <Image style={styles.inputIcon} source={{uri: 'https://png.icons8.com/key-2/ultraviolet/50/3498db'}}/>
          <TextInput style={styles.inputs}
              placeholder="Password"
              secureTextEntry={true}
              value={password}
              underlineColorAndroid='transparent'
              onChangeText={(password) => this.setState({password})}/>
        </View>

        <View style={styles.inputContainer}>
          <Image style={styles.inputIcon} source={{uri: 'https://png.icons8.com/male-user/ultraviolet/50/3498db'}}/>
          <TextInput style={styles.inputs}
              placeholder="Phone"
              keyboardType="phone-pad"
              value={phone}
              underlineColorAndroid='transparent'
              onChangeText={(phone) => this.setState({phone})}/>
        </View>

        <View style={styles.inputContainer}>
          <Image style={styles.inputIcon} source={{uri: 'https://png.icons8.com/male-user/ultraviolet/50/3498db'}}/>
          <TextInput style={styles.inputs}
              placeholder="Address"
              // keyboardType="email-address"
              underlineColorAndroid='transparent'
              value={address}
              onChangeText={(address) => this.setState({address})}/>
        </View>
        {/* <View>
          <RadioItem>Nam</RadioItem>
          <RadioItem>Nữ</RadioItem>
        </View> */}

        <TouchableHighlight style={[styles.buttonContainer, styles.signupButton]} onPress={this.register}>
          <Text style={styles.signUpText}>Đăng ký</Text>
        </TouchableHighlight>
        <TouchableHighlight style={[styles.buttonContainer, styles.signupButton]} onPress={() => navigation.navigate('Login') }>
          <Text style={styles.signUpText}>Đăng nhập</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

export default connect()(SignUpView)

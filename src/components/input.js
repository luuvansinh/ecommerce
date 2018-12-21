import React, { PureComponent } from 'react'
import { StyleSheet, View } from 'react-native'
import { FormInput, FormValidationMessage, FormLabel } from 'react-native-elements'

class Input extends PureComponent {
  handleChange = (value) => {
    const { onChange, name } = this.props
    onChange(name, value)
  }

  render() {
    const { label, error, placeholder, ...rest } = this.props
    return (
      <View style={styles.root}>
        <FormLabel>{label}</FormLabel>
        <FormInput onChangeText={this.handleChange} placeholder={placeholder} {...rest} inputStyle={styles.input} />
        <FormValidationMessage>{error}</FormValidationMessage>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  root: {
    // width: '90%',
    // alignSelf: 'center',
    // padding: 16,
  },
  input: {
    paddingRight: 20,
    borderBottomColor: 'grey',
    borderBottomWidth: 1,
  }
})

export default Input

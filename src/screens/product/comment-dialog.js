import React, { Component } from 'react'
import { View, Text, StyleSheet, TextInput } from 'react-native'
import { Dialog } from 'react-native-simple-dialogs'
import { Button } from 'react-native-elements'

class CommentDialog extends Component {
  constructor(props) {
    super(props)
    this.state = {
      text: ''
    }
  }
  comment = () => {
    const { onSubmit, product } = this.props
    onSubmit({
      content: this.state.text,
      product_id: product.id,
    })
  }
  render() {
    const { visible, hideDialog } = this.props
    const { text } = this.state
    return (
      <Dialog 
        visible={visible} 
        title="Viết bình luận"
        onTouchOutside={() => hideDialog()}>
        <View style={style.textAreaContainer}>
          <TextInput
            style={style.textArea}
            multiline = {true}
            numberOfLines = {4}
            value={text}
            onChangeText={(text) => {
              this.setState({ text })
            }}
          />
        </View>
        <Button
          title="Bình luận"
          backgroundColor="green"
          onPress={this.comment}
        />
        <Button
          containerViewStyle={style.closeBtn}
          title="Huỷ"
          onPress={() => {
            hideDialog()
          }}
        />
      </Dialog>
    )
  }
}

const style = StyleSheet.create({
  textAreaContainer: {
    borderColor: 'red',
    backgroundColor: '#FFFFFF',
    borderRadius:30,
    borderBottomWidth: 1,
    width:250,
    height:45,
    marginBottom:15,
    flexDirection: 'row',
    alignItems:'center'
  },
  textArea: {
    height:45,
    marginLeft:16,
    borderBottomColor: '#FFFFFF',
    flex:1,
  },
  closeBtn: {
    marginTop: 10,
  }
})

export default CommentDialog

import React, { Component } from 'react';
import { 
    StyleSheet, 
    Text, 
    View, 
    TextInput, 
    ScrollView, 
    TouchableOpacity,
    TextComponent, 
} from 'react-native'

class Button extends Component {
  render() {
      return(
        <TouchableOpacity 
        style ={styles.buttonStyle}>
            <Text style={styles.textStyle}> Button </Text>
        </TouchableOpacity>
      );
  }
}

const styles = StyleSheet.create({
    textStyle: {
        color:'white', 
        textAlign:'center',
        fontSize:16,
    },
    buttonStyle: {
        flex:1,
        backgroundColor:'dodgerblue',
        height: 60,
        justifyContent: "center",
        borderColor: "white",
        borderWidth: 0.5
    },
  });

export default Button;
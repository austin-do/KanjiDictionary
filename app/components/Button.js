import React, { Component } from 'react';
import { 
    StyleSheet, 
    Text, 
    Image,
    TouchableOpacity,
    
} from 'react-native'

class Button extends Component{
  render() {
      return(
        <TouchableOpacity 
        style ={styles[this.props.buttonType]}>
            <Image
              source={this.props.itemIcon}
              style={styles.image}
            />
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
      borderWidth: 0.5,
    },
    homeButton: {
      justifyContent: "center",
      alignContent: 'center',
      flexDirection: 'row',
      padding:40
    },
    image: {
      borderColor: '#fff',
      borderWidth: 1,
    }
  });

export default Button;
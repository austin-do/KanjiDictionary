import React, { Component } from 'react';
import Button from './Button';
import { createStackNavigator, createAppContainer,StackActions,NavigationActions } from "react-navigation";


import { 
  StyleSheet, 
  ImageBackground,
  View,
  Text

} from 'react-native'

class Home extends Component {
    static navigationOptions =  {
        header: null
    }
  render() {
    return (
      <ImageBackground
        source={require('D:/Users/Austin/App/KanjiApp/app/icons/backgroundHome.jpg')}
        style={styles.container}>
            <View style={styles.overlayContainer}>
                <View style ={styles.top}>
                    <Text style={styles.header}>K A N J I</Text>
                </View>
                <View style = {styles.menuContainer}>
                    <Button 
                        onPress={() => this.props.navigation.navigate('Draw')} 
                        buttonType="homeButton" 
                        itemIcon={require('D:/Users/Austin/App/KanjiApp/app/icons/camera.png')}
                    />             
                    <Button 
                        onPress = {() => {alert("nice");}} 
                        buttonType="homeButton" 
                        itemIcon={require('D:/Users/Austin/App/KanjiApp/app/icons/palette.png')}
                    />             
                </View>
            </View>
      </ImageBackground>
    )
  }
}

const styles = StyleSheet.create({
  container:{
      flex:1,
      width:'100%',
      height:'100%',
  },
  overlayContainer:{
      flex:1,
      backgroundColor: 'rgba(87, 94, 104, .7)'
  },
  top: {
    height:'50%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
      color:'#fff',
      fontSize: 28,
      borderWidth:2,
      borderColor: '#fff',
      padding: 20,
      backgroundColor: 'rgba(255,255,255,0.4)'
  },
  menuContainer: {
      justifyContent: 'center',
      flexDirection: 'row'
  }
})

export default Home;

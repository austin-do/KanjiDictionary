import React, { Component } from 'react';
import Button from './Button'; // Import a component from another file
import RNSketchCanvas from '@terrylinla/react-native-sketch-canvas';
import { 
  StyleSheet, 
  Text, 
  View, 
} from 'react-native'

class Main extends Component {
  render() {
    return (
      <View 
        style={{flex:1}}>
        <View style={styles.menuBar}>
          <View style ={{flex:1,flexDirection: "row" ,justifyContent: "center"}}> 
          <Text style ={{color: "white", fontSize: 20}}>KanjiApp</Text>
          </View>
          
            
          <RNSketchCanvas
            containerStyle={styles.drawWindow}
            canvasStyle={styles.drawWindow}
            style={styles.drawWindow}
            strokeColor={'black'}
            defaultStrokeWidth={10}
            clearComponent={<View style={styles.functionButton}><Text style={{color: 'white'}}>Clear</Text></View>}
            undoComponent={<View style={styles.functionButton}><Text style={{color: 'white'}}>Undo</Text></View>}
          />
          
        </View>
        <View style={styles.menuBar2}>
        <Button buttonType= 'menuButton' itemIcon={require('D:/Users/Austin/App/KanjiApp/app/icons/settings.png')}/>
        <Button buttonType= 'menuButton' itemIcon={require('D:/Users/Austin/App/KanjiApp/app/icons/camera.png')}/>
        <Button buttonType= 'menuButton' itemIcon={require('D:/Users/Austin/App/KanjiApp/app/icons/palette.png')}/>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  menuBar: {
    backgroundColor:"skyblue",
    flex:6,
    borderRadius: 8,
  },
  drawWindow: {
    backgroundColor:"white",
    flex:6,
    borderRadius: 8,
    margin: 10
  },
  menuBar2: {
    flexDirection: "row",
  },
  functionButton: {
    marginHorizontal: 2.5, marginVertical: 8, height: 30, width: 60,
    backgroundColor: '#39579A', justifyContent: 'center', alignItems: 'center', borderRadius: 5,
  },
  container: {
    flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#F5FCFF',
  },
  strokeColorButton: {
    marginHorizontal: 2.5, marginVertical: 8, width: 30, height: 30, borderRadius: 15,
  },
  strokeWidthButton: {
    marginHorizontal: 2.5, marginVertical: 8, width: 30, height: 30, borderRadius: 15,
    justifyContent: 'center', alignItems: 'center', backgroundColor: '#39579A'
  }
})

export default Main;

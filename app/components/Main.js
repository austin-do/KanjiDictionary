import React, { Component } from 'react';
import Button from './Button'; // Import a component from another file
import { SketchCanvas } from '@terrylinla/react-native-sketch-canvas';
import { 
  StyleSheet, 
  Text, 
  View, 
  TextInput, 
  ScrollView, 
  TouchableOpacity,
  TextComponent, 
} from 'react-native'

class Main extends Component {
  render() {
    return (
      <View 
        style={{flex:1}}>
        <View style={styles.menuBar}>
          <View style ={{flex:1, justifyContent: "center"}}> 
          <Text>KanjiApp</Text>
          </View>
          
            
          <SketchCanvas
            style={styles.drawWindow}
            strokeColor={'black'}
            strokeWidth={7}
            undoComponent={<View style={styles.functionButton}><Text style={{color: 'black'}}>Undo</Text></View>}
          />
          
        </View>
        <View style={styles.menuBar2}>
        <Button></Button>
        <Button></Button>
        <Button></Button>
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
    flex:5,
    borderRadius: 8,
    margin: 10
  },
  menuBar2: {
    flexDirection: "row",
  },
  functionButton: {
    marginHorizontal: 2.5, marginVertical: 8, height: 30, width: 60,
    backgroundColor: '#39579A', justifyContent: 'center', alignItems: 'center', borderRadius: 5,
  }
})

export default Main;

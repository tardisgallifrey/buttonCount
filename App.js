//A React Native App in Class form
import React, { Component } from 'react';
import { StatusBar } from 'react-native';
import {TouchableOpacity, Text, View} from 'react-native'
import {styles} from './styles';

class App extends Component {
  state = {
    count: 0
  }

  onPress = () => {
    this.setState({
      count: this.state.count + 1
    })
  }

 render() {
    return (
      <View style={styles.container}>
        <View>
          <Text>This is my first coded Android app</Text>
          <Text>I have a long way to go.</Text>
        </View>
        <View></View>
        <TouchableOpacity
         style={styles.button}
         onPress={this.onPress}
        >
         <Text>Click me</Text>
        </TouchableOpacity>
        <View>
          <Text>
            You clicked { this.state.count } times
          </Text>
          <StatusBar />
        </View>
      </View>
    )
  }
}


export default App;

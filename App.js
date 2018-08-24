import React, { Component } from 'react';
import { AppRegistry, View, StyleSheet, Image } from 'react-native';

export default class Bananas extends Component {
  render() {
   
    let pic = {
      uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
    };
    return (
      <View style={{backgroundColor: 'blue', flex: 0.3}}>
      <Image source={pic} style={{width: 193, height: 110}}/>
      <Image source={pic} style={{width: 193, height: 110}}/>

      </View>
      
    );
  }
}


const styles = StyleSheet.create({
  container: {
    borderRadius: 4,
    borderWidth: 0.5,
    borderColor: '#d6d7da',
  },
  title: {
    fontSize: 19,
    fontWeight: 'bold',
  },
  activeTitle: {
    color: 'red',
  },
});

// skip this line if using Create React Native App
AppRegistry.registerComponent('AwesomeProject', () => Bananas);

/* eslint-disable react-native/no-inline-styles */
import React, { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import NewSyle from './glopbalStyle'
import List from './Conponents/List';
const style=StyleSheet.create({
  textStyle:{
    color:'#7970cf',
    fontSize:20,
    fontWeight:'bold'
    
  }
})


const App=(): React.JSX.Element=> {
  return (
    <View style={{padding:5,height:'100%'}}>
      <List
       method={'Map'}
      />
    </View>
  );
}

export default App;

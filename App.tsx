/* eslint-disable react-native/no-inline-styles */
import React, { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import NewSyle from './glopbalStyle'
import List from './Conponents/List';
import Grid from './Conponents/Grid';
import SelectionLists from './Conponents/SectionLists';


const App=(): React.JSX.Element=> {
  return (
    <View style={{padding:5,height:'100%'}}>
      <SelectionLists />
    </View>
  );
}

export default App;

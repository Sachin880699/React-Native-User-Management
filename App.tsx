import { NavigationContainer } from '@react-navigation/native';
import React, { useEffect, useState , useRef} from 'react';
import { Text, View, Button, FlatList, StyleSheet, Modal, TextInput, StatusBar } from 'react-native';
import MyStack from './navigation';


const App = () => {
  
  return (
    <NavigationContainer>
        <MyStack />
      </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  mainScreen:{
    backgroundColor:"#fafafa",
    height:"100%",
    width:"100%",
    
}
})



export default App
import React from 'react';
import { StyleSheet, View, Text,ImageBackground} from 'react-native';
import { globalStyles } from '../styles/global';

export default function About() {
  return (
    <ImageBackground source={require('../assets/game_bg.png')} style={styles.imageBackground}>
    <View style={globalStyles.container}>
      <View style={{justifyContent:'center', alignItems:'center'}}>       
       </View>
      <Text style={styles.aboutText}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed faucibus justo sed ex lobortis vehicula. Fusce vel felis non dolor pellentesque rutrum eget et ipsum. Nulla vel nisi eu elit pulvinar rutrum. Mauris a tellus non urna suscipit facilisis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Aliquam ac quam urna. Pellentesque placerat risus ut nunc sodales, id vestibulum lectus tristique. 
      </Text>
    </View>
    </ImageBackground>
  );
}

const styles= StyleSheet.create( {
  imageBackground: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
  },
  aboutText: {
    marginHorizontal:20,
    marginVertical:30,
    fontSize:20,
    fontWeight:'500',
    color:'teal'
  }
})
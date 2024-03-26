import React from "react";
import { View, Text, StyleSheet,ImageBackground } from "react-native";
 import { MaterialIcons } from "@expo/vector-icons";
import { Image } from "react-native";



 export default function Header(){
    return (
        
        <ImageBackground  styles={styles.header } source={require('../assets/game_bg.png')}>
            <View style={styles.headerTitle}>
                <Image style= {styles.headerImage} source={require('../assets/heart_logo.png')}/>
                <Text style={styles.headerText}>Home</Text>
            </View>
        </ImageBackground>
    )
 }




 const styles=StyleSheet.create({
    header:{
        marginTop:26,
        width:'100%',
        height:'100%',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center', 
    },
    headerText:{
        fontWeight:'bold',
        fontSize:20,
        color:'#333',
        letterSpacing:1,
    },
    headerImage:{
        width:26,
        height:26,
        marginHorizontal:10,
    },
    headerTitle:{
        flexDirection:'row',
    }
 })
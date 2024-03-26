import React from "react";
import { View, Text, StyleSheet } from "react-native";
 import { MaterialIcons } from "@expo/vector-icons";

 export default function Header(){
    return (
        <View styles={styles.header}>

            <View>
                <Text style={styles.headerText}>Home</Text>
            </View>
        </View>
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
 })
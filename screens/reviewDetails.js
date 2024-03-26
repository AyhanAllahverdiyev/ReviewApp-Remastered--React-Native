import React from 'react';
import { View, Text, Button,Image ,StyleSheet,ImageBackground} from 'react-native';
import { globalStyles,imgaes } from '../styles/global';
import Card from '../shared/card';
 const ReviewDetails = ({route,navigation}) => {
    const {title,body,rating,key} = route.params;
     return (
        <ImageBackground source={require('../assets/game_bg.png')} style={styles.imageBackground}>
         
        <View style={globalStyles.container}>
            <Card> 
            <Text style={globalStyles.titleText}>{ title }</Text>
            <Text style={globalStyles.titleText}>{ body }</Text>
            <View style={styles.rating} >
                  <Text>GameZone rating:</Text>
                  <Image source={(imgaes.ratings[rating])}/>
            </View>
             <Button title='Back to Home' onPress={() => navigation.goBack()} />
            </Card>
        
   
      </View>
      </ImageBackground>    
       
    );
}
const styles=StyleSheet.create({
    rating:{
        flexDirection:'row',
        justifyContent:'center',
        paddingTop:16,
        marginHorizontal:16,
        
        borderTopWidth:1,
        borderTopColor:'#eee'
    },
    imageBackground: {
        flex: 1,
        resizeMode: 'cover',
       },
     
    
})
export default ReviewDetails;
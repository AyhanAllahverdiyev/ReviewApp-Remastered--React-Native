import React, { useMemo, useState } from 'react';
import { View, Text, TouchableOpacity, FlatList, ImageBackground, StyleSheet ,Modal,SafeAreaView,Keyboard,TouchableWithoutFeedback} from 'react-native';
import { globalStyles } from '../styles/global';
import Card from '../shared/card';
import {MaterialIcons} from '@expo/vector-icons';
import ReviewForm from './reviewForm';

export default function Home({ navigation }) {
  const [modalOpen, setModelOpen]=useState(false);
  const [reviews, setReviews] = useState([
    { title: 'Zelda, Breath of Fresh Air', rating: 5, body: 'lorem ipsum', key: '1' },
    { title: 'Gotta Catch Them All (again)', rating: 4, body: 'lorem ipsum', key: '2' },
    { title: 'Not So "Final" Fantasy', rating: 3, body: 'lorem ipsum', key: '3' },
  ]);

  const addReview= (review)=>{
    review.key=Math.random().toString(); 
    setReviews((currentReviews)=>{
      return [review, ...currentReviews]
    });
    setModelOpen(false);

  }
  return (
        <ImageBackground source={require('../assets/game_bg.png')} style={styles.imageBackground}>
        <View style={styles.content}>
          
          <Modal visible={modalOpen} animationType='slide'> 
              <View style={{height:50}}></View>
              <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
              <View style={styles.modalContent}> 
              
              <MaterialIcons 
                style={{...styles.modalToggle,...styles.modalClose }}
                  name ="close" 
                  size={24} 
                  onPress={()=>setModelOpen(false)}
                />          
                  <View style={{height:20}}></View>
                  <ReviewForm addReview={addReview}/>
                </View>       
              </TouchableWithoutFeedback>
           </Modal>       
          <MaterialIcons 
       
          style={styles.modalToggle}
              name ="add" 
              size={24} 
              onPress={()=>setModelOpen(true)}
          />
          <FlatList 
            data={reviews} 
            renderItem={({ item }) => (
              <TouchableOpacity onPress={() => navigation.navigate('ReviewDetails', item)}>
                <Card>
                  <Text style={globalStyles.titleText}>{item.title}</Text>
                </Card>
              </TouchableOpacity>
            )} 
          />
        </View>
      </ImageBackground>
   );
}

const styles = StyleSheet.create({
 
  imageBackground: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    flex: 1,
    width: '100%',
    padding: 20, 
  },
  modalToggle:{
    marginBottom:10,
    borderWidth:1,
    borderColor:'gray',
     padding:10,
    borderRadius:10,
    alignSelf:'center',
  },
  modalClose:{
    marginTop:20,
    marginBottom:0,
  },
  modalContent:{
    flex:1,
    padding:20
  }
   
});

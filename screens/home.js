import React, { useMemo, useState } from 'react';
import { View, Text,Alert, TouchableOpacity, FlatList, ImageBackground, StyleSheet, Modal, SafeAreaView,Image ,Keyboard, TouchableWithoutFeedback } from 'react-native';
import { globalStyles,images } from '../styles/global';
import Card from '../shared/card';
import { MaterialIcons } from '@expo/vector-icons';
import ReviewForm from './reviewForm';
export default function Home({ navigation }) {
  const [modalOpen, setModelOpen] = useState(false);
  const [reviews, setReviews] = useState([
    { title: 'Zelda, Breath of Fresh Air', rating: 5, body: 'lorem ipsum', key: '1', showDelete: false },
    { title: 'Gotta Catch Them All (again)', rating: 4, body: 'lorem ipsum', key: '2', showDelete: false },
    { title: 'Not So "Final" Fantasy', rating: 3, body: 'lorem ipsum', key: '3', showDelete: false },
  ]);

  const toggleDeleteIcon = (key) => {
    setReviews(reviews.map(review => {
      if (review.key === key) {
        return { ...review, showDelete: !review.showDelete };
      }
      return review;
    }));
  };

  const addReview = (review) => {
    review.key = Math.random().toString();
    review.showDelete = false;
    setReviews((currentReviews) => {
      return [review, ...currentReviews]
    });
    setModelOpen(false);
  }
  const askUser = (item) => {
    Alert.alert(
      "Confirmation",  
      "Are you sure you want to delete?", 
      [
        {
          text: 'Delete',
          onPress: () => handleDelete(item),
          style: 'destructive'
        },
        {
          text: 'Cancel',
          onPress: () => console.log('Cancelled'),
          style: 'cancel'
        }
        
      ],
      { cancelable: false } 
    );
  }
  
  const handleDelete= (item)=>{
    const filteredReviews = reviews.filter(review => review.key !== item.key);
    setReviews(filteredReviews);

  }

  return (
    <ImageBackground source={require('../assets/game_bg.png')} style={styles.imageBackground}>
    
       <FlatList
          data={reviews}
          renderItem={({ item }) => (
            <TouchableOpacity
              onLongPress={() => toggleDeleteIcon(item.key)}
              onPress={() => navigation.navigate('ReviewDetails', item)}>
              <Card>
                <View style={styles.deleteIcon}> 
                <Text style={globalStyles.titleText}>{item.title}</Text>
              <Image source={(images.ratings[item.rating])}/>
                {item.showDelete && (
                  <MaterialIcons
                    style={{ ...styles.modalToggle, ...styles.modalClose }}
                    name="delete"
                    color={'red'}
                    size={24}
                    onPress={() => {
                      askUser(item)
                    }}
                  />
                )}
                </View>
              </Card>
            </TouchableOpacity>
          )}
        />
    
      <View 
      style={styles.content} >
      <MaterialIcons
          style={styles.modalToggle}
          name="add"
          size={24}
          onPress={() => setModelOpen(true)}
        />
        <Modal visible={modalOpen} animationType='slide'>
          <View style={{ height: 50 }}></View>
          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={styles.modalContent}>

              <MaterialIcons
                style={{ ...styles.modalToggle, ...styles.modalClose }}
                name="close"
                size={24}
                onPress={() => setModelOpen(false)}
              />
              <View style={{ height: 20 }}></View>
              <ReviewForm addReview={addReview} />
            </View>
          </TouchableWithoutFeedback>
        </Modal>
        
      
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
   
    width: '100%',
    padding: 20,
  },
  modalToggle: {
    marginBottom: 10,
    borderWidth: 1,
    borderColor: 'gray',
    padding: 10,
    borderRadius: 10,
    alignSelf: 'center',
  },
  modalClose: {
    marginTop: 20,
    marginBottom: 0,
  },
  modalContent: {
    flex: 1,
    padding: 20
  },
  deleteIcon:{
    justifyContent:'space-between',
    flex:1,
    flexDirection:'row'
  }

});

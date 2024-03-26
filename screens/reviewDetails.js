import React from 'react';
import { View, Text, Button } from 'react-native';
import { globalStyles } from '../styles/global';
const ReviewDetails = ({route,navigation}) => {
    const {title,body,rating,key} = route.params;
     return (
        <View style={globalStyles.container}>
            <Text style={globalStyles.titleText}>{ title }</Text>
            <Text style={globalStyles.titleText}>{ body }</Text>
            <Text style={globalStyles.titleText}>{ rating }</Text>
            <Button title='Back to Home' onPress={() => navigation.goBack()} />
        
      </View>
       
    );
}

export default ReviewDetails;
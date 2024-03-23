import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import HorizontalCarousel from '../components/HorizontalCarousel ';



const RestaurantsScreen = ({data}) => {

  console.log(data);

  const navigation = useNavigation();
  const buttonClickHandler = () => {
    navigation.navigate('Satisfy Craving');
  };

  return (
    <View style={styles.container}>
      <View style={styles.mainContainer}>
        <Text style={styles.title}>Satisfy your cravings</Text>
        <TouchableOpacity onPress={buttonClickHandler} style={styles.viewAllButtonContainer}>
          <Text style={styles.viewAllButton}>View All</Text>
        </TouchableOpacity>
        <Text style={styles.subtitle}>Restaurants that suit your palate</Text>
      </View>
      <HorizontalCarousel data={data} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginLeft: 12,
    flexDirection: 'column',
  },
  title: {
    marginTop: 18,
    fontSize: 21,
    fontWeight: '800',
    paddingLeft: 18,
  },
  subtitle: {
    fontSize: 14,
    fontWeight: '500',
    paddingLeft: 18,
   
  },
  viewAllButton: {
    fontWeight: '600',
    fontSize: 16,
    marginLeft:280,
    
  },
  viewAllButtonContainer: {
    flexDirection:'row',

    marginLeft: 285,
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
      },
      android: {
        elevation: 5,
      },
    }),
  },
  viewAllButton: {
    fontWeight: '600',
    fontSize: 16
  },



});

export default RestaurantsScreen;

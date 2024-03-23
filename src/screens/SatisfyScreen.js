import React from 'react';
import {View, StyleSheet, Text,FlatList,Image} from 'react-native';


const data = [
  {
    id: '1',
    name: 'Vegetarian Restaurant ',
    image_url:
      'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmVzdGF1cmFudHxlbnwwfHwwfHx8MA%3D%3D',
    description: 'Description for Vegetarian Restaurant ',
    category: 'vegetarian',
  },
  {
    id: '2',
    name: 'Non-Vegetarian Restaurant ',
    image_url:
      'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmVzdGF1cmFudHxlbnwwfHwwfHx8MA%3D%3D',
    description: 'Description for Non-Vegetarian Restaurant ',
    category: 'non-vegetarian',
  },
  {
    id: '3',
    name: 'Vegetarian Restaurant ',
    image_url:
      'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmVzdGF1cmFudHxlbnwwfHwwfHx8MA%3D%3D',
    description: 'Description for Vegetarian Restaurant ',
    category: 'vegetarian',
  },
  {
    id: '4',
    name: 'Non-Vegetarian Restaurant ',
    image_url:
      'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmVzdGF1cmFudHxlbnwwfHwwfHx8MA%3D%3D',
    description: 'Description for Non-Vegetarian Restaurant ',
    category: 'non-vegetarian',
  },
  {
    id: '5',
    name: 'Vegetarian Restaurant ',
    image_url:
      'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmVzdGF1cmFudHxlbnwwfHwwfHx8MA%3D%3D',
    description: 'Description for Vegetarian Restaurant ',
    category: 'vegetarian',
  },
  {
    id: '6',
    name: 'Non-Vegetarian Restaurant ',
    image_url:
      'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmVzdGF1cmFudHxlbnwwfHwwfHx8MA%3D%3D',
    description: 'Description for Non-Vegetarian Restaurant ',
    category: 'non-vegetarian',
  },
  {
    id: '7',
    name: 'Vegetarian Restaurant ',
    image_url:
      'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmVzdGF1cmFudHxlbnwwfHwwfHx8MA%3D%3D',
    description: 'Description for Vegetarian Restaurant ',
    category: 'vegetarian',
  },
  {
    id: '8',
    name: 'Non-Vegetarian Restaurant ',
    image_url:
      'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmVzdGF1cmFudHxlbnwwfHwwfHx8MA%3D%3D',
    description: 'Description for Non-Vegetarian Restaurant ',
    category: 'non-vegetarian',
  },
  {
    id: '9',
    name: 'Vegetarian Restaurant ',
    image_url:
      'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmVzdGF1cmFudHxlbnwwfHwwfHx8MA%3D%3D',
    description: 'Description for Vegetarian Restaurant ',
    category: 'vegetarian',
  },
  {
    id: '10',
    name: 'Non-Vegetarian Restaurant ',
    image_url:
      'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmVzdGF1cmFudHxlbnwwfHwwfHx8MA%3D%3D',
    description: 'Description for Non-Vegetarian Restaurant ',
    category: 'non-vegetarian',
  },
  {
    id: '11',
    name: 'Vegetarian Restaurant ',
    image_url:
      'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmVzdGF1cmFudHxlbnwwfHwwfHx8MA%3D%3D',
    description: 'Description for Vegetarian Restaurant ',
    category: 'vegetarian',
  },
  {
    id: '12',
    name: 'Non-Vegetarian Restaurant ',
    image_url:
      'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmVzdGF1cmFudHxlbnwwfHwwfHx8MA%3D%3D',
    description: 'Description for Non-Vegetarian Restaurant ',
    category: 'non-vegetarian',
  },
];
const SatisfyScreen = () => {
  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <Image
        source={{ uri: item.image_url }}
        style={styles.image}
      />
      <View style={styles.textContainer}>
        <Text style={styles.title}>{item.name}</Text>
        <Text style={styles.category}>{item.category}</Text>
        <Text style={styles.description}>{item.description}</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 10,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    marginVertical: 8,
    marginHorizontal: 12,
    padding: 20,
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 10,
    marginRight: 15,
  },
  textContainer: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  category: {
    fontSize: 14,
    fontWeight: 'bold',
    color: 'gray',
    marginBottom: 5,
  },
  description: {
    fontSize: 14,
    color: 'gray',
  },
});


export default SatisfyScreen;

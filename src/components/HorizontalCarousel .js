import React from 'react';
import { View, StyleSheet, FlatList, Text, ImageBackground } from 'react-native';

const HorizontalCarousel = ({ data }) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <ImageBackground
            source={{ uri: item.image_url }}
            style={styles.cardBackground}
            imageStyle={styles.backgroundImage}
          >
            <View style={styles.card}>
              <Text style={styles.title}>{item.name}</Text>
              <Text style={styles.category}>{item.category}</Text>
              <Text style={styles.description}>{item.description}</Text>
            </View>
          </ImageBackground>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  cardBackground: {
    width: 200, // Set your desired width
    height: 250, // Set your desired height
    margin: 10,
    borderRadius: 10,
    overflow: 'hidden', // To clip the child components inside the border radius
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover', // Ensure the image covers the entire background
  },
  card: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Add a semi-transparent background to the card for better readability
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff', // Set text color to white for better visibility
    marginBottom: 5,
  },
  category: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 5,
  },
  description: {
    fontSize: 14,
    color: '#fff',
    textAlign: 'center',
  },
});

export default HorizontalCarousel;

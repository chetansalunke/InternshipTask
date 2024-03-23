import React, { useState } from 'react';
import { View, StyleSheet, Text, TextInput, TouchableOpacity } from 'react-native';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import Ionicons from 'react-native-vector-icons/Ionicons';
import RestaurantFilterModal from '../components/RestaurantFilterModal';
import ResturantsScreen from './ResturantsScreen';
import CookingScreen from './CookingScreen';

const data = [
  {
    id: '1',
    name: 'Vegetarian Restaurant ',
    image_url: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmVzdGF1cmFudHxlbnwwfHwwfHx8MA%3D%3D',
    description: 'Description for Vegetarian Restaurant ',
    category: 'vegetarian',
  },
  {
    id: '2',
    name: 'Non-Vegetarian Restaurant ',
    image_url: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmVzdGF1cmFudHxlbnwwfHwwfHx8MA%3D%3D',
    description: 'Description for Non-Vegetarian Restaurant ',
    category: 'non-vegetarian',
  },
  {
    id: '3',
    name: 'Vegetarian Restaurant ',
    image_url: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmVzdGF1cmFudHxlbnwwfHwwfHx8MA%3D%3D',
    description: 'Description for Vegetarian Restaurant ',
    category: 'vegetarian',
  },
  {
    id: '4',
    name: 'Non-Vegetarian Restaurant ',
    image_url: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmVzdGF1cmFudHxlbnwwfHwwfHx8MA%3D%3D',
    description: 'Description for Non-Vegetarian Restaurant ',
    category: 'non-vegetarian',
  },
  {
    id: '5',
    name: 'Vegetarian Restaurant ',
    image_url: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmVzdGF1cmFudHxlbnwwfHwwfHx8MA%3D%3D',
    description: 'Description for Vegetarian Restaurant ',
    category: 'vegetarian',
  },
  {
    id: '6',
    name: 'Non-Vegetarian Restaurant ',
    image_url: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmVzdGF1cmFudHxlbnwwfHwwfHx8MA%3D%3D',
    description: 'Description for Non-Vegetarian Restaurant ',
    category: 'non-vegetarian',
  },
  {
    id: '7',
    name: 'Vegetarian Restaurant ',
    image_url: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmVzdGF1cmFudHxlbnwwfHwwfHx8MA%3D%3D',
    description: 'Description for Vegetarian Restaurant ',
    category: 'vegetarian',
  },
  {
    id: '8',
    name: 'Non-Vegetarian Restaurant ',
    image_url: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmVzdGF1cmFudHxlbnwwfHwwfHx8MA%3D%3D',
    description: 'Description for Non-Vegetarian Restaurant ',
    category: 'non-vegetarian',
  },
  {
    id: '9',
    name: 'Vegetarian Restaurant ',
    image_url: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmVzdGF1cmFudHxlbnwwfHwwfHx8MA%3D%3D',
    description: 'Description for Vegetarian Restaurant ',
    category: 'vegetarian',
  },
  {
    id: '10',
    name: 'Non-Vegetarian Restaurant ',
    image_url: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmVzdGF1cmFudHxlbnwwfHwwfHx8MA%3D%3D',
    description: 'Description for Non-Vegetarian Restaurant ',
    category: 'non-vegetarian',
  },
  {
    id: '11',
    name: 'Vegetarian Restaurant ',
    image_url: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmVzdGF1cmFudHxlbnwwfHwwfHx8MA%3D%3D',
    description: 'Description for Vegetarian Restaurant ',
    category: 'vegetarian',
  },
  {
    id: '12',
    name: 'Non-Vegetarian Restaurant ',
    image_url: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmVzdGF1cmFudHxlbnwwfHwwfHx8MA%3D%3D',
    description: 'Description for Non-Vegetarian Restaurant ',
    category: 'non-vegetarian',
  },
  
];
const HomeScreen = () => {
  
  const [category, setCategory] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [index, setIndex] = useState(0);
  const [filteredData, setFilteredData] = useState(data); // State to store filtered data

  const [routes] = useState([
    { key: 'restaurants', title: 'Restaurants' },
    { key: 'cooking', title: 'Cooking' },
  ]);

  const renderScene = SceneMap({
    restaurants: () => <ResturantsScreen data={filteredData} />, // Pass filtered data to RestaurantsScreen
    cooking: CookingScreen,
  });

  const handleOpenModal = () => {
    setModalVisible(true);
  };

  const handleCloseModal = () => {
    setModalVisible(false);
  };

  const handleApplyFilter = (selectedOption) => {
    setCategory(selectedOption);
    const newData = data.filter(item => item.category === selectedOption); // Filter data based on selected category
    setFilteredData(newData); // Update filtered data
    console.log("new data");
    console.log(newData);
  };
  console.log("Filterd data");
  console.log(filteredData);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Good Morning Mr. Chetan</Text>
      <View style={styles.inputContainer}>
        <TextInput style={styles.textInput} placeholder="Search..." />
        <TouchableOpacity style={styles.touchStyle} onPress={handleOpenModal}>
          <View style={styles.iconView}>
            <Ionicons name="funnel-outline" size={21} color="black" />
          </View>
        </TouchableOpacity>
      </View>

      <RestaurantFilterModal
        visible={modalVisible}
        onClose={handleCloseModal}
        onApplyFilter={handleApplyFilter}
      />

      <TabView
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={setIndex}
        renderTabBar={props => (
          <TabBar
            {...props}
            indicatorStyle={{ backgroundColor: 'black' }}
            style={{ backgroundColor: 'white' }}
            labelStyle={{ color: 'black' }}
          />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 12,
  },
  text: {
    fontSize: 16,
    fontWeight: '600',
  },
  textInput: {
    fontSize: 20,
    marginLeft: 10,
    width: '90%',
  },
  inputContainer: {
    flexDirection: 'row',
    marginTop: 21,
    marginBottom:18,
    backgroundColor: '#F5F5F5',
    elevation: 5,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    borderRadius: 12,
    shadowRadius: 3.84,
  },
  iconView: {
    justifyContent: 'flex-end',
    marginBottom:12,
    marginRight:12
  },
  touchStyle: {
    marginTop:12,
    justifyContent: 'center',
  },
});

export default HomeScreen;
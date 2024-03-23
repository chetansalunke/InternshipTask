import React, {useState} from 'react';
import {
  Modal,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

const RestaurantFilterModal = ({visible, onClose, onApplyFilter}) => {
  const [filterText, setFilterText] = useState('');
  const [selectedOption, setSelectedOption] = useState(null);

  const handleApplyFilter = () => {
    onApplyFilter(selectedOption);
    onClose();
  };

  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}>
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <Text style={styles.modalTitle}>Filter</Text>
          <Text style={{fontSize: 16, marginBottom: 10}}>Diet</Text>
          <View style={styles.optionContainer}>
            <TouchableOpacity
              style={[
                styles.optionButton,
                selectedOption === 'vegetarian' && styles.selectedOption,
              ]}
              onPress={() => setSelectedOption('vegetarian')}>
              <Text style={styles.optionText}>vegetarian</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.optionButton,
                selectedOption === 'non-vegetarian' && styles.selectedOption,
              ]}
              onPress={() => setSelectedOption('non-vegetarian')}>
              <Text style={styles.optionText}>non-vegetarian</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.optionButton,
                selectedOption === 'vegan' && styles.selectedOption,
              ]}
              onPress={() => setSelectedOption('vegan')}>
              <Text style={styles.optionText}>Vegan</Text>
            </TouchableOpacity>
          </View>
          <Text style={{fontSize: 16, marginBottom: 10}}>Cusines</Text>
          <View style={styles.optionContainer}>
            <TouchableOpacity
              style={[
                styles.optionButton,
                selectedOption === 'indain' && styles.selectedOption,
              ]}
              onPress={() => setSelectedOption('indain')}>
              <Text style={styles.optionText}>Indain</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.optionButton,
                selectedOption === 'med' && styles.selectedOption,
              ]}
              onPress={() => setSelectedOption('med')}>
              <Text style={styles.optionText}>Mediterran</Text>
            </TouchableOpacity>
         
          </View>
          <Text style={{fontSize: 16, marginBottom: 10}}>Proteins</Text>
          <View style={styles.optionContainer}>
            <TouchableOpacity
              style={[
                styles.optionButton,
                selectedOption === 'chicken' && styles.selectedOption,
              ]}
              onPress={() => setSelectedOption('chicken')}>
              <Text style={styles.optionText}>Chicken</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.optionButton,
                selectedOption === 'Beef' && styles.selectedOption,
              ]}
              onPress={() => setSelectedOption('Beef')}>
              <Text style={styles.optionText}>Beef</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button} onPress={onClose}>
              <Text style={styles.buttonText}>Cancel</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={handleApplyFilter}>
              <Text style={styles.buttonText}>Apply Filter</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  optionContainer: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  optionButton: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 50,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginRight: 10,
  },
  selectedOption: {
    backgroundColor: '#ccc',
  },
  optionText: {
    fontSize: 16,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20, 
  },
  button: {
    flex: 1,
    backgroundColor: '#3498db',
    borderRadius: 5,
    paddingVertical: 12,
    marginHorizontal: 5, 
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
  },
});

export default RestaurantFilterModal;

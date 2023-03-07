import React, { useState } from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';

const DropDownTime = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [optionsVisible, setOptionsVisible] = useState(false);

  const options = [
    { label: 'Asc', value: 1 },
    { label: 'Des', value: 2 },
  ];

  const handleOptionPress = (option) => {
    setSelectedOption(option);
    setOptionsVisible(false);
  };

  const toggleOptionsVisible = () => {
    setOptionsVisible(!optionsVisible);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={toggleOptionsVisible} style={styles.touchable}>
        <Text style={styles.selectedOptionText}>{selectedOption ? selectedOption.label : 'Temps'}</Text>
        <Feather name={optionsVisible ? 'chevron-up' : 'chevron-down'} size={24} color="#fff" />
      </TouchableOpacity>
      {optionsVisible && (
        <View style={styles.optionsContainer}>
          {options.map((option) => (
            <TouchableOpacity
              key={option.value}
              onPress={() => handleOptionPress(option)}
              style={styles.optionTouchable}
            >
              <Text style={styles.optionText}>{option.label}</Text>
            </TouchableOpacity>
          ))}
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop:30,
    backgroundColor: '#18C0C1',
    padding: 20,
    borderRadius: 10,
    width:100,

    alignItems:"center",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    
  },
  touchable: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  selectedOptionText: {
    color: '#fff',
    fontSize: 15,
  },
  optionsContainer: {
    marginTop: 10,
    backgroundColor: '#fff',
    borderRadius: 5,
  },
  optionTouchable: {
    padding: 10,
    marginVertical: 5,
    
  },
  optionText: {
    color: '#000',
    fontSize: 11,

  },
  
});

export default DropDownTime;

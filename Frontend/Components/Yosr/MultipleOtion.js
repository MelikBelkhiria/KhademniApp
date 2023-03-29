import React, { useState } from 'react';
import { TouchableWithoutFeedback, View, Text, Modal, StyleSheet } from 'react-native';

const MultiOptionButton = () => {
  const [showOptions, setShowOptions] = useState(false);

  const handlePress = () => {
    setShowOptions(!showOptions);
  };

  return (
    <TouchableWithoutFeedback onPress={handlePress}>
      <View style={styles.button}>
        <Text style={styles.buttonText}>Options</Text>
      </View>
      <Modal visible={showOptions} animationType="fade">
        <View style={styles.options}>
          <Text>Option 1</Text>
          <Text>Option 2</Text>
          <Text>Option 3</Text>
        </View>
      </Modal>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#007AFF',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  options: {
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 5,
  },
});

export default MultiOptionButton;
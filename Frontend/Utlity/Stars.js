import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const Rating = ({ numberOfStars }) => {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    if (i <= numberOfStars) {
      stars.push(
        <Ionicons
          key={i}
          name="star"
          size={15}
          color="gold"
          style={styles.icon}
        />
      );
    } else {
      stars.push(
        <Ionicons
          key={i}
          name="star-outline"
          size={15}
          color="gold"
          style={styles.icon}
        />
      );
    }
  }

  return <View style={styles.container}>{stars}</View>;
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    marginHorizontal: 2,
  },
});

export default Rating;

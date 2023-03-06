import {React, useState} from 'react';
import { StyleSheet, Text, View, Image} from 'react-native';
import { Picker } from '@react-native-picker/picker';
import DropDownPicker from 'react-native-dropdown-picker';



export default function Confirmation({ route }) {
  const { Title, Statut, Date, uri } = route.params;

  const options = [
    { label: 'Option 1', value: 'option1' },
    { label: 'Option 2', value: 'option2' },
    { label: 'Option 3', value: 'option3' },
  ];


  const [selectedOption1, setSelectedOption1] = useState(null);
  const [selectedOption2, setSelectedOption2] = useState(null);
  const [selectedOption3, setSelectedOption3] = useState(null);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{Title}</Text>
          <Text style={[styles.statut, styles.statutText]}>{Statut}</Text>
        </View>
        {uri && <Image style={styles.image} source={{ uri }} />}
      </View>
      
      
      <View style={styles.content}>
        {/* Your confirmation content */}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent:"center",
    alignItems:'center',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  titleContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginLeft:30
  },
  statut: {
    fontSize: 11,
    marginLeft: 30,
    fontWeight:'bold',
    marginTop:10
  },
  statutText: {
    paddingHorizontal: 5, // Change this value to adjust the padding
    paddingVertical: 5,
    borderRadius: 10,
    overflow: 'hidden',
    fontWeight: 'bold',
    backgroundColor:'yellow',
    width:69
  },
  image: {
    width:80,
    height: 80,
    borderRadius: 40,
    marginRight:50
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  
});

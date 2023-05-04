import { React, useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image, Pressable, ImageBackground } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import { Ionicons } from '@expo/vector-icons';
import axios from 'axios';
import ConfirmCard from './ConfirmCard'
import moment from 'moment';




export default function Confirmation({ route, navigation }) {
  const formatDate = (dateString) => {
    return moment(dateString).format('MMMM Do YYYY, h:mm:ss a');
  };
  
  const { Title, Statut, Date, uri, Service_id } = route.params;
  const [sortOption, setSortOption] = useState(null);
  const [sortOrder, setSortOrder] = useState("asc");
  const [openSortOption, setOpenSortOption] = useState(false);
  const [openSortOrder, setOpenSortOrder] = useState(false);
  const removeCandidateById = (id) => {
    setCandidates(candidates.filter((candidate) => candidate.application_id !== id));
  };
  
  const [candidates, setCandidates] = useState([]);
  useEffect(() => {
    const fetchApplicants = async () => {
      try {
        const response = await axios.get(`http://192.168.1.45:3001/applicants/${Service_id}`); // replace 123 with the service ID
        setCandidates(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchApplicants();
  }, [Service_id]);

  const sortCandidates = (option, order) => {
    let sortedCandidates = [...candidates];
    if (option === 'rating') {
      sortedCandidates.sort((a, b) => order === 'asc' ? -a.rating + b.rating : - b.rating + a.rating);
    }
    return order === 'desc' ? sortedCandidates.reverse() : sortedCandidates;
  };




  return (
    <ImageBackground source={require("../../assets/image5.png")} style={styles.container}>
      <View style={styles.header}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{Title}</Text>
        </View>
      </View>

      <View style={styles.filterContainer}>
        <Ionicons
          name="star"
          size={40}
          color="gold"

        />
        <DropDownPicker
          items={[
            { label: 'Ascending', value: 'asc' },
            { label: 'Descending', value: 'desc' },
          ]}
          defaultValue={sortOrder}
          placeholder="Order"
          containerStyle={{ height: 40, width: 150 }}
          open={openSortOrder}
          setOpen={setOpenSortOrder}
          value={sortOrder}
          labelStyle={{ color: "white" }}
          style={{ backgroundColor: '#18C0C1' }}
          setValue={setSortOrder}

        />
      </View>


      {sortCandidates(sortOption, sortOrder).map((service) => (
        <ConfirmCard
          key={service.application_id}
          name={service.full_name}
          Location={service.address}
          Date={formatDate(service.created_at)}
          rating={service.rating}
          uri={service.profile_pic_base64}
          id={service.application_id}
          navigation={navigation}
          onRemove={() => removeCandidateById(service.application_id)}

        />

      ))}


      <View style={styles.content}>
        {/* Your confirmation content */}
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: 'center',
  },

  filterContainer: {
    flexDirection: 'row',
    marginTop: 5,
    zIndex: 2
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    marginTop: 40
  },
  titleContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginLeft: 30
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginRight: 50
  },

  statut: {
    fontSize: 11,
    marginLeft: 30,
    fontWeight: 'bold',
    marginTop: 10
  },
  statutText: {
    paddingHorizontal: 5, // Change this value to adjust the padding
    paddingVertical: 5,
    borderRadius: 10,
    overflow: 'hidden',
    fontWeight: 'bold',
    backgroundColor: 'yellow',
    width: 69
  },

  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

});

import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, Image, TextInput, TouchableOpacity } from 'react-native';

const jobs = [
    { id: '1', name: 'Cuisinier', employer: 'Hippo', price: 80, location: 'Lac2', image: require('./assets/icon.png') },
    { id: '2', name: 'Jardinier', employer: 'Foulen Fouleni', price: 65, location: 'Aouina', image: require('./assets/favicon.png') },
    { id: '3', name: 'Femme/Homme de menage', employer: 'Rand Om', price: 85, location: 'Marsa', image: require('./assets/splash.png') },
    { id: '4', name: 'UX Designer', employer: 'Orange', price: 350, location: 'Kram', image: require('./assets/adaptive-icon.png') },
];

const JobCard = ({ job }) => {
    return (
        <TouchableOpacity style={styles.card}>
            <Image source={job.image} style={styles.image} />
            <View style={styles.jobInfo}>
                <Text style={styles.name}>{job.name}</Text>
                <Text style={styles.price}>{job.price}€</Text>
                <Text style={styles.employer}>{job.employer}</Text>
                
                <Text style={styles.location}>{job.location}</Text>
            </View>
        </TouchableOpacity>
    );
};

const JobSearchPage = () => {
    const [filteredJobs, setFilteredJobs] = useState(jobs);
  const [sortOrder, setSortOrder] = useState('asc');
  const [selectedLocation, setSelectedLocation] = useState('');
  const [searchQuery, setSearchQuery] = useState('');


  const handleFilterLocation = location => {
    setSelectedLocation(location);
    setFilteredJobs(jobs.filter(job => job.data.some(item => item.location === location)));
  };

  const handleFilterPrice = () => {
    const order = sortOrder === 'asc' ? 'desc' : 'asc';
    setSortOrder(order);
    setFilteredJobs(prevJobs =>
      prevJobs.slice().sort((a, b) => (order === 'asc' ? a.price - b.price : b.price - a.price))
    );
};
const handleSearch = query => {
    setSearchQuery(query);
    setFilteredJobs(jobs.filter(job =>
        job.name.toLowerCase().includes(query.toLowerCase()) ||
        job.employer.toLowerCase().includes(query.toLowerCase())
    ));
};


    return (
        <View style={styles.container}>
            <View style={styles.searchBarContainer}>
                <TextInput
                    placeholder="Search for jobs"
                    value={searchQuery}
                    onChangeText={handleSearch}
                />
            </View>
            <View style={styles.filterBar}>
                <View style={styles.filterContainer}>
                    <Text style={styles.filterTitle}>Price:</Text>
                    <TouchableOpacity style={styles.filterButton} onPress={() => handleFilterPrice('ascending')}>
                        <Text style={styles.filterButtonText}>Ascending</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.filterButton} onPress={() => handleFilterPrice('descending')}>
                        <Text style={styles.filterButtonText}>Descending</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.filterContainer}>
        <Text style={styles.filterLabel}>Filter by Location:</Text>
        <TouchableOpacity onPress={() => handleFilterLocation('')}>
          <Text style={[styles.filterOption, selectedLocation === '' && styles.activeFilter]}>All</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleFilterLocation('Lac2')}>
          <Text style={[styles.filterOption, selectedLocation === 'Lac2' && styles.activeFilter]}>Lac2</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleFilterLocation('Aouina')}>
          <Text style={[styles.filterOption, selectedLocation === 'Aouina' && styles.activeFilter]}>Aouina</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleFilterLocation('Marsa')}>
          <Text style={[styles.filterOption, selectedLocation === 'Marsa' && styles.activeFilter]}>Marsa</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleFilterLocation('Kram')}>
          <Text style={[styles.filterOption, selectedLocation === 'Kram' && styles.activeFilter]}>Kram</Text>
        </TouchableOpacity>
      </View>
            </View>
            <FlatList
                data={filteredJobs}
                keyExtractor={job => job.id}
                renderItem={({ item }) => <JobCard job={item} />}
                contentContainerStyle={styles.list}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    searchBarContainer: {
        width:'75%',
        marginTop:80,
        marginLeft:20,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'white',
        borderRadius: 30,
        paddingHorizontal: 25,
        marginVertical: 20,
        borderColor: '#18C0C1',
        borderWidth: 1.2,
    },
    container: {
        flex: 1,
        backgroundColor: '#FFF',
    },
    searchInput: {
        width: '90%',
        height: '80%',
        borderRadius: 20,
        backgroundColor: '#FFF',
        paddingHorizontal: 20,
    },
    filterBar: {
        height: 50,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#18C0C1',
    },
    filterContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    filterTitle: {
        marginRight: 10,
        fontWeight: 'bold',
    },
    filterButton: {
        backgroundColor: '#18C0C1',
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderRadius: 5,
        marginLeft: 5,
    },
    filterButtonText: {
        color: '#FFF',
    },
    list: {
        padding: 20,
    },
    card: {
        height: 120,
        marginBottom: 20,
        borderRadius: 10,
        flexDirection: 'row',
        backgroundColor: '#FFF',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        elevation: 3,
    },
    image: {
        width: 120,
        height: '100%',
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10,
    },
    jobInfo: {
        flex: 1,
        padding: 10,
        justifyContent: 'space-around',
    },
    name: {
        fontWeight: 'bold',
        fontSize: 16,
    },
    employer: {
        color: '#999',
    },
    price: {
        fontWeight: 'bold',
        fontSize: 16,
        color: 'green',
    },
    location: {
        color: '#999',
    },
});

export default JobSearchPage;
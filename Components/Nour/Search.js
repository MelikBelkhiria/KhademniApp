import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, Image, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { Feather } from '@expo/vector-icons';

const jobs = [
    { id: '1', name: 'Cuisinier', employer: 'Hippo', price: 80, location: 'Lac2', image: require('../../assets/cuisinier.jpg') },
    { id: '2', name: 'Jardinier', employer: 'Foulen Fouleni', price: 65, location: 'Lac2', image: require('../../assets/jardinier.jpg') },
    { id: '3', name: 'Femme/Homme de menage', employer: 'Rand Om', price: 85, location: 'Marsa', image: require('../../assets/fmm.jpg') },
    { id: '4', name: 'UX Designer', employer: 'Orange', price: 350, location: 'Marsa', image: require('../../assets/RIP.jpg') },
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

const Search = () => {
    const [filteredJobs, setFilteredJobs] = useState(jobs);
    const [sortOrder, setSortOrder] = useState('asc');
    const [sortLoc, setSortLoc] = useState('Lac2');
    const [selectedLocation, setSelectedLocation] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedOption, setSelectedOption] = useState(false);
    const [optionsVisible, setOptionsVisible] = useState(false);
    const [locationsVisible, setLocationsVisible] = useState(false);

    const options = [
        { label: 'Ascending', value: 'asc' },
        { label: 'Descending', value: 'desc' },
    ];

    const handleBothOptions = (option) => {
        setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
        handleFilterPrice();
        handleOptionPress(option);
    };

    const handleOptionPress = (option) => {
        setSelectedOption(option);
        setOptionsVisible(false);
    };

    const toggleOptionsVisible = () => {
        setOptionsVisible(!optionsVisible);
    };
    const handleBothLocations = (job) => {
        setSortLoc(sortLoc === 'Lac2' ? 'Marsa' : 'Lac2');
        handleFilterLocation(job.location);
        handleLocationsPress(job);
    };

    const handleLocationsPress = (job) => {
        setSelectedLocation(job);
        setLocationsVisible(false);
    };

    const toggleLocationsVisible = () => {
        setLocationsVisible(!locationsVisible);
    };

    const handleFilterLocation = (location) => {
        if (location == '') {
            setFilteredJobs(jobs.filter(job => job.location = !location));
        }
        else {
            setSelectedLocation(location);
            setFilteredJobs(jobs.filter(job => job.location === location));
        };

    };

    const handleFilterPrice = () => {
        const order = sortOrder === 'asc' ? 'desc' : 'asc';
        setSortOrder(order);
        setFilteredJobs(prevJobs =>
            prevJobs.slice().sort((a, b) => (order === 'desc' ? a.price - b.price : b.price - a.price))
        );
    };

    const handleSearch = (query) => {
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

                <TouchableOpacity style={styles.button}><Image resizeMode='contain' source={require('../../assets/hc.jpg')} style={styles.img} /></TouchableOpacity>
            </View>
            <View style={styles.a}>
                <View>
                    <TouchableOpacity onPress={toggleOptionsVisible} style={styles.b}>
                        <Text style={styles.c}>{selectedOption ? selectedOption.label : 'Price'}</Text>
                        <Feather name={optionsVisible ? 'chevron-up' : 'chevron-down'} size={24} color="#fff" />
                    </TouchableOpacity>
                    {optionsVisible && (
                        <ScrollView style={styles.d}>
                            {options.map((option) => (
                                <TouchableOpacity
                                    key={option.value}
                                    onPress={() => handleBothOptions(option)}
                                    style={styles.e}
                                >
                                    <Text style={styles.f}>{option.label}</Text>
                                </TouchableOpacity>
                            ))}
                        </ScrollView>
                    )}
                </View>
                <View>
                    
                    <TouchableOpacity onPress={toggleLocationsVisible} style={styles.cc}>
                        <Text style={styles.c}>{selectedLocation ? selectedLocation.location : 'Location'}</Text>
                        <Feather name={locationsVisible ? 'chevron-up' : 'chevron-down'} size={24} color="#fff" />
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
        width: '75%',
        marginTop: 80,
        marginLeft: 20,
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
    list: {
        padding: 20,
    },
    card: {
        height: 120,
        marginBottom: 20,
        borderRadius: 70,
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
        borderRadius: 70,
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
    a: {

        flexDirection: 'row',

        alignItems: "center",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

    },
    b: {
        flexDirection: 'row',
        backgroundColor: '#18C0C1',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 30,
        marginLeft: 20,
        padding: 20,
        width: 150,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10
    },
    c: {
        color: '#fff',
        fontSize: 15,
        width: 80,
        height: 20,
    },
    cc: {
        flexDirection: 'row',
        marginTop: 30,

        padding: 20,
        width: 150,
        alignItems: 'center',
        backgroundColor: '#18C0C1',
        justifyContent: 'space-between',
        marginLeft: 20,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10
    },
    d: {
        backgroundColor: '#18C0C1',
        width: 150,
        marginLeft: 20,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10


    },
    e: {
        padding: 10,
        marginVertical: 5,

    },
    f: {
        color: 'white',
        fontSize: 14,

    },
    cont: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
        borderRadius: 50,
        overflow: 'hidden',
    },
    img: {
        width: 40,
        height: 40,
        marginLeft: 20,
        marginBottom:400,
        borderRadius:50,
    },
    button: {
        position: 'absolute',
        top: -18,
        left: 280,
        borderRadius: 30,
        padding: 10,
        display:"flex",
        justifyContent:"space-between",
        
    },
});

export default Search;

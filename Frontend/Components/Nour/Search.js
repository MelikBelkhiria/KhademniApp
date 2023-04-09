import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, Image, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { Feather } from '@expo/vector-icons';
import Ionicons from '@expo/vector-icons/Ionicons'
import axios from 'axios'

const jobs = [
    { id: '1', name: 'Cuisinier', employer: 'Hippo', numberofstars: '4', price: 80, location: 'Bizert', image: require('../Ahmed/IMG_1368-Modifica_pp-1.jpg') },
    { id: '2', name: 'Jardinier', employer: 'Foulen Fouleni', numberofstars: '5', price: 65, location: 'Lac2', image: require('../Ahmed/IMG_1368-Modifica_pp-1.jpg') },
    { id: '3', name: 'Femme/Homme de menage', employer: 'Rand Om', numberofstars: '3', price: 85, location: 'Marsa', image: require('../Ahmed/IMG_1368-Modifica_pp-1.jpg') },
    { id: '4', name: 'UX Designer', employer: 'Orange', price: 350, numberofstars: '4', location: 'Marsa', image: require('../Ahmed/IMG_1368-Modifica_pp-1.jpg') },
];

const JobCard = ({ job,navigation }) => {

    const [saved, setsaved] = useState(false)

    const savejob = () => {
        setsaved(!saved)
    };
 
    return (
        <TouchableOpacity style={styles.card} onPress={() => navigation.navigate("Application", { 
            title: job.title,
            price: job.price,
            imageURI: job.imageURI,
            numberOfStars: job.numberOfStars,
            description: job.description,
            created_at: job.created_at,
            employer: job.employer,
            location: job.location,
            field: job.field,
            serviceId: job.service_id
          })}>
          <View>
            <Image source={{uri:job.imageURI}} style={styles.image} />
            <View style={styles.starscontainer}>
              <Ionicons style={styles.star} size={17} name="star"></Ionicons>
              <Text  style={styles.nbrstars} > {job.numberOfStars} </Text>
            </View>
          </View>
          <View style={styles.jobInfo}>
            <Text style={styles.name}>{job.title}</Text>
            <Text style={styles.price}>{job.price}€</Text>
            <Text style={styles.employer}>{job.employer}</Text>
            <Text style={styles.location}>{job.location}</Text>
          </View>
          <TouchableOpacity onPress={savejob} >
            {saved ? <Ionicons style={styles.save} name="bookmark" size={28}></Ionicons> : <Ionicons style={styles.save} name="bookmark-outline" size={28}></Ionicons> }
          </TouchableOpacity>
        </TouchableOpacity>
        
    );
};

const JobSearchPage = ({navigation}) => {
    const [jobss, setJobs] = useState([""]);
    const [filteredJobs, setFilteredJobs] = useState([]);
    const [sortOrder, setSortOrder] = useState('asc');
    const [selectedLocation, setSelectedLocation] = useState(null);
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedOption, setSelectedOption] = useState(false);
    const [optionsVisible, setOptionsVisible] = useState(false);
    const [locationsVisible, setLocationsVisible] = useState(false);

    const options = [
        { label: 'Ascending', value: 'asc' },
        { label: 'Descending', value: 'desc' },
    ];
    const locations = [
        { label: 'Lac2', value: 'L2' },
        { label: 'Marsa', value: 'M' },
        { label: 'Bizert', value: 'B'},
        { label: 'Tunis', value: 'T'},
        { label: 'Sousse', value: 'S' },
    ];

    useEffect(() => {
        axios.get('http://192.168.3.14:3001/SearchTasks')
          .then(response => {setJobs(response.data);
          setFilteredJobs(response.data)})
          .catch(error => console.error(error));
         
      }, []);


      console.log(jobss);


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
    const handleBothLocations = (location) => {
        handleFilterLocation(location.label);
        handleLocationsPress(location);
    };

    const handleLocationsPress = (location) => {
        setSelectedLocation(location);
        setLocationsVisible(false);
    };

    const toggleLocationsVisible = () => {
        setLocationsVisible(!locationsVisible);
    };

    const handleFilterLocation = (location) => {
        if (location == '') {
            setFilteredJobs(jobss);
        }
        else {
            setSelectedLocation(location);
            setFilteredJobs(jobss.filter(job => job.location === location));
        };

    };

    const handleFilterPrice = () => {
        const order = sortOrder === 'asc' ? 'desc' : 'asc';
        setSortOrder(order);
        setFilteredJobs(
            jobss.slice().sort((a, b) => (order === 'desc' ? b.price - a.price : a.price - b.price))
        );
    };

   const handleSearch = (query) => {
    setSearchQuery(query);
    setFilteredJobs(jobss.filter(job =>
        job.title.toLowerCase().includes(query.toLowerCase()) ||
        job.description.toLowerCase().includes(query.toLowerCase())
    ));
};




    return (


        <View style={styles.container}>

            <View style={styles.searchBarContainer}>
                <Ionicons name='search-outline' size={22}></Ionicons>
                <TextInput
                    placeholder="Search for jobs ..."
                    value={searchQuery}
                    onChangeText={handleSearch}
                />

               
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
                        <Text style={styles.c}>{selectedLocation ? selectedLocation.label : 'Location'}</Text>
                        <Feather name={locationsVisible ? 'chevron-up' : 'chevron-down'} size={24} color="#fff" />
                    </TouchableOpacity>

                    {locationsVisible && (
                        <ScrollView style={styles.d}>
                            {locations.map((location) => (
                                <TouchableOpacity
                                    key={location.value}
                                    onPress={() => handleBothLocations(location)}
                                    style={styles.e}
                                >
                                    <Text style={styles.f}>{location.label}</Text>
                                </TouchableOpacity>
                            ))}
                        </ScrollView>
                    )}
                </View>


            </View>
            <FlatList
                data={filteredJobs}
                keyExtractor={job => job.id}
                renderItem={({ item }) => <JobCard job={item} navigation={navigation}/>}
                contentContainerStyle={styles.list}
                
            />
        </View>

    );
};

const styles = StyleSheet.create({

    searchBarContainer: {
        width: '90%',

        marginLeft: 15,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'white',
        borderRadius: 20,
        paddingHorizontal: 25,
        marginVertical: 20,
        borderColor: 'white',
        borderWidth: 1,
        height: 45,
        backgroundColor:'#e7f6f5'
        ,marginTop:50
    },
    container: {
        flex: 1,
        backgroundColor: '#FFF',
    },
    starscontainer:{
        flexDirection:"row"
    },
    nbrstars:{
        marginTop:3,
        marginLeft:3,
        fontSize:16
    },
    list: {
        padding: 20,
    },
    card: {
        height: 120,
        marginBottom: 20,
        borderRadius: 20,
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
        width: 70,
        height: 70,
        borderRadius: 50,
        marginTop: 14,
        marginLeft: 10
    },
    jobInfo: {
        flex: 1,
        padding: 10,
        justifyContent: 'space-around',
        paddingLeft: 25
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
        marginTop: 0,
        marginBottom: 20

    },
    b: {
        flexDirection: 'row',
        backgroundColor: '#18C0C1',
        alignItems: 'center',
        justifyContent: 'space-between',
 
        marginLeft: 20,
        padding: 18,
        width: 150,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,

    },
    c: {
        color: '#fff',
        fontSize: 15,
        width: 80,
        height: 20,
    },
    cc: {
        flexDirection: 'row',
      
        padding: 18,
        width: 150,
        alignItems: 'center',
        backgroundColor: '#18C0C1',
        justifyContent: 'space-between',
        marginLeft: 20,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,

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
        width: 50,
        height: 50,
        marginLeft: 20,
        marginBottom: 400,
        borderRadius: 50,
    },
    button: {
        position: 'absolute',
        top: -16,
        left: 283,
        borderRadius: 30,
        padding: 10,
        display: "flex",
        justifyContent: "space-between",

    },
    star: {
        color: '#D5AB55',
        marginTop: 4,
        marginLeft: 20
    },
    save: {
        marginRight: 16,
        marginTop: 10,

    }
});

export default JobSearchPage;
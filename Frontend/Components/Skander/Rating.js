import React, { useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    KeyboardAvoidingView,
    TextInput,
    TouchableOpacity
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';


const FeedbackScreen = ({ route, navigation }) => {
    const { service_id } = route.params;

    const [rating, setRating] = useState(0);
    const [feedback, setFeedback] = useState('');

    const handleRatingChange = (value) => {
        setRating(value);
    };

    const handleFeedbackChange = (value) => {
        setFeedback(value);
    };

    return (
        <KeyboardAvoidingView style={styles.container} behavior='padding'>
            <Text style={styles.title}>
                Congratulations you completed the service!
            </Text>
            <View style={styles.ratingContainer}>
                <Text style={styles.label}>Rate how the service went:</Text>
                <View style={styles.starsContainer}>
                    {[1, 2, 3, 4, 5].map((i) => (
                        <Ionicons
                            key={i}
                            name="star"
                            size={40}
                            color={i <= rating ? 'gold' : 'gray'}
                            style={styles.star}
                            onPress={() => handleRatingChange(i)}
                        />
                    ))}
                </View>
            </View>
            <View style={styles.feedbackContainer}>
                <Text style={styles.label}>Leave a comment about the experience:</Text>
                <TextInput
                    placeholder="Type your feedback here"
                    value={feedback}
                    onChangeText={handleFeedbackChange}
                    multiline={true}
                    style={styles.feedbackInput}
                    textAlignVertical='top'
                />
            </View>
            <TouchableOpacity
                onPress={async () => {
                    try {
                        console.log(service_id)
                        const token = await AsyncStorage.getItem('authToken');

                        const response = await axios.post("http://192.168.1.25:3001/api/submit-rating", {
                            rating,
                            feedback,
                            service_id,
                        }, {
                            headers: {
                                'Authorization': `Bearer ${token}`,
                            },
                        });

                        if (response.status === 200 || response.status === 201) {
                            console.log(response.data.message);
                            navigation.goBack();
                        }
                    } catch (error) {
                        console.log(error);
                    }
                }}
                style={[
                    styles.submitButton,
                    {
                        backgroundColor: !rating || !feedback ? "grey" : "#18C0C1",
                        opacity: !rating || !feedback ? 0.5 : 1
                    }
                ]}
                disabled={!rating || !feedback}
            >
                <Text style={styles.submitText}>Submit Feedback</Text>
            </TouchableOpacity>

        </KeyboardAvoidingView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: "white",

    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginVertical: 30,
        textAlign: 'center',
        color: "black"
    },
    ratingContainer: {
        alignItems: 'center',
        marginBottom: 20
    },
    label: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
        color: "#18C0C1",
        marginTop: 20
    },
    starsContainer: {
        flexDirection: 'row',
        marginTop: 10
    },
    star: {
        marginHorizontal: 5
    },
    feedbackContainer: {
        width: '100%',
        marginBottom: 20,
    },
    feedbackInput: {
        height: 150,
        borderWidth: 1,
        borderColor: "#18C0C1",
        borderRadius: 10,
        padding: 15

    },
    submitButton: {
        height: 55,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        marginBottom: 20
    },
    submitText: {
        color: "white",
        fontWeight: 'bold',
        fontSize: 18
    }
});

export default FeedbackScreen;

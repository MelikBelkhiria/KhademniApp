import React from 'react'
import {View, Text, StyleSheet, TextInput} from 'react-native'
import COLORS from '../../conts/colors'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Colors } from 'react-native/Libraries/NewAppScreen';

const Input = ({
    label,
    iconName,
    error,
    password,
    onFocus = () =>{},
    ...props
}) => {
    
    const [isFocused, setIsFocused] = React.useState(false);
    const [hidePassword, setHidePassword] = React.useState(password);
   return (
    <View style={{marginBottom: 20}}>
        <Text style={style.label}>{label}</Text>    
        <View style={[style.inputContainer, {borderColor : error ? COLORS.red: isFocused ? COLORS.green:COLORS.grey}]}>
            <Icon name={iconName} style={{fontSize: 22, color: COLORS.green, marginRight: 10}}/>
            <TextInput 
            secureTextEntry={hidePassword}
            autoCorrect={false}
            onFocus={() => {
                onFocus();
                setIsFocused(true);
            }}
            onBlur={()=>{
                setIsFocused(false);
            }}
            style={{color: COLORS.black, flex: 1}} {...props} />


            {password && ( <Icon 
                onPress={()=>setHidePassword(!hidePassword)}
                style={{fontSize: 22, color: COLORS.green}}
                name ={hidePassword ? "eye-outline" : "eye-off-outline"}
                />)}
           

        </View>
        {error && <Text style={{color:COLORS.red, fontSize: 12, marginTop: 7}}> {error} </Text>}
    </View>
  )
}

const style = StyleSheet.create({
    label:{
        marginVertical: 5,
        fontSize: 14,
        color: COLORS.grey
    },

    inputContainer:{
        height:55,
        backgroundColor: COLORS.light,
        flexDirection:'row',
        paddingHorizontal: 15,
        borderWidth: 0.5,
        borderRadius: 8,
        alignItems: 'center',
    }
})

export default Input


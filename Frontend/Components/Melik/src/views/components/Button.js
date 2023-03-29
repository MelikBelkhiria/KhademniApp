import React from 'react';
import { TouchableOpacity, Text} from 'react-native';
import COLORS from '../../conts/colors';

export default function Button({title, onPress= () => {} }) {
  return (
    <TouchableOpacity onPress={onPress} style={{
        height: 55, width: '100%', backgroundColor:COLORS.green, justifyContent:'center', alignItems:'center', borderRadius:10}}>
        <Text style={{color:COLORS.white, fontWeight: 'bold', fontSize: 18  }}>{title}</Text>
        
        </TouchableOpacity>
    )
}

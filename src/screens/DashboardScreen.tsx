import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/AppNavigator';
import Colors from '../constants/Colors';

type Props = NativeStackScreenProps<RootStackParamList, 'Dashboard'>;

export default function DashboardScreen({ navigation }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Dashboard Placeholder</Text>
      <TouchableOpacity
        style={[styles.button,{backgroundColor:Colors.primary}]}
        onPress={()=>navigation.navigate('CreateProfile')}
      >
        <Text style={styles.buttonText}>Create Profile</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container:  { flex:1, backgroundColor:'#fff', justifyContent:'center', alignItems:'center' },
  text:       { fontSize:20, marginBottom:20 },
  button:     { paddingVertical:12, paddingHorizontal:20, borderRadius:8 },
  buttonText: { color:Colors.text, fontSize:16, fontWeight:'600' },
});
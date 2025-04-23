import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function CreateProfileScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Create Profile Placeholder</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{ flex:1, backgroundColor:'#fff', justifyContent:'center', alignItems:'center' },
  text:     { fontSize:20 },
});
import React from 'react';
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native';
import Colors from '../constants/Colors';

interface Props {
  checked: boolean;
  label:   string;
  onToggle: () => void;
}

export default function Checkbox({ checked, label, onToggle }: Props) {
  return (
    <TouchableOpacity style={styles.container} onPress={onToggle}>
      <View style={[styles.box, checked && styles.boxChecked]}>
        {checked && <Text style={styles.tick}>✓</Text>}
      </View>
      <Text style={styles.label}>{label}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container:   { flexDirection:'row', alignItems:'center', marginBottom:20 },
  box:         {
    width:20, height:20, borderWidth:1,
    borderColor:Colors.border, borderRadius:4,
    marginRight:10, justifyContent:'center', alignItems:'center'
  },
  boxChecked:  { backgroundColor:Colors.accent, borderColor:Colors.accent },
  tick:        { color:'#fff', fontSize:14 },
  label:       { flex:1, fontSize:12, color:'#555' },
});
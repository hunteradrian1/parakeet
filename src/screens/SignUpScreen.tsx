import React, { useState } from 'react';
import {
  ScrollView, Image, Text, TextInput,
  TouchableOpacity, StyleSheet
} from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/AppNavigator';
import parakeetImg from '../../assets/parakeet.png';
import Colors from '../constants/Colors';
import Checkbox from '../components/Checkbox';

type Props = NativeStackScreenProps<RootStackParamList, 'SignUp'>;

export default function SignUpScreen({ navigation }: Props) {
  const [fullName, setFullName]       = useState('');
  const [email, setEmail]             = useState('');
  const [password, setPassword]       = useState('');
  const [confirmPassword, setConfirm] = useState('');
  const [agree, setAgree]             = useState(false);

  const handleCreate = () => navigation.replace('Dashboard');

  return (
    <ScrollView contentContainerStyle={[styles.container,{backgroundColor:Colors.background}]}>
      <Image source={parakeetImg} style={styles.logo} resizeMode="contain" />

      <Text style={styles.title}>
        <Text>Join the </Text>
        <Text style={{ color:Colors.accent }}>Chatter.</Text>
      </Text>

      {[
        { placeholder:'Full Name (Stays Between Us)', value:fullName, onChange:setFullName },
        { placeholder:'Email Address', value:email, keyboard:'email-address', autoCap:'none', onChange:setEmail },
        { placeholder:'Create Password', value:password, secure:true, onChange:setPassword },
        { placeholder:'Confirm Password', value:confirmPassword, secure:true, onChange:setConfirm },
      ].map((f,i)=>(
        <TextInput
          key={i}
          style={styles.input}
          placeholder={f.placeholder}
          value={f.value}
          onChangeText={f.onChange}
          keyboardType={f.keyboard as any}
          autoCapitalize={f.autoCap as any}
          secureTextEntry={f.secure}
        />
      ))}

      <Checkbox
        checked={agree}
        label="I have read and agree to the Terms and Conditions and Community Guidelines"
        onToggle={()=>setAgree(!agree)}
      />

      <TouchableOpacity style={[styles.button,{backgroundColor:Colors.primary}]} onPress={handleCreate}>
        <Text style={styles.buttonText}>CREATE ACCOUNT</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container:  { flexGrow:1, alignItems:'center', justifyContent:'center', padding:20 },
  logo:       { width:150, height:150, marginBottom:20 },
  title:      { fontSize:24, fontWeight:'600', marginBottom:20 },
  input:      {
    width:'100%', backgroundColor:'#fff', borderWidth:1,
    borderColor:Colors.border, borderRadius:8,
    paddingHorizontal:15, paddingVertical:12, marginBottom:15,
  },
  button:     { width:'100%', paddingVertical:15, borderRadius:8, alignItems:'center', marginBottom:40 },
  buttonText: { color:Colors.text, fontSize:16, fontWeight:'600' },
});
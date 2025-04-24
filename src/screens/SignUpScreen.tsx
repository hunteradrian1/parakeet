import React, { useState } from 'react';
import { ScrollView, View, StyleSheet } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import TextInputField from '../components/TextInputField';
import Checkbox from '../components/Checkbox';
import Button from '../components/Button';
import Colors from '../constants/Colors';
import Spacing from '../constants/Spacing';

type Props = NativeStackScreenProps<RootStackParamList, 'SignUp'>;
export default function SignUpScreen({ navigation }: Props) {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');
  const [agree, setAgree] = useState(false);
  return (
    <ScrollView contentContainerStyle={styles.container} keyboardShouldPersistTaps="handled" accessible accessibilityLabel="Sign Up Form">\n      <View style={styles.inner}>\n        <TextInputField label="Full Name" placeholder="Enter your full name" value={fullName} onChangeText={setFullName} />\n        <TextInputField label="Email Address" placeholder="Enter your email" keyboardType="email-address" autoCapitalize="none" value={email} onChangeText={setEmail} />\n        <TextInputField label="Password" placeholder="Create a password" secure value={password} onChangeText={setPassword} />\n        <TextInputField label="Confirm Password" placeholder="Re-enter password" secure value={confirm} onChangeText={setConfirm} />\n        <Checkbox checked={agree} label="I agree to Terms & Conditions" onToggle={() => setAgree(!agree)} />\n        <Button title="CREATE ACCOUNT" onPress={() => navigation.replace('Dashboard')} disabled={!agree} accessibilityLabel="Create your account" accessibilityHint="Navigates to the dashboard" />\n      </View>\n    </ScrollView>\n  );\n}\nconst styles = StyleSheet.create({ container: { flexGrow: 1, backgroundColor: Colors.background, padding: Spacing.large, justifyContent: 'center' }, inner: { alignItems: 'stretch' } });

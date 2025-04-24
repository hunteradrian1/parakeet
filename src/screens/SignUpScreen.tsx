import React, { useState } from 'react';
import { ScrollView, View, StyleSheet, Alert } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/AppNavigator';
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

  const handleCreate = () => {
    if (password !== confirm) {
      Alert.alert('Error', 'Passwords do not match');
      return;
    }
    navigation.replace('Dashboard');
  };

  return (
    <ScrollView
      contentContainerStyle={styles.container}
      keyboardShouldPersistTaps="handled"
      accessible
      accessibilityLabel="Sign Up Form"
    >
      <View style={styles.inner}>
        <TextInputField label="Full Name" placeholder="Enter your full name" value={fullName} onChangeText={setFullName} />
        <TextInputField label="Email Address" placeholder="Enter your email" keyboardType="email-address" autoCapitalize="none" value={email} onChangeText={setEmail} />
        <TextInputField label="Password" placeholder="Create a password" secure value={password} onChangeText={setPassword} />
        <TextInputField label="Confirm Password" placeholder="Re-enter password" secure value={confirm} onChangeText={setConfirm} />
        <Checkbox checked={agree} label="I agree to Terms & Conditions" onToggle={() => setAgree(!agree)} />
        <Button title="CREATE ACCOUNT" onPress={handleCreate} disabled={!agree} accessibilityLabel="Create your account" accessibilityHint="Navigates to the dashboard" />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flexGrow: 1, backgroundColor: Colors.background, padding: Spacing.large, justifyContent: 'center' },
  inner: { alignItems: 'stretch' },
});
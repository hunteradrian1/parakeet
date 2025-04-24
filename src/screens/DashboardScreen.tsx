import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import Button from '../components/Button';
import Colors from '../constants/Colors';
import Spacing from '../constants/Spacing';
import Typography from '../constants/Typography';

type Props = NativeStackScreenProps<RootStackParamList, 'Dashboard'>;
export default function DashboardScreen({ navigation }: Props) {
  return (
    <View style={styles.container} accessible accessibilityRole="header" accessibilityLabel="Dashboard Screen">
      <Text style={styles.title}>Welcome to Parakeet!</Text>
      <Button title="Create Profile" onPress={() => navigation.navigate('CreateProfile')} accessibilityLabel="Go to Create Profile" accessibilityHint="Opens profile creation screen" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: Colors.background, justifyContent: 'center', alignItems: 'center', padding: Spacing.large },
  title: { fontSize: Typography.fontXLarge, color: Colors.text, marginBottom: Spacing.large, textAlign: 'center' },
});

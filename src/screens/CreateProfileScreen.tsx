import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Colors from '../constants/Colors';
import Spacing from '../constants/Spacing';
import Typography from '../constants/Typography';

export default function CreateProfileScreen() {
  return (
    <View style={styles.container} accessible accessibilityRole="text" accessibilityLabel="Create Profile Screen">
      <Text style={styles.text}>Create Profile Placeholder</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: Colors.background, justifyContent: 'center', alignItems: 'center', padding: Spacing.large },
  text: { fontSize: Typography.fontLarge, color: Colors.text },
});

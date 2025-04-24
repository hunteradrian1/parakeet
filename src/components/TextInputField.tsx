import React from 'react';
import { View, TextInput, StyleSheet, Text } from 'react-native';
import Colors from '../constants/Colors';
import Spacing from '../constants/Spacing';
import Typography from '../constants/Typography';

interface Props {
  label: string;
  placeholder: string;
  value: string;
  onChangeText: (text: string) => void;
  secure?: boolean;
  keyboardType?: any;
  autoCapitalize?: 'none' | 'sentences' | 'words' | 'characters';
}

export default function TextInputField({ label, placeholder, value, onChangeText, secure = false, keyboardType = 'default', autoCapitalize = 'none' }: Props) {
  return (
    <View style={styles.container} accessible accessibilityRole="text" accessibilityLabel={label}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        placeholderTextColor={Colors.border}
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={secure}
        keyboardType={keyboardType}
        autoCapitalize={autoCapitalize}
        accessibilityHint={placeholder}
        importantForAutofill="yes"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { width: '100%', marginBottom: Spacing.medium },
  label: { fontSize: Typography.fontSmall, color: Colors.text, marginBottom: Spacing.small },
  input: {
    backgroundColor: Colors.background,
    borderWidth: 1,
    borderColor: Colors.parakeetBlue,
    borderRadius: 24,
    padding: Spacing.medium,
    fontSize: Typography.fontMedium,
    color: Colors.text,
  },
});
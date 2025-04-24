import React from 'react';
import { TouchableOpacity, Text, StyleSheet, ActivityIndicator } from 'react-native';
import Colors from '../constants/Colors';
import Spacing from '../constants/Spacing';
import Typography from '../constants/Typography';

interface Props {
  title: string;
  onPress: () => void;
  accessibilityLabel?: string;
  accessibilityHint?: string;
  loading?: boolean;
  disabled?: boolean;
}

export default function Button({ title, onPress, accessibilityLabel, accessibilityHint, loading = false, disabled = false }: Props) {
  return (
    <TouchableOpacity
      style={[styles.button, (disabled || loading) && styles.disabled]}
      onPress={onPress}
      accessibilityRole="button"
      accessibilityLabel={accessibilityLabel || title}
      accessibilityHint={accessibilityHint || ''}
      activeOpacity={0.8}
      disabled={disabled || loading}
      hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
    >
      {loading ? (
        <ActivityIndicator size="small" color={Colors.background} />
      ) : (
        <Text style={styles.text}>{title}</Text>
      )}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: Colors.parakeetGreen,
    paddingVertical: Spacing.medium,
    paddingHorizontal: Spacing.large,
    borderRadius: 24,
    alignItems: 'center',
    marginVertical: Spacing.small,
    borderWidth: 2,
    borderColor: Colors.parakeetBlue,
  },
  disabled: {
    backgroundColor: Colors.disabled,
    borderColor: Colors.border,
  },
  text: {
    color: Colors.background,
    fontSize: Typography.fontMedium,
    fontWeight: '600',
  },
});
import React from 'react';
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native';
import Colors from '../constants/Colors';
import Spacing from '../constants/Spacing';
import Typography from '../constants/Typography';

interface Props {
  checked: boolean;
  label: string;
  onToggle: () => void;
}

export default function Checkbox({ checked, label, onToggle }: Props) {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={onToggle}
      accessibilityRole="checkbox"
      accessibilityState={{ checked }}
      accessibilityLabel={label}
      accessibilityHint={checked ? 'Checked' : 'Unchecked'}
      hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
    >
      <View style={[styles.box, checked && styles.boxChecked]}>        
        {checked && <Text style={styles.tick}>✓</Text>}
      </View>
      <Text style={styles.label}>{label}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: { minHeight: 44, flexDirection: 'row', alignItems: 'center', marginBottom: Spacing.medium },
  box: {
    width: 28,
    height: 28,
    borderWidth: 2,
    borderColor: Colors.parakeetBlue,
    borderRadius: 6,
    marginRight: Spacing.small,
    justifyContent: 'center',
    alignItems: 'center',
  },
  boxChecked: { backgroundColor: Colors.warmYellow, borderColor: Colors.warmYellow },
  tick: { color: Colors.background, fontSize: Typography.fontSmall },
  label: { fontSize: Typography.fontMedium, color: Colors.text, flexShrink: 1 },
});
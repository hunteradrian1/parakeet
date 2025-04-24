import React, { useEffect } from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/AppNavigator';
import Colors from '../constants/Colors';
import Spacing from '../constants/Spacing';

const parakeetLogo = require('../../assets/parakeet.jpeg');

type Props = NativeStackScreenProps<RootStackParamList, 'Splash'>;

export default function SplashScreen({ navigation }: Props) {
  useEffect(() => {
    const timer = setTimeout(() => navigation.replace('SignUp'), 3000);
    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <View style={styles.container} accessible accessibilityRole="image" accessibilityLabel="Parakeet logo">
      <Image source={parakeetLogo} style={styles.logo} resizeMode="contain" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
    justifyContent: 'center',
    alignItems: 'center',
    padding: Spacing.large,
  },
  logo: {
    width: 220,
    height: 220,
  },
});
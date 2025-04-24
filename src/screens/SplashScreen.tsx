import React, { useEffect } from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/AppNavigator';
import Colors from '../constants/Colors';
import Spacing from '../constants/Spacing';

const parakeetGreenImg = require('../../assets/parakeet_green.png');
const parakeetBlueImg  = require('../../assets/parakeet_blue.png');

type Props = NativeStackScreenProps<RootStackParamList, 'Splash'>;

export default function SplashScreen({ navigation }: Props) {
  useEffect(() => {
    const timer = setTimeout(() => navigation.replace('SignUp'), 3000);
    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <View style={styles.container} accessible accessibilityRole="imagegroup" accessibilityLabel="Two parakeets facing each other">
      <Image source={parakeetGreenImg} style={styles.logo} resizeMode="contain" accessible accessibilityLabel="Green parakeet" />
      <Image source={parakeetBlueImg}  style={styles.logo} resizeMode="contain" accessible accessibilityLabel="Blue parakeet" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: Colors.background, flexDirection: 'row', justifyContent: 'center', alignItems: 'center', padding: Spacing.large },
  logo: { width: 150, height: 150, marginHorizontal: Spacing.small },
});

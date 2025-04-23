import React, { useEffect } from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/AppNavigator';
import parakeetImg from '../../assets/parakeet.png';
import Colors from '../constants/Colors';

type Props = NativeStackScreenProps<RootStackParamList, 'Splash'>;

export default function SplashScreen({ navigation }: Props) {
  useEffect(() => {
    const t = setTimeout(() => navigation.replace('SignUp'), 5000);
    return () => clearTimeout(t);
  }, [navigation]);

  return (
    <View style={[styles.container,{ backgroundColor:Colors.background }]}>
      <Image source={parakeetImg} style={styles.logo} resizeMode="contain" />
    </View>
  );
}

const styles = StyleSheet.create({
  container:{ flex:1, justifyContent:'center', alignItems:'center' },
  logo:     { width:200, height:200 },
});
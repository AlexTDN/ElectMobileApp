import React from 'react';
import { ImageBackground } from 'react-native';
import { Image } from 'react-native';
import { StyleSheet, Text, View, Button } from 'react-native';

const SplashScreen = ({ navigation }) => {
  setTimeout(() => {
    navigation.replace('Onboarding');
  }, 3000);
  return (
    <View style={styles.container}>
      <ImageBackground
        style={{ width: '100%', height: '100%' }}
        source={require('../assets/splashscreen.png')}
      />
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

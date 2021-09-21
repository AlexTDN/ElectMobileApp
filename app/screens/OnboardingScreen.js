import React from 'react';
import { Button } from 'react-native';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import Onboarding from 'react-native-onboarding-swiper';

const Dots = ({ selected }) => {
  let backgroundColor;

  backgroundColor = selected ? 'rgba(0,0,0,0.8)' : 'rgba(0,0,0,0.3)';

  return (
    <View
      style={{
        width: 30,
        height: 5,
        marginHorizontal: 3,
        backgroundColor,
      }}
    />
  );
};

const Skip = ({ ...props }) => (
  <TouchableOpacity style={{ marginHorizontal: 45 }} {...props}>
    <Text style={{ fontSize: 20 }}>Skip</Text>
  </TouchableOpacity>
);

const Next = ({ ...props }) => (
  <TouchableOpacity style={{ marginHorizontal: 45 }} {...props}>
    <Text style={{ fontSize: 20 }}>Next</Text>
  </TouchableOpacity>
);
const Done = ({ ...props }) => (
  <TouchableOpacity style={{ marginHorizontal: 45 }} {...props}>
    <Text style={{ fontSize: 20 }}>Done</Text>
  </TouchableOpacity>
);

const OnboardingScreen = ({ navigation }) => {
  return (
    <Onboarding
      bottomBarHighlight={false}
      SkipButtonComponent={Skip}
      NextButtonComponent={Next}
      DoneButtonComponent={Done}
      DotComponent={Dots}
      onSkip={() => navigation.replace('Login')}
      onDone={() => navigation.replace('Login')}
      pages={[
        {
          backgroundColor: '#FFF0DF',
          image: (
            <Image
              style={styles.image1}
              source={require('../assets/trees.png')}
            />
          ),
          title: 'Local',
          subtitle:
            'Engage in your local community by providing or receiving services that fit your needs.',
        },
        {
          backgroundColor: '#FFF0DF',
          image: <Image source={require('../assets/person.png')} />,
          title: 'Profile',
          subtitle:
            'Market yourself by uploading your work portfolio, documentation, and professional headshot.',
        },
      ]}
    />
  );
};

export default OnboardingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image1: {
    marginTop: 10,
  },
});

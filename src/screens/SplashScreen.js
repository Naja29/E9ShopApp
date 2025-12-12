import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  Image,
} from 'react-native';
import { COLORS } from '../constants/colors';
import { useNavigation } from '@react-navigation/native';

const { width, height } = Dimensions.get('window');

export default function SplashScreen() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      {/* Background Circles */}
      <View style={styles.circleTop} />
      <View style={styles.circleBottom} />

      {/* Content */}
      <View style={styles.content}>
        {/* Logo Image */}
        <View style={styles.logoContainer}>
          <Image
            source={require('../assets/images/e9pay-logo.png')}
            style={styles.logoImage}
            resizeMode="contain"
          />
        </View>

        {/* Shop Title */}
        <Text style={styles.title}>SHOP</Text>
        <Text style={styles.subtitle}>It's Your Place</Text>

        {/* Spacer */}
        <View style={styles.spacer} />

        {/* Get Started Button */}
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Login')}
        >
          <Text style={styles.buttonText}>Let's get started</Text>
        </TouchableOpacity>

        {/* Already have account link */}
        <TouchableOpacity
          style={styles.linkContainer}
          onPress={() => navigation.navigate('Login')}
        >
          <Text style={styles.linkText}>I already have an account</Text>
          <Text style={styles.arrow}>→</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#C1D7D8',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 30,
    zIndex: 1,
  },
  logoContainer: {
    marginTop:150,
    backgroundColor: COLORS.white,
    borderRadius: 100,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
  },
  logoImage: {
    width: 120,
    height: 120,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: COLORS.black,
    marginTop: 80,
    letterSpacing: 2,
  },
  subtitle: {
    fontSize: 16,
    color: COLORS.gray,
    marginTop: 5,
  },
  spacer: {
    flex: 1,
  },
  button: {
    backgroundColor: COLORS.primary,
    paddingVertical: 16,
    paddingHorizontal: 60,
    borderRadius: 30,
    marginBottom: 30,
    width: width - 60,
    alignItems: 'center',
    shadowColor: COLORS.primary,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 8,
  },
  buttonText: {
    color: COLORS.white,
    fontSize: 18,
    fontWeight: '600',
  },
  linkContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 80,
  },
  linkText: {
    color: COLORS.primary,
    fontSize: 15,
    fontWeight: '500',
  },
  arrow: {
    color: COLORS.primary,
    fontSize: 18,
    marginLeft: 5,
    fontWeight: 'bold',
  },
});
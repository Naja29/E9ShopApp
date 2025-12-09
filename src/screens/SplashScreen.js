import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
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
        {/* Logo */}
        <View style={styles.logoContainer}>
          <View style={styles.logoBox}>
            <Text style={styles.logoText}>E9</Text>
            <Text style={styles.logoTextSmall}>pay</Text>
            <View style={styles.redDot} />
          </View>
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
    backgroundColor: '#F5F5F5',
  },
  circleTop: {
    position: 'absolute',
    width: width * 1.2,
    height: width * 1.2,
    borderRadius: (width * 1.2) / 2,
    backgroundColor: '#0066CC',
    top: -width * 0.6,
    right: -width * 0.3,
    opacity: 0.9,
  },
  circleBottom: {
    position: 'absolute',
    width: width * 0.8,
    height: width * 0.8,
    borderRadius: (width * 0.8) / 2,
    backgroundColor: '#E8F4FF',
    bottom: -width * 0.4,
    left: -width * 0.2,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 30,
    zIndex: 1,
  },
  logoContainer: {
    marginBottom: 20,
  },
  logoBox: {
    width: 100,
    height: 100,
    backgroundColor: COLORS.white,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
    position: 'relative',
  },
  logoText: {
    fontSize: 36,
    fontWeight: 'bold',
    color: COLORS.black,
  },
  logoTextSmall: {
    fontSize: 20,
    fontWeight: '600',
    color: COLORS.black,
    marginTop: -5,
  },
  redDot: {
    position: 'absolute',
    top: 15,
    right: 15,
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: COLORS.red,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: COLORS.black,
    marginTop: 20,
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
    marginBottom: 20,
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
    marginBottom: 40,
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
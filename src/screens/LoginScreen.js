import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Dimensions,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from 'react-native';
import { COLORS } from '../constants/colors';
import { useNavigation } from '@react-navigation/native';

const { width, height } = Dimensions.get('window');

export default function LoginScreen() {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');

  const handleLogin = () => {
    // Navigate to Home (Main Tabs)
    navigation.navigate('Main');
  };

  const handleCancel = () => {
    // Go back to Splash
    navigation.goBack();
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
    >
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        keyboardShouldPersistTaps="handled"
      >
        {/* Background Circle */}
        <Image
          source={require('../assets/images/circle-bg.png')}
          style={styles.circleBgImage}
          resizeMode="cover"
        />

        {/* Content */}
        <View style={styles.content}>
          {/* Title */}
          <Text style={styles.title}>Login</Text>
          <Text style={styles.subtitle}>Good to see you back! ❤️</Text>

          {/* Input Container */}
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder="Enter your email or username"
              placeholderTextColor={COLORS.gray}
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
              autoCapitalize="none"
              autoCorrect={false}
            />
          </View>

          {/* Next Button */}
          <TouchableOpacity
            style={[
              styles.button,
              !email && styles.buttonDisabled,
            ]}
            onPress={handleLogin}
            disabled={!email}
          >
            <Text style={styles.buttonText}>Next</Text>
          </TouchableOpacity>

          {/* Spacer */}
          <View style={styles.spacer} />

          {/* Cancel Link */}
          <TouchableOpacity
            style={styles.cancelContainer}
            onPress={handleCancel}
          >
            <Text style={styles.cancelText}>Cancel</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#C1D7D8',
  },
  scrollContent: {
    flexGrow: 1,
  },
  circleBgImage: {
  position: 'absolute',
  width: width * 1.5,
  height: width * 1.5,
  top: -width * 0.4,
  right: -width * 0.2,
},
  // circleTop: {
  //   position: 'absolute',
  //   width: width * 1.5,
  //   height: width * 1.5,
  //   borderRadius: (width * 1.5) / 2,
  //   backgroundColor: '#0066CC',
  //   top: -width * 0.8,
  //   right: -width * 0.5,
  //   opacity: 0.9,
  // },
  content: {
    flex: 1,
    paddingHorizontal: 30,
    paddingTop: height * 0.40,
    zIndex: 1,
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    color: COLORS.black,
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: COLORS.black,
    marginBottom: 50,
  },
  inputContainer: {
    marginBottom: 30,
  },
  input: {
    backgroundColor: COLORS.white,
    borderRadius: 12,
    paddingVertical: 16,
    paddingHorizontal: 20,
    fontSize: 16,
    color: COLORS.black,
    borderWidth: 1,
    borderColor: COLORS.border,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  button: {
    backgroundColor: COLORS.primary,
    paddingVertical: 16,
    borderRadius: 20,
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
  buttonDisabled: {
    backgroundColor: COLORS.blue,
    shadowOpacity: 0,
    elevation: 0,
  },
  buttonText: {
    color: COLORS.white,
    fontSize: 18,
    fontWeight: '600',
  },
  spacer: {
    flex: 1,
  },
  cancelContainer: {
    alignItems: 'center',
    paddingVertical: 20,
    marginBottom: 30,
  },
  cancelText: {
    color: COLORS.gray,
    fontSize: 16,
    fontWeight: '500',
  },
});
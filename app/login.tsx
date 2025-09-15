import React, { useState } from 'react';
import { View, StyleSheet, KeyboardAvoidingView, Platform, Text } from 'react-native';
import Paper from 'react-native-paper';
import { Button, useTheme } from 'react-native-paper';
import { useRouter } from 'expo-router';
import { TextInput } from 'react-native';

export default function LoginScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const theme = useTheme();
  const router = useRouter();

  const handleLogin = () => {
    setLoading(true);
    // Simulación de login
    setTimeout(() => {
      setLoading(false);
//      router.replace('/landing');
    }, 1200);
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <View style={styles.inner}>
        <Text style={styles.title}>Iniciar sesión</Text>
        <TextInput
          placeholder="Correo electrónico"
          value={email}
          onChangeText={setEmail}
          autoCapitalize="none"
          keyboardType="email-address"
          style={styles.input}
        />
        <TextInput
          placeholder="Contraseña"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
          style={styles.input}
        />
        <Button
          mode="contained"
          onPress={handleLogin}
          loading={loading}
          disabled={!email || !password || loading}
          style={styles.button}
        >
          Entrar
        </Button>
        <Button
          mode="text"
         // onPress={() => router.push('/register')}
          style={styles.link}
        >
          ¿No tienes cuenta? Regístrate
        </Button>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  inner: {
    marginHorizontal: 24,
  },
  title: {
    marginBottom: 32,
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 26,
  },
  input: {
    marginBottom: 16,
  },
  button: {
    marginTop: 8,
    marginBottom: 16,
  },
  link: {
    alignSelf: 'center',
  },
});
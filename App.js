import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Pressable, StyleSheet, Text, View, Alert, SafeAreaView } from 'react-native';
import { HomeScreen } from './src/screens';

export default function App() {
  return (
    <SafeAreaView>
      <HomeScreen />
    </SafeAreaView>

  );
}


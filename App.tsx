import React from 'react';
import { useFonts, OpenSans_700Bold, OpenSans_400Regular } from '@expo-google-fonts/open-sans';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet,View } from 'react-native';
import Routes from './src/Config/Routes';
import AppLoading from 'expo-app-loading';


export default function App() {
  let [fontsLoaded] = useFonts({
    OpenSans_700Bold,
    OpenSans_400Regular
  });

  if(!fontsLoaded){
    return <AppLoading />;
  }

  return (
    <>
      <View style={styles.container}>
        <StatusBar style="auto" />
        <Routes/>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

import {
  View,
  Text,
  useColorScheme,
  SafeAreaView,
  StatusBar,
  StyleSheet,
} from 'react-native';
import React, {type PropsWithChildren} from 'react';
import {Colors} from 'react-native/Libraries/NewAppScreen';

export default function MainLayout({children}: PropsWithChildren) {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };
  return (
    <SafeAreaView style={{...backgroundStyle, ...styles.layout}}>
      <StatusBar
        barStyle={!isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      {children}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  layout: {
    flex: 1,
  },
});

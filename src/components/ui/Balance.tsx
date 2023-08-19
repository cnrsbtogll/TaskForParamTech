import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

export default function Balance({balance}: {balance: string}) {
  return (
    <View style={styles.container}>
      <Text style={styles.textGeneral}>GBP • Toplam bakiye</Text>
      <Text style={styles.textMoney}>{balance}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    marginLeft: 'auto',
    marginRight: 'auto',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
  },
  textGeneral: {
    fontSize: 10,
    color: '#fff',
    lineHeight: 13,
    fontFamily: 'Mark Pro',
  },
  textMoney: {
    fontSize: 32,
    color: '#fff',
    lineHeight: 40,
    fontFamily: 'Mark Pro',
  },
});

import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

type AccountInfo = {
  leftText: string;
  rightText: string;
  icon: React.JSX.Element;
};

export default function AccountInfo({icon, leftText, rightText}: AccountInfo) {
  return (
    <View style={styles.container}>
      <Text style={styles.leftText}>{leftText}</Text>
      <View style={styles.rightContainer}>
        <Text style={styles.leftText}>{rightText}</Text>
        {icon}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    width: 300,
    paddingHorizontal: 12,
    paddingVertical: 5.5,
    alignItems: 'center',
    justifyContent: 'space-between',
    marginLeft: 'auto',
    marginRight: 'auto',
    borderRadius: 99,
    borderColor: '#ffffff20',
    backgroundColor: '#ffffff05',
    borderWidth: 2,
  },
  leftText: {
    color: '#fff',
    fontFamily: 'Mark Pro',
  },
  rightContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 5,
  },
  rightText: {
    color: '#fff',
    fontFamily: 'Mark Pro',
  },
});

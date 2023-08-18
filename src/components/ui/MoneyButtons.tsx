import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

import MiIcon from 'react-native-vector-icons/MaterialIcons';
import MicIcon from 'react-native-vector-icons/MaterialCommunityIcons';

export default function MoneyButtons() {
  return (
    <View style={styles.container}>
      <Button
        text="Para Gönder"
        icon={<MiIcon name="person-add-alt" size={35} color={'#ffffff95'} />}
      />
      <View
        style={{
          backgroundColor: '#ffffff20',
          width: 1.5,
          height: 40,
          borderRadius: 99,
        }}
      />
      <Button
        text="Para Yükle"
        icon={<MicIcon name="credit-card-refund-outline" size={35} color={'#ffffff95'} />}
      />
    </View>
  );
}

type ButtonProps = {
  text: string;
  icon: React.JSX.Element;
};

function Button({icon, text}: ButtonProps) {
  return (
    <View style={styles.button}>
      {icon}
      <Text style={styles.buttonText}>{text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 25,
    borderTopWidth: 1.5,
    paddingTop: 10,
    borderColor: '#ffffff20',
  },
  button: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 5,
  },
  buttonText: {
    color: '#ffffff95',
    fontSize:16
  },
});

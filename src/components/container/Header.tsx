import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

import MciIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import IonIcon from 'react-native-vector-icons/Ionicons';

type Header = {
  name?: string;
};

export default function Header({name}: Header) {
  const user_name = name || 'Caner sabitoğulları';


  return (
    <View style={styles.container}>
      <View style={styles.circle}>
        <Text style={styles.circleText}>
          {user_name
            .toUpperCase()
            .split(' ')
            .map(_name => _name[0])
            .join('')}
        </Text>
        <View style={styles.circleEdit}>
          <MciIcon name="pencil" size={8} color={'#fff'} />
        </View>
      </View>

      <View style={styles.logo}>
        <Text style={styles.logoText}>PARAM</Text>
        <Text style={{...styles.logoText, ...styles.logoTextUk}}>UK</Text>
      </View>

      <View>
        <IonIcon name="notifications" size={32} color={'#fff'} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 32,
    width: 320,
    marginLeft: 'auto',
    marginRight: 'auto',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  },

  circle: {
    width: 32,
    height: 32,
    borderRadius: 32,
    backgroundColor: '#fff',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  circleEdit: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    backgroundColor: '#00BBB4',
    borderRadius: 100,
    borderColor: '#fff',
    borderWidth: 1.5,
  },
  circleText: {
    fontSize: 12,
    fontWeight: '500',
  },

  logo: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },

  logoText: {
    fontSize: 25,
    color: '#fff',
    fontWeight: '800',
  },

  logoTextUk: {
    color: '#00BBB4',
  },
});

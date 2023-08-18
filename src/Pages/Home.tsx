import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';

import Header from '../components/container/Header';
import Balance from '../components/ui/Balance';
import AccountInfo from '../components/ui/AccountInfo';

import IonIcon from 'react-native-vector-icons/Ionicons';
import MoneyButtons from '../components/ui/MoneyButtons';

export default function Home() {
  return (
    <View style={{flex: 1}}>
      {
        //Home Top
      }
      <LinearGradient
        colors={['#220C45', '#440E85']}
        angle={180}
        style={{flex: 5.5}}>
        <View style={styles.container}>
          <Header />
          <Balance balance="£19,600.75" />
          <View
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: 10,
              marginTop: 20,
            }}>
            <AccountInfo
              leftText="Hesap Numarası"
              rightText="00000000"
              icon={<IonIcon name="copy-outline" color={'#fff'} size={16} />}
            />
            <AccountInfo
              leftText="Sort Kod"
              rightText="04-04-11"
              icon={
                <IonIcon
                  name="checkmark-circle-outline"
                  color={'#fff'}
                  size={16}
                />
              }
            />
          </View>
          <MoneyButtons />
        </View>
      </LinearGradient>

      {
        //Home Bottom
      }
      <View style={{flex: 6}}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    top: 50,
  },
});

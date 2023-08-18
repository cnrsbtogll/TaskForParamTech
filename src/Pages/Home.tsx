import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';

import Header from '../components/container/Header';
import Balance from '../components/ui/Balance';
import AccountInfo from '../components/ui/AccountInfo';

import IonIcon from 'react-native-vector-icons/Ionicons';
import MoneyButtons from '../components/ui/MoneyButtons';
import Progress from '../components/ui/Progress';

export default function Home() {
    
  // Boş halini görmek için false yapın.
  const lastProgress = true;

  return (
    <View style={{flex: 1}}>
      {
        //Home Top
      }
      <LinearGradient
        colors={['#220C45', '#440E85']}
        angle={180}
        style={styles.topContainer}>
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
      <View style={styles.bottomContainer}>
        <View style={styles.bottomTitle}>
          <Text>Son Hareketler</Text>
          {lastProgress && (
            <Text style={styles.bottomTitleTextRight}>{'Tümü>>'}</Text>
          )}
        </View>

        <Progress empty={lastProgress} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    top: 50,
  },

  topContainer: {flex: 5.5},
  bottomContainer: {
    flex: 6,
    display: 'flex',
    alignItems: 'center',
    alignContent: 'center',
    paddingHorizontal: 20,
    top: 30,
  },
  bottomTitle: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
  },
  bottomTitleTextRight: {
    marginLeft: 'auto',
  },
});

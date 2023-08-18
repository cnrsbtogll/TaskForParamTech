import {View, StyleSheet, FlatList, Text} from 'react-native';
import React from 'react';

import ProgressJson from './../../data/Progress.json';

import MicIcon from 'react-native-vector-icons/MaterialCommunityIcons';

type Progress = {
  name: string;
  date: string;
  money: string;
  icon: React.JSX.Element;
  sendType: string;
};

export default function Progress({
  progress,
  empty,
}: {
  progress?: Progress[];
  empty: boolean;
}) {
  const allProgress = progress || (ProgressJson as any);

  return (
    <View style={styles.bottomView}>
      {empty && allProgress && allProgress.length > 0 && (
        <FlatList
          data={allProgress}
          renderItem={({item}) => (
            <FlatListItem
              name={item.name}
              date={item.date}
              icon={item.icon}
              money={item.money}
              sendType={item.sendType}
            />
          )}
        />
      )}
      {!empty && (
        <View style={styles.empty}>
          <MicIcon name="image-minus" size={50} color={'#AAB5C170'} />
          <Text style={{color: '#AAB5C1', maxWidth: 120, textAlign: 'center'}}>
            Son hareketin bulunmuyor.
          </Text>
        </View>
      )}
    </View>
  );
}

export function FlatListItem({icon, name, sendType, date, money}: Progress) {
  return (
    <View style={styles.flatListItemContainer}>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          gap: 15,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <View style={styles.flatListIcon}>
          <MicIcon name={icon as any} size={20} color={'#2a0c55'} />
        </View>

        <View style={styles.flatListInfo}>
          <Text style={styles.flatListInfoName}>{name}</Text>
          <Text style={styles.flatListInfoMiniText}>{sendType}</Text>
          <Text style={styles.flatListInfoMiniText}>{date}</Text>
        </View>
      </View>

      <View>
        <Text
          style={{
            ...{fontWeight: '700'},
            ...(money.includes('+') ? {color: '#4E6C35'} : ''),
          }}>
          {money}
        </Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  bottomView: {
    borderWidth: 2,
    borderColor: '#EEF0F4',
    borderRadius: 10,
    width: 320,
    marginTop: 10,
  },
  flatListItemContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 5,
  },

  flatListIcon: {
    backgroundColor: '#dcd4e4',
    width: 40,
    height: 40,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 6,
  },

  flatListInfo: {display: 'flex', flexDirection: 'column'},
  flatListInfoName: {
    fontWeight: '700',
  },
  flatListInfoMiniText: {
    fontSize: 12,
  },

  empty: {
    width: 320,
    height: 300,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
  },
});

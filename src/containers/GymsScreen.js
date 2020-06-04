import React, {useEffect, useState}  from 'react';
import {
  Text,
  StyleSheet,
  View,
  ScrollView
} from "react-native";

import {MaterialIndicator} from 'react-native-indicators';

import {useDispatch, useSelector} from 'react-redux';

import {getGymList} from "../store/actions/gyms";

import {GymItem} from './GymItem';

const GymsScreen = () => {

  const dispatch = useDispatch();

  const gymsData = useSelector(state => state.Gyms.gyms);
  const areLoading = useSelector(state => state.Gyms.gymsAreLoading);

  useEffect(() => {
    dispatch(getGymList());
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.pageTitle}>Список залов</Text>

      {areLoading &&
      <View>
        <MaterialIndicator color='#0C80B1' />
      </View>
      }

      {!areLoading && gymsData &&
      <ScrollView style={{width: '100%',}}>
        {gymsData.map((item) => (
          <GymItem key={item.id} item={item}/>
        ))}
      </ScrollView>
      }

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#e6e6e6',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 30,
    paddingVertical: 30,
  },
  pageTitle: {
    fontSize: 30,
    marginBottom: 20,
    fontWeight: 'bold'
  },
});

export {GymsScreen};

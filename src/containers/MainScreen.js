import React, {useEffect, useState}  from 'react';
import {
  Text,
  TextInput,
  StyleSheet,
  View,
  TouchableOpacity, ScrollView
} from "react-native";

import {defaultStyles} from '../styles/style'

import {useDispatch, useSelector} from 'react-redux';
import { useNavigation } from 'react-navigation-hooks';

import {getGymList} from "../store/actions/gyms";

import {GymItem} from './GymItem';

const MainScreen = () => {

  const { navigate } = useNavigation();
  const dispatch = useDispatch();

  const userData = useSelector(state => state.Authorization.authorization);
  const gymsData = useSelector(state => state.Gyms.gyms);

  useEffect(() => {
    dispatch(getGymList());
  }, []);

  return (
    <View style={styles.container}>
      <ScrollView>
        {gymsData.map((item) => (
          <GymItem item={item} />
        ))}

        <TouchableOpacity
          style={{
            ...styles.button,
            ...defaultStyles.shadowBlock,
          }}
          onPress={() => {
            navigate('TrainingList');
          }}>
          <Text style={styles.buttonText}>
            Записаться на тренировку
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            ...styles.button,
            ...defaultStyles.shadowBlock,
          }}
          onPress={() => {
            navigate('MyRegistration');
          }}>
          <Text style={styles.buttonText}>
            Мои записи
          </Text>
        </TouchableOpacity>
      </ScrollView>

      {/* if admin */}
      {/*{userData.data.id === 2005 &&*/}
      {/*  <View>*/}
      {/*    <TouchableOpacity*/}
      {/*      style={styles.button}*/}
      {/*      onPress={() => {*/}
      {/*        navigate('AddTraining');*/}
      {/*      }}>*/}
      {/*      <Text style={styles.buttonText}>*/}
      {/*        Создать тренировку*/}
      {/*      </Text>*/}
      {/*    </TouchableOpacity>*/}
      {/*    <TouchableOpacity*/}
      {/*      style={styles.button}*/}
      {/*      onPress={() => {*/}
      {/*        navigate('TrainingList');*/}
      {/*      }}>*/}
      {/*      <Text style={styles.buttonText}>*/}
      {/*        Список тренировок*/}
      {/*      </Text>*/}
      {/*    </TouchableOpacity>*/}
      {/*  </View>*/}
      {/*}*/}

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
  button: {
    width: 350,
    flexDirection: 'row',
    justifyContent: 'center',
    paddingVertical: 10,
    paddingHorizontal: 15,
    marginBottom: 30,
  },
  buttonText: {
    fontSize: 26,
    textAlign: 'center',
  }
});

export {MainScreen};

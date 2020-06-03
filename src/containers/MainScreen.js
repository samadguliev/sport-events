import React, {useEffect, useState}  from 'react';
import {
  Text,
  StyleSheet,
  View,
  ScrollView
} from "react-native";

import {MaterialIndicator} from 'react-native-indicators';

import {useDispatch, useSelector} from 'react-redux';
import { useNavigation } from 'react-navigation-hooks';

import {getGymList} from "../store/actions/gyms";

import {GymItem} from './GymItem';

const MainScreen = () => {

  const { navigate } = useNavigation();
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
            <GymItem item={item}/>
          ))}

          {/*<TouchableOpacity
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
          </TouchableOpacity>*/}
        </ScrollView>
      }

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
  pageTitle: {
    fontSize: 30,
    marginBottom: 20,
    fontWeight: 'bold'
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

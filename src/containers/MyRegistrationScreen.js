import React, {useState, useEffect}  from 'react';
import {
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  ScrollView,
  Alert
} from "react-native";

import {useDispatch, useSelector} from "react-redux";
import { useNavigation } from 'react-navigation-hooks';

import {getEnrollment, removeEnrollment} from "../store/actions/enrollment";

const MyRegistrationScreen = () => {
  const { navigate } = useNavigation();
  const dispatch = useDispatch();
  const userData = useSelector(state => state.Authorization.authorization);
  const accessToken = useSelector(state => state.Authorization.accessToken);
  const enrollment = useSelector(state => state.Enrollment.enrollment);

  const userId = userData.data.id;

  useEffect(() => {
    dispatch(getEnrollment(accessToken));
  }, []);
  return (
    <ScrollView style={styles.container}>

      <Text style={styles.title}>
        Мои записи
      </Text>

      {enrollment.map((item) => (
        <View style={styles.itemBlock}>
          <Text style={styles.itemTitle}>{item.name}</Text>
          <View style={styles.itemRow}>
            <Text>Дата</Text>
            <Text>{item.date}</Text>
          </View>
          <View style={styles.itemRow}>
            <Text>Длительность</Text>
            <Text>{item.duration}</Text>
          </View>

          <View style={styles.itemRow}>
            <TouchableOpacity onPress={() => {
              Alert.alert(
                `Удалить запись?`,
                '',
                [
                  {
                    text: 'Cancel',
                    onPress: () => console.log('Cancel Pressed'),
                    style: 'cancel'
                  },
                  {text: 'OK', onPress: () => dispatch(removeEnrollment(item.id, accessToken))}
                ],
                {cancelable: false}
              );
            }}>
              <Text style={styles.remove}>
                Удалить запись
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      ))}

    </ScrollView>
  )
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#e6e6e6',
    flex: 1,
    paddingHorizontal: 30,
    paddingVertical: 30,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 30
  },
  itemBlock: {
    backgroundColor: '#fff',
    shadowColor: 'rgba(0,0,0,0.1)',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.5,
    elevation: 3,
    borderRadius: 4,
    paddingVertical: 10,
    paddingHorizontal: 15,
    marginVertical: 10,
  },
  itemTitle: {
    fontSize: 22
  },
  itemRow: {
    marginTop: 13,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  remove: {
    marginTop: 20,
    color: '#0050ff',
    borderBottomColor: '#0050ff',
    borderBottomWidth: 1,
    width: 'auto',
  }
});

export {MyRegistrationScreen}

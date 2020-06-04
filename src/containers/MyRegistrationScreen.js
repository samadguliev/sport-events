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
import {getGymList} from "../store/actions/gyms";

import {ItemRow} from "../components/ItemRow";

const MyRegistrationScreen = () => {
  const { navigate } = useNavigation();
  const dispatch = useDispatch();

  const gymsData = useSelector(state => state.Gyms.gyms);
  const enrollment = useSelector(state => state.Enrollment.enrollment);
  const accessToken = useSelector(state => state.Authorization.accessToken);
  const [gymsIds, setGymsIds] = useState([]);


  useEffect(() => {
    dispatch(getGymList());
  }, []);

  useEffect(() => {
    const gymsIdsArr = [];

    gymsData.forEach((item) => {
      gymsIdsArr.push(item.id);
    });

    setGymsIds(gymsIdsArr);
    dispatch(getEnrollment(gymsIdsArr.join(',')), accessToken);
  }, [gymsData]);

  return (
    <ScrollView style={styles.container}>

      <Text style={styles.title}>
        Мои записи
      </Text>

      {enrollment.map((item) => (
        <View style={styles.itemBlock}>
          <Text style={styles.itemTitle}>{item.activity_name}</Text>

          <ItemRow label="Дата" text={item.activitydate} />
          <ItemRow label="Время" text={`${item.starttime} - ${item.endtime}`} />
          <ItemRow label="Стоимость" text={item.cost} />
          <ItemRow label="Оплачено" text={item.paid ? 'Да' : 'Нет'} />
          <ItemRow label="Название зала" text={item.gym_name} />

          {!item.denycancel &&
          <View style={styles.itemRow}>
            <TouchableOpacity onPress={() => {
              Alert.alert(
                `Удалить запись?`,
                '',
                [
                  {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'
                  },
                  {text: 'OK', onPress: () => dispatch(removeEnrollment(item.id, gymsIds))}
                ],
                {cancelable: false}
              );
            }}>
              <Text style={styles.remove}>
                Удалить запись
              </Text>
            </TouchableOpacity>
          </View>
          }
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
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 30,
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
    fontSize: 22,
    marginBottom: 13,
  },
  itemRow: {
    marginTop: 13,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  remove: {
    marginTop: 15,
    color: '#0050ff',
    borderBottomColor: '#0050ff',
    borderBottomWidth: 1,
    width: 'auto',
  }
});

export {MyRegistrationScreen}

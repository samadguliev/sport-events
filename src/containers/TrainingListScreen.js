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

import {getTrainings} from "../store/actions/trainings";

import {ItemRow} from "../components/ItemRow";
import DateTimePicker from "@react-native-community/datetimepicker";
import moment from "moment";

const TrainingListScreen = () => {
  const { navigate } = useNavigation();
  const dispatch = useDispatch();

  const gymId = useNavigation().state.params.id;
  const trainings = useSelector(state => state.Trainings.trainings);

  const [date, setDate] = useState(new Date());
  const [show, setShow] = useState(false);

  const displayedDate = moment(date.toISOString()).format( `DD.MM.YYYY`);

  const getState = (number) => {
    const stateArray = [
      'Доступна запись',
      'Идет занятие',
      'Запись недоступна',
    ];
    return stateArray[number];
  };

  const onChange = (event, selectedDate) => {
    setShow(false);
    const currentDate = selectedDate ? selectedDate : date;
    setDate(currentDate);
    dispatch(getTrainings(gymId, currentDate));
  };

  useEffect(() => {
    dispatch(getTrainings(gymId, date));
  }, []);
  return (
    <ScrollView style={styles.container}>

      <Text style={styles.title}>
        Список тренировок на {displayedDate}
      </Text>
      <TouchableOpacity onPress={() => {setShow(true)}}>
        <Text style={styles.datePickText}>
          Выбрать дату
        </Text>
      </TouchableOpacity>

      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          timeZoneOffsetInMinutes={0}
          value={date}
          mode='date'
          is24Hour={true}
          display="default"
          onChange={onChange}
          minimumDate={new Date()}
        />
      )}

      <View style={{ marginBottom: 30 }}>
        {trainings.map((item) => (
          <View style={styles.itemBlock}>
            <Text style={styles.itemTitle}>{item.name}</Text>

            <ItemRow label="Начало" text={item.start} />
            <ItemRow label="Конец" text={item.end} />
            <ItemRow label="Количество мест" text={item.avaiable} />
            <ItemRow label="Записанных клиентов" text={item.registered} />
            <ItemRow label="Статус" text={getState(item.state)} />

            {/* <View style={styles.itemRow}>
              <TouchableOpacity onPress={() => {
                Alert.alert(
                  `Записаться на "${item.name}" ?`,
                  '',
                  [
                    {
                      text: 'Cancel',
                      onPress: () => console.log('Cancel Pressed'),
                      style: 'cancel'
                    },
                    {text: 'OK', onPress: () => dispatch(addEnrollment())}
                  ],
                  {cancelable: false}
                );
                // navigate('AddTraining', {id: item.id});
              }}>
                <Text style={styles.remove}>
                  Записаться на тренировку
                </Text>
              </TouchableOpacity>
            </View> */}
          </View>
        ))}
      </View>

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
  datePickText: {
    fontSize: 18,
    color: 'blue',
    textDecorationLine: 'underline',
    marginBottom: 10,
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

export {TrainingListScreen}

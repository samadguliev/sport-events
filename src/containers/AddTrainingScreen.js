import React, {useState}  from 'react';
import {
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
} from "react-native";

import {useDispatch, useSelector} from 'react-redux';

import DateTimePicker from '@react-native-community/datetimepicker';

import {Input} from "../components/Input";

import {addTraining} from "../store/actions/trainings";

const AddTrainingScreen = () => {
  const dispatch = useDispatch();

  const accessToken = useSelector(state => state.Authorization.accessToken);

  const [name, setName] = useState('');
  const [date, setDate] = useState(new Date());
  const [time, setTime] = useState('');
  const [duration, setDuration] = useState('');

  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);

  const onChange = (event, selectedDate) => {
    if (mode === 'date') {
      setDate(selectedDate);
    }
    if (mode === 'time') {
      setTime(selectedDate);
    }
    setShow(Platform.OS === 'ios');
  };

  const showMode = currentMode => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode('date');
  };

  const showTimepicker = () => {
    showMode('time');
  };

  const setTraining = () => {
    dispatch(addTraining(name, date, time, duration, accessToken))
  };

  return (
    <View style={styles.container}>

      <Text style={styles.title}>
        Создать тренировку
      </Text>

      <View style={{
        marginTop: 30,
      }}>
        <Input
          placeholder="Название"
          value={name}
          onChangeText={setName}
          label="Название тренировки"
        />

        <Input
          placeholder="Дата"
          value={date}
          onChangeText={setDate}
          label="Дата тренировки"
          onPress={showDatepicker}
        />

        <Input
          placeholder="Время"
          value={time}
          onChangeText={setTime}
          label="Время тренировки"
          onPress={showTimepicker}
        />

        <Input
          placeholder="Длительность"
          value={duration}
          onChangeText={setDuration}
          label="Длительность тренировки"
        />

        <TouchableOpacity
          style={styles.submitButton}
          onPress={() => {
            setTraining();
          }}>
          <Text style={{ color: '#fff' }}>
            Сохранить
          </Text>
        </TouchableOpacity>
      </View>

      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          timeZoneOffsetInMinutes={0}
          value={date}
          mode={mode}
          is24Hour={true}
          display="default"
          onChange={onChange}
          minimumDate={new Date()}
        />
      )}

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#e6e6e6',
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: 30,
    paddingVertical: 30,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  submitButton: {
    alignItems: 'center',
    backgroundColor: "#008ecc",
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderRadius: 4,
  }
});

export {AddTrainingScreen};

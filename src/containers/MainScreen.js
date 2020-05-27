import React  from 'react';
import {
  Text,
  TextInput,
  StyleSheet,
  View,
  TouchableOpacity
} from "react-native";

import {useDispatch, useSelector} from 'react-redux';
import { useNavigation } from 'react-navigation-hooks';

const MainScreen = () => {

  const { navigate } = useNavigation();
  const userData = useSelector(state => state.Authorization.authorization);

  return (
    <View style={styles.container}>

      {/* if admin */}
      {userData.data.id === 2005 &&
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>
            Создать тренировку
          </Text>
        </TouchableOpacity>
      }

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>
          Записаться на тренировку
        </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>
          Мои записи
        </Text>
      </TouchableOpacity>

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
    backgroundColor: '#fff',
    shadowColor: 'rgba(0,0,0,0.1)',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.5,
    elevation: 3,
    borderRadius: 4,
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

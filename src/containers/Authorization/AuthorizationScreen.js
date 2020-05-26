import React, { useState, useEffect }  from 'react';
import {
  Text,
  TextInput,
  StyleSheet,
  View,
  TouchableOpacity
} from "react-native";

import {useDispatch, useSelector} from 'react-redux';
import { useNavigation } from 'react-navigation-hooks';

import {setAuthorization} from "../../store/actions/authorization";

const AuthorizationScreen = () => {

  const { navigate } = useNavigation();
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const userData = useSelector(state => state.Authorization.authorization);

  const dispatch = useDispatch();

  const checkUser = () => {
    dispatch(setAuthorization(login, password));
  };

  useEffect(() => {

  }, []);

  return (
    <View style={styles.screenContainer}>
      <Text style={styles.headerText}>
        Авторизация
      </Text>
      {userData.data && !userData.data.id &&
        <Text style={styles.wrongAuth}>
          Неверный логин и/или пароль
        </Text>
      }
      <TextInput
        style={styles.input}
        placeholder="Login"
        value={login}
        onChangeText={text => {
          setLogin(text);
        }}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={text => {
          setPassword(text);
        }}
      />
      <TouchableOpacity style={styles.button}
        onPress={checkUser}
      >
        <Text style={styles.buttonText}>
          Войти
        </Text>
      </TouchableOpacity>
    </View>
  )
};

const styles = StyleSheet.create({
  screenContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    backgroundColor: "#008ecc",
  },
  headerText: {
    color: '#fff',
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  wrongAuth: {
    color: '#ff0001',
    fontSize: 18,
    marginBottom: 15,
  },
  input: {
    backgroundColor: "#fff",
    width: 300,
    height: 50,
    marginBottom: 15,
    paddingLeft: 13,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
  },
  button: {
    borderWidth: 5,
    borderColor: '#fff',
    marginTop: 25,
    paddingTop: 6,
    paddingBottom: 8,
    paddingRight: 100,
    paddingLeft: 100,
    borderRadius: 15,
  }
});

export {AuthorizationScreen};

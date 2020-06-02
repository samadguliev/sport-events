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

import {getAuthCode, setAuthorization} from "../../store/actions/authorization";

const AuthorizationScreen = () => {

  const { navigate } = useNavigation();

  const [number, setNumber] = useState('');
  const [code, setCode] = useState('');
  const [codeButton, setCodeButton] = useState(false);

  const userData = useSelector(state => state.Authorization.authorization);

  const dispatch = useDispatch();

  const getCode = () => {
    setCodeButton(true);
    dispatch(getAuthCode(number));
  };

  const checkUser = () => {
    dispatch(setAuthorization(number, code));
  };

  if (userData && userData.token) {
    navigate('MainScreen');
  }

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

      {!codeButton &&
        <View style={{ alignItems: 'center', }} >
          <TextInput
            style={styles.input}
            placeholder="Номер телефона"
            value={number}
            keyboardType = 'numeric'
            onChangeText={text => {
              setNumber(text);
            }}
          />
          <TouchableOpacity style={styles.button} onPress={() => {
            getCode();
          }}>
            <Text style={styles.buttonText}>
              Получить код
            </Text>
          </TouchableOpacity>
        </View>
      }

      {codeButton &&
        <View>
          <TextInput
            style={styles.input}
            placeholder="Код из СМС"
            value={code}
            keyboardType = 'numeric'
            onChangeText={text => {
              setCode(text);
            }}
          />
          <TouchableOpacity style={styles.button} onPress={checkUser}>
            <Text style={styles.buttonText}>
              Войти
            </Text>
          </TouchableOpacity>
        </View>
      }
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

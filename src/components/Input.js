import React from 'react';
import {
  Text,
  TextInput,
  StyleSheet,
  View,
} from "react-native";

const Input = (props) => {

  return (
    <View style={styles.inputBlock}>
      <Text style={styles.label}>
        {props.label}
      </Text>
      <TextInput
        placeholder={props.placeholder}
        value={props.value}
        onChangeText={text => {
          console.log(text);
          props.onChangeText(text);
        }}
        style={styles.input}
        onFocus={props.onPress ? props.onPress : '' }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    backgroundColor: '#fff',
    paddingVertical: 5,
    paddingLeft: 15,
    borderRadius: 3,
    marginVertical: 10,
    width: 300,
  },
  inputBlock: {
    marginBottom: 15,
  },
  label: {
    fontSize: 16,
  }
});

export {Input};

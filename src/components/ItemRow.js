import React from 'react';
import {
  Text,
  TextInput,
  StyleSheet,
  View,
} from "react-native";

const ItemRow = (props) => {
  return (
    <View style={styles.itemRow}>
      <Text style={styles.text}>{props.label}: </Text>
      <Text style={styles.text}>{props.text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  itemRow: {
    marginTop: 3,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  text: {
    fontSize: 15,
    lineHeight: 20
  }
});

export {ItemRow};

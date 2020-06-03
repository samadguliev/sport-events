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
      <Text>{props.label}: </Text>
      <Text>{props.text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  itemRow: {
    marginTop: 13,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export {ItemRow};

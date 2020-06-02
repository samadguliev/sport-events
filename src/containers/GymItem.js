import React, {useEffect, useState}  from 'react';
import {
  Text,
  TextInput,
  StyleSheet,
  View,
  TouchableOpacity,
  ScrollView
} from "react-native";

import {defaultStyles} from '../styles/style'

import { useNavigation } from 'react-navigation-hooks';

const GymItem = ({ item }) => {
  return(
    <View style={{
      ...defaultStyles.shadowBlock,
      ...styles.itemBlock
    }}>
      <Text>{item.name}</Text>
    </View>
  )
};

const styles = StyleSheet.create({
  itemBlock: {
    marginBottom: 15,
    paddingHorizontal: 15,
    paddingVertical: 10,
  }
});

export {GymItem};

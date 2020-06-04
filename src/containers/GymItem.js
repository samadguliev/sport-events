import React, {useEffect, useState}  from 'react';
import {
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  Image,
} from "react-native";

import {defaultStyles} from '../styles/style'

import { useNavigation } from 'react-navigation-hooks';

const GymItem = ({ item }) => {

  const { navigate } = useNavigation();

  const goToTrainingList = () => {
    navigate('TrainingList', {id: item.id})
  };

  return(
    <TouchableOpacity
      key={item.id}
      onPress={() => { goToTrainingList() }}
      style={{
      ...defaultStyles.shadowBlock,
      ...styles.itemBlock,
    }}>

      <View style={styles.logoBlock}>
        {item.logo !== null &&
        <Image
          style={styles.logo}
          source={item.logo ? {uri: `${item.logo}`} : null}
        />
        }
      </View>

      <View style={styles.textBlock}>
        <Text style={styles.title}>{item.name}</Text>
        <Text style={styles.text}>{item.address}</Text>
        <Text style={styles.text}>{item.phone}</Text>
        <Text style={styles.text}>{item.email}</Text>
      </View>

    </TouchableOpacity>
  )
};

const styles = StyleSheet.create({
  itemBlock: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    marginBottom: 15,
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  logoBlock: {
    flex: 3,
  },
  textBlock: {
    flex: 7,
  },
  logo: {
    width: 70,
    height: 70,
  },
  title: {
    fontSize: 20,
    marginBottom: 7,
  },
  text: {
    marginBottom: 5,
  }
});

export {GymItem};

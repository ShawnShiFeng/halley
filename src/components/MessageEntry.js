import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

const styles = StyleSheet.create({
  mainContainer: {
    marginTop: 10,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: 'transparent',
    backgroundColor: '#7bb32e',
    marginBottom: 10,
    width: '60%',
  },
  textStyle: {
    fontSize: 15,
    marginLeft: 15,
  }
})

const MessageEntry = ({ message }) => {
  return (
    <View style={styles.mainContainer}>
      <Text style={styles.textStyle}>{message}</Text>
    </View>
  );
};

export default MessageEntry;
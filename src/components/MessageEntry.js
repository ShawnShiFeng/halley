import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';


const MessageEntry = ({ message }) => {
  return (
    <View>
      <Text>{message}</Text>
    </View>
  );
};

export default MessageEntry;
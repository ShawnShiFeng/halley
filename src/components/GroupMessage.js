import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import {
  Card,
} from 'react-native-material-design';

// Component
import MessageEntry from '../components/MessageEntry';
const styles = StyleSheet.create({
  mainContainer: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
  },
  mainCard: {
    width: '100%',
    height: '100%',
  },
});
const GroupMessage = ({ messages }) => {
  return (
    <View style={styles.mainContainer}>
      <Card style={styles.mainCard}>
        {
          messages.map((item) => {
            return (
              <MessageEntry
                message={item.text}
              />
            );
          })
        }
      </Card>
    </View>
  );
};

export default GroupMessage;

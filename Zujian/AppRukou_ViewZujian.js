/**
 * Sample React Native AppRukou_ViewZujian
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';


export default class AppRukou_ViewZujian extends Component {
  render() {
    return (
      <View style={styles.container}>

        <View style={styles.item}>
        <Text style={styles.center}>酒店</Text>
        <Text style={styles.center}>To get started, edit App.js</Text>
        </View>
        <View style={styles.item}></View>
        <View style={styles.item}></View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderWidth:1,
    borderColor:'red',
    flexDirection:'row',
  },
  item: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  center: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

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
        <Text>酒店</Text>
        </View>




        <View style={styles.item}>








        </View>




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
    height: 80,
    flex:1,
    borderWidth: 1,
    borderColor: 'blue',
    justifyContent: 'center',
    alignItems: 'center',
  },
  center: {

  },
});

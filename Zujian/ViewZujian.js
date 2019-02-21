/**
 * Sample React Native ViewZujian
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';


export default class ViewZujian extends Component {
  render() {
    return (
    <View style={styles.flex}>
      <View style={styles.container}>
        <View style={styles.item}>
        <Text style={styles.font}>酒店</Text>
        </View>




        <View style={styles.item}>
            <View style={styles.view2}>
                <Text style={styles.font}>海外酒店</Text>
            </View>
            <View style={styles.view2}>
                <Text style={styles.font}>特惠酒店</Text>
            </View>

        </View>




        <View style={styles.item}>

            <View style={styles.view2}>
                <Text style={styles.font}>团购</Text>
            </View>
            <View style={styles.view2}>
                <Text style={styles.font}>客栈，公寓</Text>
            </View>

        </View>





      </View>
    </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection:'row',
    backgroundColor:'#ff0067',
    padding:2,
    marginTop:200,
    marginLeft:5,
    marginRight:5,
    height:84,
    borderRadius:5,
  },
  item: {
    height: 80,
    flex:1,
    borderWidth: 1,
    borderColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  view2: {
      flex:1,
      justifyContent: 'center',
      alignItems: 'center',

  },
    font: {
        color:'#fff',
        fontSize:16,
        fontWeight: 'bold',

    },
    flex:{
        flex: 1,


    },
});

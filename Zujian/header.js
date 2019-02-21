/**
 * Sample React Native ViewZujian
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import {PixelRatio, StyleSheet, Text, View} from 'react-native';


export default class Header extends Component {
    render() {
        return (
            <View style={styles.flex}>
                <Text style={styles.font}>


                <Text style={styles.font_1}>网易</Text>
                <Text style={styles.font_2}>新闻</Text>
                    <Text>有态度</Text>
                </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    flex: {
        marginTop: 25,
        height: 50,
        alignItems: 'center',
        borderBottomWidth:3/PixelRatio.get(),
        borderBottomColor: '#ED2D36',
    },
    font: {
        fontSize: 25,
        fontWeight: 'bold',
        textAlign:'center',
    },
    font_1: {
        color: '#CD1D1C',
    },
    font_2: {
        color: '#FFF',
        backgroundColor:'#CD1D1C',
    },
});



module.exports=Header;
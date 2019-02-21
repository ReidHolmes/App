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
const Header=require('./header');
export default class TextZu extends Component {
    render() {
        return (
            <View style={styles.flex}>
                <Header></Header>
                <List title={'我是新闻文字文字新闻是我'}></List>
                <List title={'我是新闻文字文字新闻是我'}></List>
                <List title={'我是新闻文字文字新闻是我'}></List>
                <List title={'我是新闻文字文字新闻是我'}></List>
                <List title={'我是新闻文字文字新闻是我'}></List>
            </View>
        );
    }
}

 class List extends Component {
    render() {
        return (
            <View style={styles.list_item}>
                <Text style={styles.list_item_font}>{this.props.title}</Text>


            </View>
        );
    }
}




const styles = StyleSheet.create({
    flex:{
        flex:1,
    },
    list_item: {
        height: 40,
        marginLeft: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
        justifyContent:'center',
    },
    list_item_font: {
        fontSize: 16,
    },

});

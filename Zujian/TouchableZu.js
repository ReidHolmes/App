/**
 * Sample React Native ViewZujian
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TextInput} from 'react-native';
const Header=require('./header');
export default class TouchableZu extends Component {
    render() {
        return (
            <View style={styles.topStatus}>
                <Search></Search>
            </View>
        );
    }
}

class Search extends Component {
    render() {
        return (
            <View style={styles.flexDirection}>

                <View style={styles.input}>
                    <TextInput  returnKeyType='Search'/>
                </View>


                <View style={styles.btn}>

                    <Text style={styles.search}>搜索</Text>

                </View>







            </View>
        );
    }
}



const styles = StyleSheet.create({
    flex:{
        flex:1,
    },
    topStatus:{
        marginTop:25,
        flex:1,
    },
    flexDirection:{
        flexDirection:'row',
        flex:1,
    },
    input:{
        flex:1,
        height:45,
        borderColor:'red',
        borderWidth:1,
        marginLeft:10,
        paddingLeft:10,
        borderRadius:5,
    },
    btn:{
        width:45,
        marginLeft:-5,
        marginRight:5,
        backgroundColor:'#23BEFF',
        height:45,
        justifyContent:'center',
        alignItems:'center',
        flex:1,
    },
    search:{
        color:'#fff',
        fontSize:15,
        fontWeight:'bold',
    },

});
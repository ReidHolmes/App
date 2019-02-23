/**
 * Sample React Native ViewZujian
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import {TouchableHighlight, TouchableOpacity, TouchableWithoutFeedback,StyleSheet, Text, View, TextInput} from 'react-native';
const Header=require('./header');
export default class TouchableZu extends Component {
    render() {
        return (
            <View style={styles.flex}>
                <TouchableHighlight onPress={this.show.bind(this,'TouchableHighlight')}
                    underlayColor='#E1F6FF'>

                    <Text style={styles.item}>我是TouchableHighlight</Text>

                    </TouchableHighlight>

                    <TouchableOpacity onPress={this.show.bind(this,'TouchableOpacity')}
                    underlayColor='#E1F6FF'>

                    <Text style={styles.item}>我是TouchableOpacity</Text>

                    </TouchableOpacity>
                    <TouchableWithoutFeedback onPress={this.show.bind(this,'TouchableWithoutFeedback')}
                    underlayColor='#E1F6FF'>

                    <Text style={styles.item}>我是TouchableWithoutFeedbackt</Text>

                    </TouchableWithoutFeedback>
            </View>
        );
    }
}




const styles = StyleSheet.create({
    flex:{
        flex:1,
    },
    item:{
        flex:1,
        height:45,
        borderColor:'red',
        borderWidth:1,
        marginLeft:10,
        paddingLeft:10,
        borderRadius:5,
    },

});
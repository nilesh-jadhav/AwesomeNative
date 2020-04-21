import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Header } from '../sections/Header';
import { Menu } from '../sections/Menu';
import { Slider } from '../sections/Slider';

export class Contact extends React.Component {
    render() {
        return(
            <View style={styles.container}>
                <Header style={styles.section1} message = 'Press to Login' />
                <Text>Contact us</Text>
                <Menu/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
});
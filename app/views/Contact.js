import React from 'react';
import { StyleSheet, View, Text, TextInput, TouchableHighlight, Alert } from 'react-native';
import { Header } from '../sections/Header';
import { Menu } from '../sections/Menu';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

export class Contact extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            msg:'Enter Message',
            name:'Enter Name',
            email:'Enter your email address'
        }
    }

    clearFields = () => { this.setState({ name:'', msg:'', email:'' }) }

    submitDetails = () => {
        Alert.alert(this.state.name, this.state.msg);
        this.props.navigation.goBack();
    }

    render() {
        return(
            <View style = { styles.container }>
                <Header message = 'Press to Login' />
                <Text style = { styles.heading }>Contact us</Text>
                <TextInput
                    style = { styles.inputs }
                    onChangeText = { (text) => this.setState({ name:text }) }
                    value = { this.state.name }
                />
                <TextInput
                    style = { styles.multiInput }
                    onChangeText = { (text) => this.setState({ msg:text }) }
                    value = { this.state.msg }
                    multiline = { true }
                    numberOfLines = { 4 }
                />
                <TextInput
                    style = { styles.inputs }
                    onChangeText = { (text) => this.setState({ email:text }) }
                    value = { this.state.email }
                />
                <TouchableHighlight underlayColor='#31e981' onPress={this.submitDetails} >
                        <Text style={styles.buttons}>
                                Submit
                        </Text>
                </TouchableHighlight>
                <TouchableHighlight underlayColor='#31e981' onPress={this.clearFields} >
                        <Text style={styles.buttons}>
                            Clear
                        </Text>
                </TouchableHighlight>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      paddingBottom: '35%'
    },
    heading: {
        flex: 1,
        fontSize: 18
    },
    inputs: {
        flex: 1,
        padding: 10,
        width: '80%'
    },
    multiInput: {
        flex: 2,
        paddingTop: 10,
        width: '75%'
    },
    buttons: {
        marginTop: 15,
        fontSize:16
    },
});
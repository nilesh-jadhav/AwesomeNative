import React from 'react';
import { StyleSheet, View, TouchableOpacity, Text, Alert } from 'react-native';

export class Menu extends React.Component {

    onPress = () => {
        Alert.alert('You tapped the button');
    }

    render() {
        return(
            <View style = { styles.container }>
                <View style = { styles.buttonRow }>
                    <TouchableOpacity style = { styles.buttonStyle } onPress = { this.onPress } >
                        <Text style = { styles.buttonText }>LESSON</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style = { styles.buttonStyle } onPress = { this.onPress } >
                        <Text style = { styles.buttonText }>REGISTER</Text>
                    </TouchableOpacity>
                </View>
                <View style = { styles.buttonRow }>
                    <TouchableOpacity style = { styles.buttonStyle } onPress = { this.onPress } >
                        <Text style = { styles.buttonText }>BLOG</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style = { styles.buttonStyle } onPress = { () => this.props.navigation.navigate('Contact') } >
                        <Text style = { styles.buttonText }>CONTACT</Text>
                    </TouchableOpacity>
                </View>
                <View style = { styles.buttonRow }>
                    <TouchableOpacity style = { styles.buttonStyle } onPress = { this.onPress } >
                        <Text style = { styles.buttonText }>QUIZ</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style = { styles.buttonStyle } onPress = { this.onPress } >
                        <Text style = { styles.buttonText }>ABOUT</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 6,
      backgroundColor: '#35605a',
    },
    buttonRow: {
        flex: 2,
        flexDirection: 'row',
        alignItems: 'center',
        borderColor: '#ffffff',
        borderBottomWidth: 1,
    },
    buttonStyle: {
        backgroundColor: '#35605a',
        width:'50%',
        height:'50%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonText: {
        color: '#ffffff',
        fontSize: 18,
    }
});
import React from 'react';
import { StyleSheet, Text, View, Platform, Image } from 'react-native';

export class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = { isLoggedIn: false };
    }

    toggleUser = () => {
        this.setState(previousState => {
            return { isLoggedIn: !previousState.isLoggedIn };
        });
    }

    render() {
        return(
            <View style={styles.headerStyle}>
                <Image
                    style={styles.logoStyle}
                    source={ require('./img/blueconch.png')}
                />
                <Text
                    style={styles.headerText}
                    onPress={this.toggleUser}>{this.state.isLoggedIn ? 'Sample User' : this.props.message}
                </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    headerText: {
      textAlign: 'right',
      fontSize: 20,
      color: '#ffffff',
      flex: 1,
    },
    headerStyle: {
        paddingTop: 30,
        paddingRight: 10,
        paddingBottom: 10,
        backgroundColor: Platform.OS === 'android' ? '#31e981' : '#35605a',
        flex: 1,
        flexDirection: 'row',
        borderBottomWidth: 2,
        borderColor: '#000000'
    },
    logoStyle: {
        flex: 1,
        width: 100,
        height: 50,
    }
});
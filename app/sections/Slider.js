import React from 'react';
import { StyleSheet, Image } from 'react-native';

export class Slider extends React.Component {
    render() {
        return(
            <Image
                style={styles.sliderImage}
                source={require('./img/mobile_bg.jpeg')}
            />
        )
    }
}

const styles = StyleSheet.create({
    sliderImage: {
      flex: 8,
      width: undefined,
      height: undefined,
    },
});
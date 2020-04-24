import React from 'react';
import { Text, View, FlatList, Image, TouchableWithoutFeedback } from 'react-native';


export class Video extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            listLoaded: false
        };
    }

    componentDidMount() {
        return fetch('https://www.googleapis.com/youtube/v3/search?part=snippet&q=pluralsight&type=video&key=AIzaSyDWsD6FL1Z-et7aWMVfVgxhgv6ldJ_Z4Jo')
        .then((response) => response.json())
        .then((responseJson) => {
            this.setState({
                listLoaded: true,
                videoList: Array.from(responseJson.items)
            })
        })
        .catch((error) => {
            console.log(error);
        });
    }

    render() {
        return(
            <View>
                { this.state.listLoaded ?
                    <View style = {{ paddingTop: 30 }}>
                        <FlatList
                            data = { this.state.videoList }
                            renderItem = {({ item }) =>
                                <VideoItem
                                    id = { item.id.videId }
                                    title = { item.snippet.title }
                                    imageSrc = { item.snippet.thumbnails.high.url }
                                />

                            }
                        />
                    </View>
                    :
                    <View style = {{ paddingTop: 30 }}>
                        <Text> LOADING </Text>
                    </View>
                }
            </View>
        );
    }
}

export class VideoItem extends React.Component {

    onPress = () => {
        console.log(this.props.id);
    }

    render() {
        return(
            <TouchableWithoutFeedback onPress={this.onPress}>
                <View style={{ paddingTop: 20, alignItems: 'center' }}>
                    <Image
                        style={{ width: '100%', height: 200 }}
                        source={{ uri: this.props.imageSrc }}
                    />
                    <Text>{ this.props.title }</Text>
                </View>
            </TouchableWithoutFeedback>
        )
    }
}
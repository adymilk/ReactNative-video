import React from "react";
import {Button, Text, View} from "react-native";

import Carousel, { ParallaxImage ,Component} from 'react-native-snap-carousel';

export default class MyCarousel extends Component {

    render() {
        return (
            <Carousel
                data={this.state.entries}
                renderItem={MyCarousel._renderItem}
                hasParallaxImages={true}
            />
        );
    }



    static _renderItem({item, index}, parallaxProps) {
        return (
            <View style={styles.item}>
                <ParallaxImage
                    source={{uri: item.thumbnail}}
                    containerStyle={styles.imageContainer}
                    style={styles.image}
                    parallaxFactor={0.4}
                    {...parallaxProps}
                />
                <Text style={styles.title} numberOfLines={2}>
                    {item.title}
                </Text>
            </View>
        );
    }


}
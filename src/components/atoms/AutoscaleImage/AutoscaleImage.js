import React, { Component } from "react";
import { Image } from "react-native";
import { PropTypes } from "prop-types"
import FastImage from "react-native-fast-image";

export default class ScaledImage extends Component {
    constructor(props) {
        super(props);
        this.state = { source: { uri: this.props.uri } };
    }

    render() {
        return (
            <FastImage
                source={this.state.source}
                style={{
                    height: this.props.height,
                    width: this.props.width,
                    aspectRatio: this.props.aspectRatio ? this.props.aspectRatio : 1,
                }}
                resizeMethod="scale"
            />
        );
    }
}

ScaledImage.propTypes = {
    uri: PropTypes.string.isRequired,
    width: PropTypes.number,
    height: PropTypes.number
};
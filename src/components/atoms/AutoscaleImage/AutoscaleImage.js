import React, {Component} from 'react';
import {Image} from 'react-native';
import {PropTypes} from 'prop-types';
import FastImage from 'react-native-fast-image';
import Pinchable from 'react-native-pinchable';
export default class ScaledImage extends Component {
    constructor(props) {
        super(props);
        this.state = {source: {uri: this.props.uri}};
    }

    render() {
        return (
            <Pinchable maximumZoomScale={10}>
                <FastImage
                    source={this.state.source}
                    style={{
                        height: this.props.height,
                        width: this.props.width,
                        aspectRatio: this.props.aspectRatio
                            ? this.props.aspectRatio
                            : 1,
                    }}
                    resizeMethod="scale"
                />
            </Pinchable>
        );
    }
}

ScaledImage.propTypes = {
    uri: PropTypes.string.isRequired,
    width: PropTypes.number,
    height: PropTypes.number,
};

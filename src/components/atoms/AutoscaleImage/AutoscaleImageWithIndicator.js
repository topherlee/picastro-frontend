import React, {Component} from 'react';
import {PropTypes} from 'prop-types';
import FastImage from 'react-native-fast-image';
import { ActivityIndicator, View, Image } from 'react-native';

export default class ScaledImageWithIndicator extends Component {
    constructor(props) {
        super(props);
        this.state = {source: {uri: this.props.uri}, loading: true};
    }

    render() {
        return (
            <View>
                {this.state.loading && (
                    <ActivityIndicator
                        color={'#FFC700'}
                        size={'large'}
                        style={{
                            position: 'absolute',
                            flex: 1,
                            justifyContent: 'center',
                            alignItems: 'center',
                            height: this.props.width * (1 / (this.props.aspectRatio ? this.props.aspectRatio : 1)),
                            width: this.props.width,
                        }}
                    />
                )}
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
                    onLoadEnd={() => this.setState({loading: false})}
                />
            </View>
        );
    }
}

ScaledImageWithIndicator.propTypes = {
    uri: PropTypes.string.isRequired,
    width: PropTypes.number,
    height: PropTypes.number,
};

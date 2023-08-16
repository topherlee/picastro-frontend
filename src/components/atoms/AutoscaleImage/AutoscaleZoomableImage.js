import React, { Component } from "react";
import { Image } from "react-native";
import { PropTypes } from "prop-types";
import { ReactNativeZoomableView } from '@openspacelabs/react-native-zoomable-view';


export default class ScaledImage extends Component {
    constructor(props) {
        super(props);
        this.state = { source: { uri: this.props.uri } };
    }

    componentDidMount() {
        console.log("AutoscaleImage source", this.state.source);
        Image.getSize(this.props.uri, (width, height) => {
            console.log("w&h", width, height);
            if (this.props.width && !this.props.height) {
                this.setState({
                    width: this.props.width,
                    height: height * (this.props.width / width)
                });
            } else if (!this.props.width && this.props.height) {
                this.setState({
                    width: width * (this.props.height / height),
                    height: this.props.height
                });
            } else {
                this.setState({ width: width, height: height });
            }
        });
    }

    render() {
        return (
            <ReactNativeZoomableView
                maxZoom={6}
                minZoom={1}
                zoomStep={0.5}
                initialZoom={0.5}
                bindToBorders={true}
                visualTouchFeedbackEnabled={false}
                onZoomAfter={this.logOutZoomState}
                disablePanOnInitialZoom={true}
                style={{ borderColor: "yellow", borderWidth: 1, width: this.state.width, height: this.state.height}}
            >
                <Image
                    source={this.state.source}
                    style={{ height: this.state.height, width: this.state.width }}
                />
            </ReactNativeZoomableView>
        );
    }
}

ScaledImage.propTypes = {
    uri: PropTypes.string.isRequired,
    width: PropTypes.number,
    height: PropTypes.number
};
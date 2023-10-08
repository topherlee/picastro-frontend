import React, { useContext } from 'react';
import {Dimensions, View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import { AuthContext } from '../../../context/AuthContext';
import FigureImage from '../../../assets/images/empty-feed2.svg';

export default function EmptyFeedMaleFigure() {

    const {
        setModalVisible,
        isModalVisible,
    } = useContext(AuthContext);

    return (
        <View style={styles.container}>
            <Text style={styles.topText}>
                Looks like you haven't any images in your feed. Let's change
                that now!
            </Text>
            <TouchableOpacity
                style={styles.modalBtn}
                onPress={() => {
                    setModalVisible(true);
                }}>
                <Text style={{fontWeight: 'bold'}}>Slew to Other Targets</Text>
            </TouchableOpacity>
            <View
                style={{
                    borderWidth: 0,
                    borderColor: 'red',
                }}>
                <FigureImage style={styles.figureImage} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        height: '100%',
        borderWidth: 0,
        borderColor: 'red',
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
    },
    figureImage: {
        maxWidth: "100%",
    },
    topText: {
        color: '#959595',
        fontWeight: 'bold',
        fontSize: 20,
        textAlign: 'center',
        marginTop: 20,
    },
    modalBtn: {
        width: '50%',
        borderRadius: 25,
        height: '7%',
        minHeight: 50,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        marginTop: 25,
        backgroundColor: '#FFC700',
    },
});

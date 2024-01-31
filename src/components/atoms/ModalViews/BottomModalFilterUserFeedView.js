import React, {useContext} from 'react';
import {
    View,
    Text,
    Pressable,
    ScrollView,
    StyleSheet,
    TouchableOpacity,
} from 'react-native';
import {
    NebulaButton,
    GalaxyButton,
    CometButton,
    PlanetButton,
    AsterismsButton,
    ClustersButton,
    IssTransitButton,
    LunarButton,
    SolarButton,
} from '..';

import {AuthContext} from '../../../context/AuthContext';
import globalStyling from '../../../../constants/globalStyling';

export default function BottomModalFilterUserView() {
    const {
        userSearchAndFilterUrl,
        setUserSearchAndFilterUrl,
        isModalVisible,
        setModalVisible,
        userActiveSelector,
        setUserActiveSelector,
        userActiveObjectSelector,
        setUserActiveObjectSelector,
        setUserCurrentPage,
    } = useContext(AuthContext);

    return (
        <View style={globalStyling.bottomModalFilterContainer}>
            <View style={globalStyling.bottomModalButtonWrapper}>
                <Pressable
                    style={
                        userActiveSelector == 'most_recent'
                            ? [
                                  globalStyling.bottomModalButton,
                                  globalStyling.bottomModalButtonSelected,
                              ]
                            : [
                                  globalStyling.bottomModalButton,
                                  globalStyling.bottomModalButtonUnselected,
                              ]
                    }
                    onPress={() => {
                        setModalVisible(!isModalVisible);
                        setUserSearchAndFilterUrl('');
                        setUserActiveSelector('most_recent');
                        setUserCurrentPage(1);
                    }}>
                    <Text style={globalStyling.bottomModalButtonText}>
                        Most Recent
                    </Text>
                </Pressable>
                <Pressable
                    style={
                        userActiveSelector == 'object_type'
                            ? [
                                  globalStyling.bottomModalButton,
                                  globalStyling.bottomModalButtonSelected,
                              ]
                            : [
                                  globalStyling.bottomModalButton,
                                  globalStyling.bottomModalButtonUnselected,
                              ]
                    }
                    onPress={() => {
                        setUserActiveSelector('object_type');
                        userActiveObjectSelector !== ''
                            ? setUserSearchAndFilterUrl(
                                  `imageCategory=${userActiveObjectSelector}`,
                              )
                            : setUserSearchAndFilterUrl('');
                        setUserCurrentPage(1);
                    }}>
                    <Text style={globalStyling.bottomModalButtonText}>
                        Object Type
                    </Text>
                </Pressable>
                <Pressable
                    style={
                        userActiveSelector == 'randomizer'
                            ? [
                                  globalStyling.bottomModalButton,
                                  globalStyling.bottomModalButtonSelected,
                              ]
                            : [
                                  globalStyling.bottomModalButton,
                                  globalStyling.bottomModalButtonUnselected,
                              ]
                    }
                    onPress={() => {
                        setModalVisible(!isModalVisible);
                        setUserSearchAndFilterUrl('order=random');
                        setUserActiveSelector('randomizer');
                        setUserCurrentPage(1);
                    }}>
                    <Text style={globalStyling.bottomModalButtonText}>
                        Randomizer
                    </Text>
                </Pressable>
            </View>
            {userActiveSelector == 'object_type' ? (
                <ScrollView
                    horizontal={true}
                    style={globalStyling.horizontalScrollview}>
                    <TouchableOpacity
                        style={globalStyling.iconContainer}
                        onPress={() => {
                            setUserActiveObjectSelector('iss_transit');
                            setUserSearchAndFilterUrl(
                                'imageCategory=iss_transit',
                            );
                            console.log(
                                'userSearchAndFilterUrl iss',
                                userSearchAndFilterUrl,
                            );
                            setModalVisible(!isModalVisible);
                            setUserCurrentPage(1);
                        }}
                        title="Filter Value">
                        <IssTransitButton selected={userActiveObjectSelector} />
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={globalStyling.iconContainer}
                        onPress={() => {
                            setUserActiveObjectSelector('lunar');
                            setUserSearchAndFilterUrl('imageCategory=lunar');
                            console.log(
                                'userSearchAndFilterUrl lunar',
                                userSearchAndFilterUrl,
                            );
                            setModalVisible(!isModalVisible);
                            setUserCurrentPage(1);
                        }}
                        title="Filter Value">
                        <LunarButton selected={userActiveObjectSelector} />
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={globalStyling.iconContainer}
                        onPress={() => {
                            setUserActiveObjectSelector('solar');
                            setUserSearchAndFilterUrl('imageCategory=solar');
                            console.log(
                                'userSearchAndFilterUrl solar',
                                userSearchAndFilterUrl,
                            );
                            setModalVisible(!isModalVisible);
                            setUserCurrentPage(1);
                        }}
                        title="Filter Value">
                        <SolarButton selected={userActiveObjectSelector} />
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={globalStyling.iconContainer}
                        onPress={() => {
                            setUserActiveObjectSelector('planet');
                            setUserSearchAndFilterUrl('imageCategory=planet');
                            console.log(
                                'userSearchAndFilterUrl planet',
                                userSearchAndFilterUrl,
                            );
                            setModalVisible(!isModalVisible);
                            setUserCurrentPage(1);
                        }}
                        title="Filter Value">
                        <PlanetButton selected={userActiveObjectSelector} />
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={globalStyling.iconContainer}
                        onPress={() => {
                            setUserActiveObjectSelector('comet');
                            setUserSearchAndFilterUrl('imageCategory=comet');
                            console.log(
                                'userSearchAndFilterUrl comet',
                                userSearchAndFilterUrl,
                            );
                            setModalVisible(!isModalVisible);
                            setUserCurrentPage(1);
                        }}
                        title="Filter Value">
                        <CometButton selected={userActiveObjectSelector} />
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={globalStyling.iconContainer}
                        onPress={() => {
                            setUserActiveObjectSelector('galaxy');
                            setUserSearchAndFilterUrl('imageCategory=galaxy');
                            console.log(
                                'userSearchAndFilterUrl galaxy',
                                userSearchAndFilterUrl,
                            );
                            setModalVisible(!isModalVisible);
                            setUserCurrentPage(1);
                        }}
                        title="Filter Value">
                        <GalaxyButton selected={userActiveObjectSelector} />
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={globalStyling.iconContainer}
                        onPress={() => {
                            setUserActiveObjectSelector('asterism');
                            setUserSearchAndFilterUrl('imageCategory=asterism');
                            console.log(
                                'userSearchAndFilterUrl asterism',
                                userSearchAndFilterUrl,
                            );
                            setModalVisible(!isModalVisible);
                            setUserCurrentPage(1);
                        }}
                        title="Filter Value">
                        <AsterismsButton selected={userActiveObjectSelector} />
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={globalStyling.iconContainer}
                        onPress={() => {
                            setUserActiveObjectSelector('nebula');
                            setUserSearchAndFilterUrl('imageCategory=nebula');
                            console.log(
                                'userSearchAndFilterUrl nebula',
                                userSearchAndFilterUrl,
                            );
                            setModalVisible(!isModalVisible);
                            setUserCurrentPage(1);
                        }}
                        title="Filter Value">
                        <NebulaButton selected={userActiveObjectSelector} />
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={globalStyling.iconContainer}
                        onPress={() => {
                            setUserActiveObjectSelector('cluster');
                            setUserSearchAndFilterUrl('imageCategory=cluster');
                            console.log(
                                'userSearchAndFilterUrl cluster',
                                userSearchAndFilterUrl,
                            );
                            setModalVisible(!isModalVisible);
                            setUserCurrentPage(1);
                        }}
                        title="Filter Value">
                        <ClustersButton selected={userActiveObjectSelector} />
                    </TouchableOpacity>
                </ScrollView>
            ) : (
                ''
            )}
        </View>
    );
}

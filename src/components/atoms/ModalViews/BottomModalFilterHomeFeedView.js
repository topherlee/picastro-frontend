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

export default function BottomModalFilterView() {
    const {
        searchAndFilterUrl,
        setSearchAndFilterUrl,
        setModalVisible,
        isModalVisible,
        activeSelector,
        setActiveSelector,
        activeObjectSelector,
        setActiveObjectSelector,
        setCurrentPage,
    } = useContext(AuthContext);

    return (
        <View style={globalStyling.bottomModalFilterContainer}>
            <View style={globalStyling.bottomModalButtonWrapper}>
                <Pressable
                    style={
                        activeSelector == 'most_recent'
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
                        setSearchAndFilterUrl('');
                        setActiveSelector('most_recent');
                        setCurrentPage(1);
                    }}>
                    <Text style={globalStyling.bottomModalButtonText}>
                        Most recent
                    </Text>
                </Pressable>
                <Pressable
                    style={
                        activeSelector == 'object_type'
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
                        setActiveSelector('object_type');
                        activeObjectSelector !== ''
                            ? setSearchAndFilterUrl(
                                  `imageCategory=${activeObjectSelector}`,
                              )
                            : setSearchAndFilterUrl('');
                        setCurrentPage(1);
                    }}>
                    <Text style={globalStyling.bottomModalButtonText}>
                        Object Type
                    </Text>
                </Pressable>
                <Pressable
                    style={
                        activeSelector == 'randomizer'
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
                        setSearchAndFilterUrl('ordering="?"');
                        setActiveSelector('randomizer');
                        setCurrentPage(1);
                    }}>
                    <Text style={globalStyling.bottomModalButtonText}>
                        Randomizer
                    </Text>
                </Pressable>
            </View>
            {activeSelector == 'object_type' ? (
                <ScrollView
                    horizontal={true}
                    style={globalStyling.horizontalScrollview}>
                    <TouchableOpacity
                        style={globalStyling.iconContainer}
                        onPress={() => {
                            setActiveObjectSelector('iss_transit');
                            setSearchAndFilterUrl('imageCategory=iss_transit');
                            console.log(
                                'searchAndFilterUrl iss',
                                searchAndFilterUrl,
                            );
                            setModalVisible(!isModalVisible);
                            setCurrentPage(1);
                        }}
                        title="Filter Value">
                        <IssTransitButton selected={activeObjectSelector} />
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={globalStyling.iconContainer}
                        onPress={() => {
                            setActiveObjectSelector('lunar');
                            setSearchAndFilterUrl('imageCategory=lunar');
                            console.log(
                                'searchAndFilterUrl lunar',
                                searchAndFilterUrl,
                            );
                            setModalVisible(!isModalVisible);
                            setCurrentPage(1);
                        }}
                        title="Filter Value">
                        <LunarButton selected={activeObjectSelector} />
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={globalStyling.iconContainer}
                        onPress={() => {
                            setActiveObjectSelector('solar');
                            setSearchAndFilterUrl('imageCategory=solar');
                            console.log(
                                'searchAndFilterUrl solar',
                                searchAndFilterUrl,
                            );
                            setModalVisible(!isModalVisible);
                            setCurrentPage(1);
                        }}
                        title="Filter Value">
                        <SolarButton selected={activeObjectSelector} />
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={globalStyling.iconContainer}
                        onPress={() => {
                            setActiveObjectSelector('planet');
                            setSearchAndFilterUrl('imageCategory=planet');
                            console.log(
                                'searchAndFilterUrl planet',
                                searchAndFilterUrl,
                            );
                            setModalVisible(!isModalVisible);
                            setCurrentPage(1);
                        }}
                        title="Filter Value">
                        <PlanetButton selected={activeObjectSelector} />
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={globalStyling.iconContainer}
                        onPress={() => {
                            setActiveObjectSelector('comet');
                            setSearchAndFilterUrl('imageCategory=comet');
                            console.log(
                                'searchAndFilterUrl comet',
                                searchAndFilterUrl,
                            );
                            setModalVisible(!isModalVisible);
                            setCurrentPage(1);
                        }}
                        title="Filter Value">
                        <CometButton selected={activeObjectSelector} />
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={globalStyling.iconContainer}
                        onPress={() => {
                            setActiveObjectSelector('galaxy');
                            setSearchAndFilterUrl('imageCategory=galaxy');
                            console.log(
                                'searchAndFilterUrl galaxy',
                                searchAndFilterUrl,
                            );
                            setModalVisible(!isModalVisible);
                            setCurrentPage(1);
                        }}
                        title="Filter Value">
                        <GalaxyButton selected={activeObjectSelector} />
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={globalStyling.iconContainer}
                        onPress={() => {
                            setActiveObjectSelector('asterism');
                            setSearchAndFilterUrl('imageCategory=asterism');
                            console.log(
                                'searchAndFilterUrl asterism',
                                searchAndFilterUrl,
                            );
                            setModalVisible(!isModalVisible);
                            setCurrentPage(1);
                        }}
                        title="Filter Value">
                        <AsterismsButton selected={activeObjectSelector} />
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={globalStyling.iconContainer}
                        onPress={() => {
                            setActiveObjectSelector('nebula');
                            setSearchAndFilterUrl('imageCategory=nebula');
                            console.log(
                                'searchAndFilterUrl nebula',
                                searchAndFilterUrl,
                            );
                            setModalVisible(!isModalVisible);
                            setCurrentPage(1);
                        }}
                        title="Filter Value">
                        <NebulaButton selected={activeObjectSelector} />
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={globalStyling.iconContainer}
                        onPress={() => {
                            setActiveObjectSelector('cluster');
                            setSearchAndFilterUrl('imageCategory=cluster');
                            console.log(
                                'searchAndFilterUrl cluster',
                                searchAndFilterUrl,
                            );
                            setModalVisible(!isModalVisible);
                            setCurrentPage(1);
                        }}
                        title="Filter Value">
                        <ClustersButton selected={activeObjectSelector} />
                    </TouchableOpacity>
                </ScrollView>
            ) : (
                ''
            )}
        </View>
    );
}

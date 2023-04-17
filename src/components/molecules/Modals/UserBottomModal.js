import React, {useContext } from 'react';
import {
  View,
  Text,
  Pressable,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import Modal from "react-native-modal";
import {
  NebulaButton,
  GalaxyButton,
  CometButton,
  PlanetButton,
  AsterismsButton,
  ClustersButton,
  IssTransitButton,
  LunarButton,
  SolarButton
} from '../../../components/atoms';

import { AuthContext } from '../../../context/AuthContext';
import globalStyling from '../../../../constants/globalStyling';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';


export default function UserBottomFilterModal() {

  const {
    userSearchAndFilterUrl,
    setUserSearchAndFilterUrl,
    isSortModalVisible,
    setSortModalVisible,
    userActiveSelector,
    setUserActiveSelector,
    userActiveObjectSelector,
    setUserActiveObjectSelector,
    setUserCurrentPage
} = useContext(AuthContext);

  return (
    <View>
      <Modal
        backdropOpacity={0.5}
        isVisible={isSortModalVisible}
        onBackdropPress={() => {
          setSortModalVisible(false);
        }}
        style={globalStyling.bottomModalWrapper}
        onSwipeComplete={() => {
          setSortModalVisible(false);
        }}
        swipeDirection={['down']}
        propagateSwipe={true}>
        <View style={globalStyling.bottomModalView}>
          <Icon name="minus" size={50} color="lightgrey" />
          <Text style={globalStyling.bottomModalText}>Sort or Filter by:</Text>
          <View style={globalStyling.bottomModalButtonWrapper}>
            <Pressable
              style={
                userActiveSelector == 'most_recent'
                  ? [globalStyling.bottomModalButton, globalStyling.bottomModalButtonSelected]
                  : [globalStyling.bottomModalButton, globalStyling.bottomModalButtonUnselected]
              }
              onPress={() => {
                setSortModalVisible(!isSortModalVisible);
                setUserSearchAndFilterUrl('');
                setUserActiveSelector('most_recent');
                setUserCurrentPage(1);
              }}>
              <Text style={globalStyling.bottomModalButtonText}>Most recent</Text>
            </Pressable>
            <Pressable
              style={
                userActiveSelector == 'object_type'
                  ? [globalStyling.bottomModalButton, globalStyling.bottomModalButtonSelected]
                  : [globalStyling.bottomModalButton, globalStyling.bottomModalButtonUnselected]
              }
              onPress={() => {
                setUserActiveSelector('object_type');
                userActiveObjectSelector !== "" ? setUserSearchAndFilterUrl(`imageCategory=${userActiveObjectSelector}`) : setUserSearchAndFilterUrl('')
                setUserCurrentPage(1);
              }}>
              <Text style={globalStyling.bottomModalButtonText}>Object Type</Text>
            </Pressable>
            <Pressable
              style={
                userActiveSelector == 'randomizer'
                  ? [globalStyling.bottomModalButton, globalStyling.bottomModalButtonSelected]
                  : [globalStyling.bottomModalButton, globalStyling.bottomModalButtonUnselected]
              }
              onPress={() => {
                setSortModalVisible(!isSortModalVisible);
                setUserSearchAndFilterUrl('ordering=?');
                setUserActiveSelector('randomizer');
                setUserCurrentPage(1);
              }}>
              <Text style={globalStyling.bottomModalButtonText}>Randomizer</Text>
            </Pressable>
          </View>
          {userActiveSelector == 'object_type' ? (
            <ScrollView horizontal={true} style={globalStyling.horizontalScrollview}>
              <TouchableOpacity
                style={globalStyling.iconContainer}
                onPress={() => {
                  setUserActiveObjectSelector('iss_transit');
                  setUserSearchAndFilterUrl('imageCategory=iss_transit');
                  console.log('userSearchAndFilterUrl iss', userSearchAndFilterUrl);
                  setSortModalVisible(!isSortModalVisible);
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
                  console.log('userSearchAndFilterUrl lunar', userSearchAndFilterUrl);
                  setSortModalVisible(!isSortModalVisible);
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
                  console.log('userSearchAndFilterUrl solar', userSearchAndFilterUrl);
                  setSortModalVisible(!isSortModalVisible);
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
                  console.log('userSearchAndFilterUrl planet', userSearchAndFilterUrl);
                  setSortModalVisible(!isSortModalVisible);
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
                  console.log('userSearchAndFilterUrl comet', userSearchAndFilterUrl);
                  setSortModalVisible(!isSortModalVisible);
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
                  console.log('userSearchAndFilterUrl galaxy', userSearchAndFilterUrl);
                  setSortModalVisible(!isSortModalVisible);
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
                  setSortModalVisible(!isSortModalVisible);
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
                  console.log('userSearchAndFilterUrl nebula', userSearchAndFilterUrl);
                  setSortModalVisible(!isSortModalVisible);
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
                  console.log('userSearchAndFilterUrl cluster', userSearchAndFilterUrl);
                  setSortModalVisible(!isSortModalVisible);
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
      </Modal>
    </View>
  );
}

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
        style={styles.modalWrapper}
        onSwipeComplete={() => {
          setSortModalVisible(false);
        }}
        swipeDirection={['down']}
        propagateSwipe={true}>
        <View style={styles.modalView}>
          <Icon name="minus" size={50} color="lightgray" />
          <Text style={styles.modalText}>Sort or Filter by:</Text>
          <View style={styles.buttonWrapper}>
            <Pressable
              style={
                userActiveSelector == 'most_recent'
                  ? [styles.button, styles.buttonSelected]
                  : [styles.button, styles.buttonUnselected]
              }
              onPress={() => {
                setSortModalVisible(!isSortModalVisible);
                setUserSearchAndFilterUrl('');
                setUserActiveSelector('most_recent');
                setUserCurrentPage(1);
              }}>
              <Text style={styles.buttonText}>Most recent</Text>
            </Pressable>
            <Pressable
              style={
                userActiveSelector == 'object_type'
                  ? [styles.button, styles.buttonSelected]
                  : [styles.button, styles.buttonUnselected]
              }
              onPress={() => {
                setUserActiveSelector('object_type');
                userActiveObjectSelector !== "" ? setUserSearchAndFilterUrl(`imageCategory=${userActiveObjectSelector}`) : setUserSearchAndFilterUrl('')
                setUserCurrentPage(1);
              }}>
              <Text style={styles.buttonText}>Object Type</Text>
            </Pressable>
            <Pressable
              style={
                userActiveSelector == 'randomizer'
                  ? [styles.button, styles.buttonSelected]
                  : [styles.button, styles.buttonUnselected]
              }
              onPress={() => {
                setSortModalVisible(!isSortModalVisible);
                setUserSearchAndFilterUrl('ordering=?');
                setUserActiveSelector('randomizer');
                setUserCurrentPage(1);
              }}>
              <Text style={styles.buttonText}>Randomizer</Text>
            </Pressable>
          </View>
          {userActiveSelector == 'object_type' ? (
            <ScrollView horizontal={true} style={styles.horizontalScrollview}>
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    display: 'flex',
    backgroundColor: '#000000',//'#2F2F2F',
    borderColor: 'yellow',
    borderWidth: 0,
  },
  text: {
    fontSize: 25,
    fontWeight: '500',
    color: 'red',
    textAlign: 'center',
  },
  image: {
    width: '100%',
    height: 200,
  },
  modalWrapper: {
    borderColor: 'red',
    borderWidth: 0,
    margin: 0,
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'baseline',
  },
  modalView: {
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    bottom: 0,
    width: '100%',

    paddingBottom: 30,
    paddingLeft: 30,
    paddingRight: 30,
    alignItems: 'center',
    elevation: 10,
    backgroundColor: '#2F2F2F',
    borderColor: 'green',
    borderWidth: 0,
  },
  buttonWrapper: {
    width: '90%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    borderRadius: 25,
    padding: 8,
    elevation: 2,
    width: 90,
    height: 32,
    gap: 5,
  },
  buttonUnselected: {
    backgroundColor: '#DDD7D7',
  },
  buttonSelected: {
    backgroundColor: '#FDD015',
  },
  buttonText: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 11,
    textAlign: 'center',
    textAlignVertical: 'center',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    borderColor: 'red',
    borderWidth: 0,
    gap: 20,
  },
  horizontalScrollview: {
    marginBottom: 10,
  },
  iconContainer: {
    width: 150,
    borderColor: 'yellow',
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    display: 'flex',
    top: 0,
  },
});

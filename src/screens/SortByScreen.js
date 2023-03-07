import { 
    View, 
    Text,
    Button,
    SafeAreaView,
    ScrollView,
    StyleSheet,
} from 'react-native'

import React from 'react'
import { UserNameImageBurgerHeader } from '../components/molecules';
import { DualColumnMasonryList } from '../components/templates';


const props = [
    {
        "imageURL": require('../assets/TestAstroImages/Element6.png'),
        "astroNameShort": "DC420",
        "astroName": "Star #3",
        "poster": "Moongirl",
        "userImage": require('../assets/Sample/sampleuser2.png'),
        "imageIsSaved": false,
        "award": "silver",
        "exposureTime": "6 hrs",
        "moonPhase": "50%",
        "cloudCoverage": "10%",
        "bortle": "3",
        "imageDescription": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        "starCamp": "Aberdeen",
        "leadingLight": false
    },
    {
        "poster": "testperson",
        "imageURL": require('../assets/TestAstroImages/Element2.png'),
        "award": "bronze",
        "astroNameShort": "Test2",
        "astroName": "Test 2 Long",
        "imageCategory":"Nebula",
        "imageIsSaved": false,
        "award": "gold",
        "exposureTime": "6 hrs",
        "moonPhase": "50%",
        "cloudCoverage": "10%",
        "bortle": "3",
        "imageDescription": "Lorem ipsum Tet 2 long",
        "starCamp": "Glasgow",
        "leadingLight": false
    },
    {
        "poster": "stargirl",
        "imageURL": require('../assets/TestAstroImages/Element5.png'),
        "award": "silver",
        "astroNameShort": "Test2",
        "astroName": "Test 2 Long","imageCategory":"Nebula",
        "imageIsSaved": false,
        "award": "gold",
        "exposureTime": "6 hrs",
        "moonPhase": "50%",
        "cloudCoverage": "10%",
        "bortle": "3",
        "imageDescription": "Lorem ipsum Tet 2 long",
        "starCamp": "Glasgow",
        "leadingLight": false
    },
    {
        "poster": "starboy",
        "imageURL": require('../assets/TestAstroImages/Element181.png'),
        "award": "gold",
        "astroNameShort": "Test2",
        "astroName": "Test 2 Long","imageCategory":"Nebula",
        "imageIsSaved": false,
        "award": "gold",
        "exposureTime": "6 hrs",
        "moonPhase": "50%",
        "cloudCoverage": "10%",
        "bortle": "3",
        "imageDescription": "Lorem ipsum Tet 2 long",
        "starCamp": "Glasgow",
        "leadingLight": false
    },
    {
        "poster": "Steffen",
        "imageURL": require('../assets/TestAstroImages/Element7.png'),
        "award": "none",
        "astroNameShort": "Test2",
        "astroName": "Test 2 Long",
        "imageCategory":"Nebula",
        "imageIsSaved": false,
        "award": "gold",
        "exposureTime": "6 hrs",
        "moonPhase": "50%",
        "cloudCoverage": "10%",
        "bortle": "3",
        "imageDescription": "Lorem ipsum Tet 2 long",
        "starCamp": "Glasgow",
        "leadingLight": false
    },
    
    {
        "imageURL": require('../assets/TestAstroImages/Element241.png'),
        "astroNameShort": "IC442",
        "astroNameShort2": "NGC 1234",
        "astroNameShort3": "Omega",
        "astroName": "Star #1",
        "poster": "Starman",
        "userImage": require('../assets/Sample/sampleuser2.png'),
        "imageIsSaved": false,
        "award": "bronze",
        "exposureTime": "6 hrs",
        "moonPhase": "50%",
        "cloudCoverage": "10%",
        "bortle": "3",
        "imageDescription": "The Omega Nebula, also known as the Swan Nebula, Checkmark Nebula, Lobster Nebula, and the Horseshoe Nebula is an H II region in the constellation Sagittarius. It was discovered by Philippe Loys de Chéseaux in 1745. Charles Messier catalogued it in 1764. ",
        "starCamp": "Glasgow",
        "leadingLight": false
    },
    {
        "imageURL": require('../assets/TestAstroImages/Element261.png'),
        "astroNameShort": "SS234",
        "astroNameShort2": "NGC 5678",
        "astroNameShort3": "Omega Nebula",
        "astroName": "Star #2",
        "poster": "Moonboy",
        "userImage": require('../assets/Sample/sampleuser2.png'),
        "imageIsSaved": false,
        "award": "none",
        "exposureTime": "6 hrs",
        "moonPhase": "50%",
        "cloudCoverage": "10%",
        "bortle": "3",
        "imageDescription": "A dark nebula or absorption nebula is a type of interstellar cloud, particularly molecular clouds, that is so dense that it obscures the visible wavelengths of light from objects behind it, such as background stars and emission or reflection nebulae. The extinction of the light is caused by interstellar dust grains located in the coldest, densest parts of molecular clouds. Clusters and large complexes of dark nebulae are associated with Giant Molecular Clouds. Isolated small dark nebulae are called Bok globules. Like other interstellar dust or material, things it obscures are only visible using radio waves in radio astronomy or infrared in infrared astronomy. ",
        "starCamp": "Edinburgh",
        "leadingLight": false
    },
    {
        "imageURL": require('../assets/TestAstroImages/Element6.png'),
        "astroNameShort": "DC420",
        "astroName": "Star #3",
        "poster": "Moongirl",
        "userImage": require('../assets/Sample/sampleuser2.png'),
        "imageIsSaved": false,
        "award": "silver",
        "exposureTime": "6 hrs",
        "moonPhase": "50%",
        "cloudCoverage": "10%",
        "bortle": "3",
        "imageDescription": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        "starCamp": "Aberdeen",
        "leadingLight": false
    },
    {
        "poster": "testperson",
        "imageURL": require('../assets/TestAstroImages/Element2.png'),
        "award": "bronze",
        "astroNameShort": "Test2",
        "astroName": "Test 2 Long",
        "imageCategory":"Nebula",
        "imageIsSaved": false,
        "award": "gold",
        "exposureTime": "6 hrs",
        "moonPhase": "50%",
        "cloudCoverage": "10%",
        "bortle": "3",
        "imageDescription": "Lorem ipsum Tet 2 long",
        "starCamp": "Glasgow",
        "leadingLight": false
    },
    {
        "poster": "stargirl",
        "imageURL": require('../assets/TestAstroImages/Element5.png'),
        "award": "silver",
        "astroNameShort": "Test2",
        "astroName": "Test 2 Long","imageCategory":"Nebula",
        "imageIsSaved": false,
        "award": "gold",
        "exposureTime": "6 hrs",
        "moonPhase": "50%",
        "cloudCoverage": "10%",
        "bortle": "3",
        "imageDescription": "Lorem ipsum Tet 2 long",
        "starCamp": "Glasgow",
        "leadingLight": false
    },
    {
        "poster": "starboy",
        "imageURL": require('../assets/TestAstroImages/Element181.png'),
        "award": "gold",
        "astroNameShort": "Test2",
        "astroName": "Test 2 Long","imageCategory":"Nebula",
        "imageIsSaved": false,
        "award": "gold",
        "exposureTime": "6 hrs",
        "moonPhase": "50%",
        "cloudCoverage": "10%",
        "bortle": "3",
        "imageDescription": "Lorem ipsum Tet 2 long",
        "starCamp": "Glasgow",
        "leadingLight": false
    },
    {
        "poster": "Steffen",
        "imageURL": require('../assets/TestAstroImages/Element7.png'),
        "award": "none",
        "astroNameShort": "Test2",
        "astroName": "Test 2 Long",
        "imageCategory":"Nebula",
        "imageIsSaved": false,
        "award": "gold",
        "exposureTime": "6 hrs",
        "moonPhase": "50%",
        "cloudCoverage": "10%",
        "bortle": "3",
        "imageDescription": "Lorem ipsum Tet 2 long",
        "starCamp": "Glasgow",
        "leadingLight": false
    },
    // {
    //     "astroName": "Messier 104, M104, NGC 4594, Sombrero Galaxy",
    //     "astroName": "Omega Nebula, Messier 17, M17, NGC 6618, Swan Nebula, Horseshoe Nebula, Lobster Nebula"
    // }
]

const SortByScreen = ({ navigation }) => {

    const localFeedData = require('../assets/data/feed.json');


    return (
        <SafeAreaView style={styles.container}>
            <UserNameImageBurgerHeader />
            <DualColumnMasonryList props={localFeedData}/>
        </SafeAreaView>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        display: 'flex',
        backgroundColor: "#2F2F2F",
        borderColor:"green", 
        borderWidth: 0,
    },
    text: {
        fontSize: 25,
        fontWeight: '500',
        color: 'red',
        textAlign: 'center'
    },
    image: {
        width: "100%",
        height: 200
    }
});

export default SortByScreen;
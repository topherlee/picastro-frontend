import React from 'react';

import {
    Button,
    Image,
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    TouchableOpacity,
    useColorScheme,
    View,
} from 'react-native';
import { ExtendedPicastroBurgerHeader, UserNameImageBurgerHeader,UserNameImageWithoutBurger } from '../components/molecules';
import { HalfWidthPostsContainer } from '../components/organisms';
import MasonryList from 'reanimated-masonry-list';
import { AwardIcon, ExtendedPicastroLogo } from '../components/atoms';

const props = [
    {
        "imageURL": "https://assets1.cbsnewsstatic.com/hub/i/r/2021/08/02/d9ac932d-6482-4798-9b9e-96caec967826/thumbnail/620x463/9ef7321a2c4274bab26eb11694f4d368/galaxiescollide.jpg",
        "astroNameShort": "IC442",
        "astroNameShort2": "NGC 1234",
        "astroNameShort3": "Omega",
        "astroName": "Star #1",
        "userName": "Starman",
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
    // {
    //     "imageURL": require('../assets/TestAstroImages/Element261.png'),
    //     "astroNameShort": "SS234",
    //     "astroNameShort2": "NGC 5678",
    //     "astroNameShort3": "Omega Nebula",
    //     "astroName": "Star #2",
    //     "userName": "Moonboy",
    //     "userImage": require('../assets/Sample/sampleuser2.png'),
    //     "imageIsSaved": false,
    //     "award": "none",
    //     "exposureTime": "6 hrs",
    //     "moonPhase": "50%",
    //     "cloudCoverage": "10%",
    //     "bortle": "3",
    //     "imageDescription": "A dark nebula or absorption nebula is a type of interstellar cloud, particularly molecular clouds, that is so dense that it obscures the visible wavelengths of light from objects behind it, such as background stars and emission or reflection nebulae. The extinction of the light is caused by interstellar dust grains located in the coldest, densest parts of molecular clouds. Clusters and large complexes of dark nebulae are associated with Giant Molecular Clouds. Isolated small dark nebulae are called Bok globules. Like other interstellar dust or material, things it obscures are only visible using radio waves in radio astronomy or infrared in infrared astronomy. ",
    //     "starCamp": "Edinburgh",
    //     "leadingLight": false
    // },
    // {
    //     "imageURL": require('../assets/TestAstroImages/Element6.png'),
    //     "astroNameShort": "DC420",
    //     "astroName": "Star #3",
    //     "userName": "Moongirl",
    //     "userImage": require('../assets/Sample/sampleuser2.png'),
    //     "imageIsSaved": false,
    //     "award": "silver",
    //     "exposureTime": "6 hrs",
    //     "moonPhase": "50%",
    //     "cloudCoverage": "10%",
    //     "bortle": "3",
    //     "imageDescription": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    //     "starCamp": "Aberdeen",
    //     "leadingLight": false
    // },
    // {
    //     "userName": "testperson",
    //     "imageURL": require('../assets/TestAstroImages/Element2.png'),
    //     "award": "bronze",
    //     "astroNameShort": "Test2",
    //     "astroName": "Test 2 Long",
    //     "imageCategory":"Nebula",
    //     "imageIsSaved": false,
    //     "award": "gold",
    //     "exposureTime": "6 hrs",
    //     "moonPhase": "50%",
    //     "cloudCoverage": "10%",
    //     "bortle": "3",
    //     "imageDescription": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    //     "starCamp": "Glasgow",
    //     "leadingLight": false
    // },
    // {
    //     "userName": "stargirl",
    //     "imageURL": require('../assets/TestAstroImages/Element5.png'),
    //     "award": "silver",
    //     "astroNameShort": "Test2",
    //     "astroName": "Test 2 Long","imageCategory":"Nebula",
    //     "imageIsSaved": false,
    //     "award": "gold",
    //     "exposureTime": "6 hrs",
    //     "moonPhase": "50%",
    //     "cloudCoverage": "10%",
    //     "bortle": "3",
    //     "imageDescription": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    //     "starCamp": "Glasgow",
    //     "leadingLight": false
    // },
    // {
    //     "userName": "starboy",
    //     "imageURL": require('../assets/TestAstroImages/Element181.png'),
    //     "award": "gold",
    //     "astroNameShort": "Test2",
    //     "astroName": "Test 2 Long","imageCategory":"Nebula",
    //     "imageIsSaved": false,
    //     "award": "gold",
    //     "exposureTime": "6 hrs",
    //     "moonPhase": "50%",
    //     "cloudCoverage": "10%",
    //     "bortle": "3",
    //     "imageDescription": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    //     "starCamp": "Glasgow",
    //     "leadingLight": false
    // },
    // {
    //     "userName": "Steffen",
    //     "imageURL": require('../assets/TestAstroImages/Element7.png'),
    //     "award": "none",
    //     "astroNameShort": "Test2",
    //     "astroName": "Test 2 Long",
    //     "imageCategory":"Nebula",
    //     "imageIsSaved": false,
    //     "award": "gold",
    //     "exposureTime": "6 hrs",
    //     "moonPhase": "50%",
    //     "cloudCoverage": "10%",
    //     "bortle": "3",
    //     "imageDescription": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    //     "starCamp": "Glasgow",
    //     "leadingLight": false
    // },
    
    // {
    //     "imageURL": require('../assets/TestAstroImages/Element241.png'),
    //     "astroNameShort": "IC442",
    //     "astroNameShort2": "NGC 1234",
    //     "astroNameShort3": "Omega",
    //     "astroName": "Star #1",
    //     "userName": "Starman",
    //     "userImage": require('../assets/Sample/sampleuser2.png'),
    //     "imageIsSaved": false,
    //     "award": "bronze",
    //     "exposureTime": "6 hrs",
    //     "moonPhase": "50%",
    //     "cloudCoverage": "10%",
    //     "bortle": "3",
    //     "imageDescription": "The Omega Nebula, also known as the Swan Nebula, Checkmark Nebula, Lobster Nebula, and the Horseshoe Nebula is an H II region in the constellation Sagittarius. It was discovered by Philippe Loys de Chéseaux in 1745. Charles Messier catalogued it in 1764. ",
    //     "starCamp": "Glasgow",
    //     "leadingLight": false
    // },
    // {
    //     "imageURL": require('../assets/TestAstroImages/Element261.png'),
    //     "astroNameShort": "SS234",
    //     "astroNameShort2": "NGC 5678",
    //     "astroNameShort3": "Omega Nebula",
    //     "astroName": "Star #2",
    //     "userName": "Moonboy",
    //     "userImage": require('../assets/Sample/sampleuser2.png'),
    //     "imageIsSaved": false,
    //     "award": "none",
    //     "exposureTime": "6 hrs",
    //     "moonPhase": "50%",
    //     "cloudCoverage": "10%",
    //     "bortle": "3",
    //     "imageDescription": "A dark nebula or absorption nebula is a type of interstellar cloud, particularly molecular clouds, that is so dense that it obscures the visible wavelengths of light from objects behind it, such as background stars and emission or reflection nebulae. The extinction of the light is caused by interstellar dust grains located in the coldest, densest parts of molecular clouds. Clusters and large complexes of dark nebulae are associated with Giant Molecular Clouds. Isolated small dark nebulae are called Bok globules. Like other interstellar dust or material, things it obscures are only visible using radio waves in radio astronomy or infrared in infrared astronomy. ",
    //     "starCamp": "Edinburgh",
    //     "leadingLight": false
    // },
    // {
    //     "imageURL": require('../assets/TestAstroImages/Element6.png'),
    //     "astroNameShort": "DC420",
    //     "astroName": "Star #3",
    //     "userName": "Moongirl",
    //     "userImage": require('../assets/Sample/sampleuser2.png'),
    //     "imageIsSaved": false,
    //     "award": "silver",
    //     "exposureTime": "6 hrs",
    //     "moonPhase": "50%",
    //     "cloudCoverage": "10%",
    //     "bortle": "3",
    //     "imageDescription": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    //     "starCamp": "Aberdeen",
    //     "leadingLight": false
    // },
    // {
    //     "userName": "testperson",
    //     "imageURL": require('../assets/TestAstroImages/Element2.png'),
    //     "award": "bronze",
    //     "astroNameShort": "Test2",
    //     "astroName": "Test 2 Long",
    //     "imageCategory":"Nebula",
    //     "imageIsSaved": false,
    //     "award": "gold",
    //     "exposureTime": "6 hrs",
    //     "moonPhase": "50%",
    //     "cloudCoverage": "10%",
    //     "bortle": "3",
    //     "imageDescription": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    //     "starCamp": "Glasgow",
    //     "leadingLight": false
    // },
    // {
    //     "userName": "stargirl",
    //     "imageURL": require('../assets/TestAstroImages/Element5.png'),
    //     "award": "silver",
    //     "astroNameShort": "Test2",
    //     "astroName": "Test 2 Long","imageCategory":"Nebula",
    //     "imageIsSaved": false,
    //     "award": "gold",
    //     "exposureTime": "6 hrs",
    //     "moonPhase": "50%",
    //     "cloudCoverage": "10%",
    //     "bortle": "3",
    //     "imageDescription": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    //     "starCamp": "Glasgow",
    //     "leadingLight": false
    // },
    // {
    //     "userName": "starboy",
    //     "imageURL": require('../assets/TestAstroImages/Element181.png'),
    //     "award": "gold",
    //     "astroNameShort": "Test2",
    //     "astroName": "Test 2 Long","imageCategory":"Nebula",
    //     "imageIsSaved": false,
    //     "award": "gold",
    //     "exposureTime": "6 hrs",
    //     "moonPhase": "50%",
    //     "cloudCoverage": "10%",
    //     "bortle": "3",
    //     "imageDescription": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    //     "starCamp": "Glasgow",
    //     "leadingLight": false
    // },
    // {
    //     "userName": "Steffen",
    //     "imageURL": require('../assets/TestAstroImages/Element7.png'),
    //     "award": "none",
    //     "astroNameShort": "Test2",
    //     "astroName": "Test 2 Long",
    //     "imageCategory":"Nebula",
    //     "imageIsSaved": false,
    //     "award": "gold",
    //     "exposureTime": "6 hrs",
    //     "moonPhase": "50%",
    //     "cloudCoverage": "10%",
    //     "bortle": "3",
    //     "imageDescription": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    //     "starCamp": "Glasgow",
    //     "leadingLight": false
    // },
    // {
    //     "astroName": "Messier 104, M104, NGC 4594, Sombrero Galaxy",
    //     "astroName": "Omega Nebula, Messier 17, M17, NGC 6618, Swan Nebula, Horseshoe Nebula, Lobster Nebula"
    // }
]

//astroName.split(", ").map()


const UserScreen = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.container}>
            {/* <Image style={styles.logo} resizeMode="contain" source={require('../assets/logo-text-gray.png')} /> */}
            <ExtendedPicastroBurgerHeader />
            {/* <UserNameImageWithoutBurger /> */}
            <AwardIcon />

            <Text style={styles.text}>Lawyer By Day,amateur photographer by night. Help Elliot fight</Text>   
            <Text style={styles.text}>Photo by Me</Text>  
            {/* <Image style={styles.logo} resizeMode="contain" source={require('../assets/logo-text-gray.png')} /> */}        
            <AwardIcon />
            <TouchableOpacity style={styles.loginBtn} onPress= {function(){ navigation.navigate('EditProfile') }}>
                <Text style={styles.loginText}>Edit Profile</Text> 
            </TouchableOpacity>
            <ScrollView style={{
                    backgroundColor: "black",
                    borderColor:"blue", 
                    borderWidth: 0,
            }}
            contentContainerStyle={{
                display: "flex",
                flex: 1,
                flexDirection: 'row',
                justifyContent: "center",
                alignContent: 'center'
            }}>
                <MasonryList
                    data={props}
                    keyExtractor={item => item.id}
                    numColumns={2}
                    showsVerticalScrollIndicator={false}
                    renderItem={({item}) => <HalfWidthPostsContainer {...item} />}
                    contentContainerStyle={{
                        borderColor:"red", 
                        borderWidth: 0,
                        paddingTop: "3%",
                        paddingLeft: "4%"
                    }}
                    style={{
                        flex: 1,
                        maxWidth: "96%",
                        columnGap: 10,
                        borderColor:"yellow", 
                        borderWidth: 0,
                    }}
                >
                </MasonryList>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        display: 'flex',
        backgroundColor: "#2F2F2F",
        borderColor:"green", 
        borderWidth: 0,
        
    },
    text: {
        fontSize: 15,
        fontWeight: '500',
        color: 'white',
        textAlign: 'center'
    },
    image: {
        position: "relative",
        marginBottom: "10%",
    },
    loginBtn: {
        width: "80%",
        borderRadius: 25,
        height: "7%",
        minHeight: 50,
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        marginTop: "10%",
        marginBottom: "3%",
        backgroundColor: "#FFC700",
    },
    loginText: {
        fontWeight: "bold",
        // flexDirection:'row',
        // position: "relative",
        // marginBottom: "2%"
        
    },
   
    // title: {
    //     color: "#FFC700",
    //     fontWeight: "bold",
    //     fontSize: 20,
    //     position: "relative",
    //     top: "-5%"
    //   },
});

export default UserScreen;
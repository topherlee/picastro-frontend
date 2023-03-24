import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    inputFieldText: {   // styling for the <TextInput> component
      height: 50,
      width: "100%",
      flex: 1,
      padding: 10,
      textAlign: "center",
      color: "black",
    },
    yellowWideButton: {
      color: 'blue',
      width: 70,
      height: 70
    },
    yellowNarrowButton: {
        borderRadius: 25,
        padding: 8,
        elevation: 2,
        width: 90,
        height: 32,
        backgroundColor: '#FDD015',
    },
    narrowButtonText: {
      color: 'black',
      fontWeight: 'bold',
      fontSize: 11,
      textAlign: 'center',
      textAlignVertical: 'center'
    },
    SortByModalTextGrey: {
      color: '#959595',
    },
    SortByModalTextYellow: {
      color: '#FFC700'
    },
    iconContainer: {
        width: 100,
        height: 107,
        borderColor: 'white',
        borderWidth: 0,
        alignItems: 'center',
        gap: 5,
        top: 30
    },
    sortByModalSvg: {
      color: 'blue',
      width: 70,
      height: 70
    },
    SortByModalText: {
      fontFamily: 'Inter',
      fontStyle: 'normal',
      fontWeight: 500,
      fontSize: 13,
      textAlign: 'center'
    },
    SortByModalTextGrey: {
      color: '#959595',
    },
    SortByModalTextYellow: {
      color: '#FFC700'
    },
    iconContainer: {
        width: 100,
        height: 107,
        borderColor: 'white',
        borderWidth: 0,
        alignItems: 'center',
        gap: 5,
        top: 30
    }
});
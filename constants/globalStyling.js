import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  inputView: {
    backgroundColor: "white",
    borderRadius: 10,
    width: "80%",
    height: 45,
    marginBottom: 20,
    alignItems: "center",
    display: "flex",
    flexDirection: "row",
  },
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
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    gap: 20,
  },
  NavBarButton: {
    width: 40,
    height: 40,
  },
  bottomModalWrapper: {
    borderColor: 'red',
    borderWidth: 0,
    margin: 0,
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'baseline',
  },
  bottomModalView: {
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
  bottomModalButton: {
    borderRadius: 25,
    padding: 8,
    elevation: 2,
    width: 90,
    height: 32,
    borderColor: 'red',
    borderWidth: 0
  },
  bottomModalButtonUnselected: {
    backgroundColor: '#DDD7D7',
  },
  bottomModalButtonSelected: {
    backgroundColor: '#FDD015',
  },
  bottomModalText: {
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
  bottomModalButtonWrapper: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 5,
    borderColor: 'red',
    borderWidth: 0
  },
  bottomModalButtonText: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 11,
    textAlign: 'center',
    textAlignVertical: 'center',
  },
  horizontalScrollview: {
    marginBottom: 10,
  },
});
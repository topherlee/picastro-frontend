import React, {useState, useContext, useEffect, useRef, useMemo} from 'react';
import {
	StyleSheet,
	Text,
	View,
	TextInput,
	TouchableOpacity,
	Alert,
	ScrollView,
	KeyboardAvoidingView,
	Dimensions,
	SafeAreaView,
	ActivityIndicator,
	Modal,
	Button,
} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {AuthContext} from '../context/AuthContext';
import {launchImageLibrary} from 'react-native-image-picker';
import * as Burnt from 'burnt';
import {AutoscaleImage} from '../components/atoms';
import {jwtDecode} from 'jwt-decode';
import globalStyling from '../../constants/globalStyling';
import {Dropdown} from '../components/common';

var userId;

const ImageUploadScreen = ({navigation}) => {
	const {domain, token, fetchInstance} = useContext(AuthContext);
	const [loading, setLoading] = useState(false);
	const [complete, setComplete] = useState(false);
	const [photo, setPhoto] = useState(null);
	const [imageDescription, setImageDescription] = useState('');
	const [selected, setSelected] = useState('');
	const [imageCategory, setImageCategory] = useState('');
	const [astroNameShort, setAstroNameShort] = useState('');
	const [astroName, setAstroName] = useState('');
	const [exposureTime, setExposureTime] = useState('');
	const [moonPhase, setMoonPhase] = useState('');
	const [cloudCoverage, setCloudCoverage] = useState('');
	const [bortle, setBortle] = useState('');

	const inputRef = useRef([]);

	const options = useMemo(() => {
		let options = [];
		const category = [
			{key: 'iss_transit', value: 'ISS Transit'},
			{key: 'lunar', value: 'Lunar'},
			{key: 'solar', value: 'Solar'},
			{key: 'planet', value: 'Planet'},
			{key: 'comet', value: 'Comet'},
			{key: 'galaxy', value: 'Galaxy'},
			{key: 'nebula', value: 'Nebula'},
			{key: 'asterism', value: 'Asterism'},
			{key: 'cluster', value: 'Star / Cluster'},
			{key: 'mcloud', value: 'Molecular Cloud'},
			{key: 'other', value: 'Other'},
		];

		for (let item of category) {
			options.push({
				title: item.value,
				onSelect: () => {
					setImageCategory(item.value);
					setSelected(item.key);
				},
			});
		}

		return options;
	});

	const resetForm = () => {
		setPhoto(null);
		setImageDescription('');
		setSelected('');
		setImageCategory('');
		setAstroName('');
		setAstroNameShort('');
		setExposureTime('');
		setCloudCoverage('');
		setMoonPhase('');
		setBortle('');
	};

	//console.log("image category", imageCategory);

	useEffect(() => {
		userId = jwtDecode(token?.access).user_id;
	}, []);

	const uploadedHandler = async (response) => {
		console.log(response);
		Burnt.dismissAllAlerts();
		if (response.ok) {
			console.log('UPLOAD RESULT', await response.json());
			setComplete(false);
			setLoading(false);
			// resetForm();
			Burnt.toast({
				title: 'Upload Successful', // required
				preset: 'done',
				haptic: 'success',
				duration: 2, // duration in seconds
				shouldDismissByDrag: true,
			});
			setTimeout(() => navigation.navigate('Home', {refresh: true}), 1000);
		} else {
			setLoading(false);
			Burnt.alert({
				title: 'Upload Failed', // required
				preset: 'error',
				message: `HTTP Response Status ${JSON.stringify(response.status)}`, // optional
				shouldDismissByTap: true,
				duration: 2, // duration in seconds
			});
		}
	};

	const pickImage = () => {
		launchImageLibrary(
			{
				mediaType: 'photo',
				presentationStyle: 'fullScreen',
				includeExtra: true,
			},
			(response) => {
				if (response.didCancel) {
					console.log('User cancelled image picker');
				} else if (response.error) {
					console.log('ImagePicker Error: ', response.error);
				} else if (response.customButton) {
					console.log('User tapped custom button: ', response.customButton);
				} else {
					const source = {uri: response.uri};
					// You can also display the image using data:
					// const source = { uri: 'data:image/jpeg;base64,' + response.data };

					// photo=response.assets[0];
					setPhoto(response.assets[0]);
					// console.log('Response = ', response);
				}
			},
		);
	};

	const uploadImage = async () => {
		setLoading(true);
		try {
			var formData = new FormData();
			formData.append('image', {
				uri: photo.uri,
				name: photo.fileName,
				type: photo.type,
			});

			formData.append('poster', userId);

			formData.append('imageDescription', imageDescription);
			formData.append('imageCategory', selected);
			formData.append('astroNameShort', astroNameShort);
			formData.append('astroName', astroName);
			formData.append('exposureTime', exposureTime);
			formData.append('moonPhase', moonPhase);
			formData.append('cloudCoverage', cloudCoverage);
			formData.append('bortle', bortle);
			formData.append('starCamp', 'Aberdeen');

			var response = await fetchInstance('/api/feed/', {
				method: 'POST',
				headers: {
					'Content-Type': 'multipart/form-data',
				},
				body: formData,
			});

			await uploadedHandler(response);
		} catch (err) {
			console.log('ERROR UPLOAD', err, response);
			setLoading(false);
		}
	};

	function LoadingAnimation() {
		Burnt.alert({
			title: 'Uploading Image...', // required
			preset: 'spinner',
			shouldDismissByTap: true,
			duration: 60,
		});
	}

	return (
		<SafeAreaView style={styles.container}>
			<KeyboardAwareScrollView
				contentContainerStyle={{
					paddingVertical: '3%',
					display: 'flex',
					alignItems: 'center',
				}}
				showsVerticalScrollIndicator={false}>
				{/* <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"}
			style={{
			display: "flex",
			flex: 1,
			alignItems: "center",
			borderWidth: 0,
			borderColor:"yellow" }}
			> */}
				<View style={styles.textcontainer}>
					<Text style={styles.title}>Upload Image</Text>
					<TouchableOpacity onPress={pickImage}>
						{photo ?
							<AutoscaleImage
								key={photo.uri}
								uri={photo.uri}
								height={Dimensions.get('window').height / 3}
								aspectRatio={photo.width / photo.height}
							/>
						:	<Icon name="file-image-plus" size={100} color={'#FFC700'} />}
					</TouchableOpacity>
					{photo ?
						<TouchableOpacity style={styles.loginBtn2} onPress={pickImage}>
							<Text style={styles.loginText}>Pick Another Image</Text>
						</TouchableOpacity>
					:	null}
				</View>
				<View style={globalStyling.inputViewLarge}>
					<TextInput
						style={globalStyling.inputFieldTextLarge}
						placeholder="Image Description"
						placeholderTextColor="grey"
						multiline={true}
						onChangeText={(newImageDescription) =>
							setImageDescription(newImageDescription)
						}
						defaultValue={imageDescription}
						returnKeyType="next"
					/>
				</View>
				<View style={globalStyling.inputView}>
					<Dropdown
						triggerStyle={{
							width: 0.8 * Dimensions.get('screen').width,
							flex: 1,
						}}
						content={options}>
						<View
							style={{
								flex: 1,
								justifyContent: 'center',
								alignItems: 'center',
							}}>
							<Text
								style={{
									color: selected == '' ? 'grey' : 'black',
								}}>
								{imageCategory == '' ? 'Object Type' : imageCategory}
							</Text>
						</View>
					</Dropdown>
				</View>
				<View style={globalStyling.inputView}>
					<TextInput
						style={globalStyling.inputFieldText}
						placeholder="Object Number (e.g. 'M17')"
						placeholderTextColor="grey"
						onChangeText={(newAstroNameShort) => setAstroNameShort(newAstroNameShort)}
						defaultValue={astroNameShort}
						ref={(ref) => (inputRef.current[1] = ref)}
						onSubmitEditing={() => {
							inputRef.current[2].focus();
						}}
						returnKeyType="next"
					/>
				</View>
				<View style={globalStyling.inputView}>
					<TextInput
						style={globalStyling.inputFieldText}
						placeholder="Object Common Name (e.g. 'Rosette Nebula')"
						placeholderTextColor="grey"
						onChangeText={(newAstroName) => setAstroName(newAstroName)}
						defaultValue={astroName}
						ref={(ref) => (inputRef.current[2] = ref)}
						onSubmitEditing={() => {
							inputRef.current[3].focus();
						}}
						returnKeyType="next"
					/>
				</View>
				<View style={globalStyling.inputView}>
					<TextInput
						style={globalStyling.inputFieldText}
						placeholder="Exposure Time"
						placeholderTextColor="grey"
						onChangeText={(newExposureTime) => setExposureTime(newExposureTime)}
						defaultValue={exposureTime}
						ref={(ref) => (inputRef.current[3] = ref)}
						onSubmitEditing={() => {
							inputRef.current[4].focus();
						}}
						returnKeyType="next"
					/>
				</View>
				<View style={globalStyling.inputView}>
					<TextInput
						style={globalStyling.inputFieldText}
						placeholder="Moon Phase"
						placeholderTextColor="grey"
						onChangeText={(newMoonPhase) => setMoonPhase(newMoonPhase)}
						defaultValue={moonPhase}
						ref={(ref) => (inputRef.current[4] = ref)}
						onSubmitEditing={() => {
							inputRef.current[5].focus();
						}}
						returnKeyType="next"
					/>
				</View>
				<View style={globalStyling.inputView}>
					<TextInput
						style={globalStyling.inputFieldText}
						placeholder="Cloud Coverage"
						placeholderTextColor="grey"
						onChangeText={(newCloudCoverage) => setCloudCoverage(newCloudCoverage)}
						defaultValue={cloudCoverage}
						ref={(ref) => (inputRef.current[5] = ref)}
						onSubmitEditing={() => {
							inputRef.current[6].focus();
						}}
						returnKeyType="next"
					/>
				</View>
				<View style={globalStyling.inputView}>
					<TextInput
						style={globalStyling.inputFieldText}
						placeholder="Bortle Scale"
						placeholderTextColor="grey"
						onChangeText={(newBortle) => setBortle(newBortle)}
						defaultValue={bortle}
						ref={(ref) => (inputRef.current[6] = ref)}
						returnKeyType="done"
						onSubmitEditing={async () => uploadImage()}
					/>
				</View>

				<TouchableOpacity style={styles.loginBtn} onPress={async () => uploadImage()}>
					<Text style={styles.loginText}>Upload Post</Text>
				</TouchableOpacity>
				{loading && <LoadingAnimation />}
				{/* </KeyboardAvoidingView> */}
			</KeyboardAwareScrollView>
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: 'black',
		borderWidth: 0,
		borderColor: 'yellow',
	},
	image: {
		position: 'relative',
		width: 155,
		height: 45,
		marginBottom: '5%',
	},
	textcontainer: {
		// marginTop:"5%",
		display: 'flex',
		marginBottom: '5%',
		alignItems: 'center',
		justifyContent: 'center',
	},
	dropdownSelectList: {
		marginTop: 1,
		zIndex: 600,
		backgroundColor: 'white',
	},
	dropdownItemStyles: {
		zIndex: 600,
		height: 40,
		textAlign: 'center',
		color: 'black',
	},
	dropdownText: {
		textAlign: 'center',
		color: 'grey',
		width: '100%',
	},
	DropdownSelectListBox: {
		zIndex: 500,
		height: 45,
		backgroundColor: 'white',
		borderColor: 'green',
		borderWidth: 0,
		color: 'black',
	},
	bottomText: {
		flexDirection: 'row',
		position: 'relative',
		marginBottom: '2%',
	},
	text: {
		color: 'white',
		justifyContent: 'center',
		// marginTop:'10%'
	},
	forgot_button: {
		height: 30,
		color: '#FFC700',
	},
	loginBtn: {
		width: '80%',
		borderRadius: 25,
		height: '4%',
		minHeight: 50,
		alignItems: 'center',
		justifyContent: 'center',
		position: 'relative',
		marginTop: '5%',
		marginBottom: '5%',
		backgroundColor: '#FFC700',
		zIndex: 1,
	},
	loginBtn2: {
		width: '100%',
		borderRadius: 25,
		height: '4%',
		minHeight: 50,
		justifyContent: 'center',
		position: 'relative',
		marginTop: '5%',
		marginBottom: '5%',
		paddingHorizontal: '10%',
		backgroundColor: '#FFC700',
	},
	title: {
		color: '#FFC700',
		fontWeight: 'bold',
		fontSize: 20,
		position: 'relative',
		marginBottom: '5%',
	},
	loginText: {
		fontWeight: 'bold',
	},
	border: {
		borderColor: 'green',
		borderWidth: 2,
	},
	selectListView: {
		zIndex: 500,
		borderColor: 'blue',
		borderWidth: 0,
		marginBottom: '5%',
		width: '80%',
	},
	indicatorWrapper: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: 'rgba(100, 100, 100, 0.9)',
	},
	indicatorText: {
		fontSize: 20,
		fontWeight: 'bold',
		marginTop: 12,
		color: '#FFC700',
	},
});
export default ImageUploadScreen;

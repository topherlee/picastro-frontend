export default function App() {
	const [search, setSearch] = useState(''); //add this line

	return (
		<SafeAreaView>
			<View style={styles.container}>
				<TextInput
					onChangeText={(text) => setSearch(text)}
					placeholder="Search"
					style={styles.searchbox}></TextInput>

				<View style={styles.makecentral}>
					{search.length < 1 ?
						<Image
							style={styles.tinyLogo}
							source={require('./assets/icons8_search_200px_3.png')}
						/>
					:	null //add clear text image and clear search text
					}
				</View>
				<View style={{flexDirection: 'row'}}>
					<View
						elevation={2}
						style={{
							flex: 3,
							backgroundColor: '#ffffff',
							height: 40,
							marginTop: 10,
							marginLeft: '2.5%',
							borderBottomLeftRadius: 5,
							borderTopLeftRadius: 5,
						}}>
						<Text
							style={{
								textAlign: 'center',
								fontSize: 20,
								color: '#FF7B00',
								marginTop: 7,
							}}>
							Category
						</Text>
					</View>

					<View
						elevation={2}
						style={{
							backgroundColor: '#FF7B00',
							height: 40,
							flex: 5,
							marginTop: 10,
							borderTopRightRadius: 5,
							borderBottomRightRadius: 5,
							marginRight: '2.5%',
						}}>
						//here..I want to add a dropdown..
					</View>
				</View>
			</View>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: '#fff',
	},

	searchbox: {
		backgroundColor: '#f2f2f2',
		marginTop: StatusBar.currentHeight + 5,
		height: 50,
		marginLeft: 10,
		marginRight: 10,
		borderRadius: 20,
		textAlignVertical: 'center',
		textAlign: 'center',
		alignItems: 'center',
	},

	tinyLogo: {
		position: 'absolute',
		width: 30,
		height: 30,
		opacity: 0.5,
		marginTop: -40,
	},

	makecentral: {
		alignItems: 'center',
		marginRight: 80,
	},

	category: {
		backgroundColor: '#f2f2f2',
		height: 50,
		width: '90%',
		alignContent: 'center',
	},
});

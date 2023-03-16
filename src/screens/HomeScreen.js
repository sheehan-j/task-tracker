import { View, SafeAreaView, Text, Pressable, StyleSheet } from "react-native";
import React from "react";

const HomeScreen = ({ navigation }) => {
	return (
		<SafeAreaView style={styles.root}>
			<View style={styles.container}>
				<View
					style={{
						flex: 1,
						width: "100%",
						paddingTop: "5%",
						justifyContent: "flex-start",
					}}
				>
					<Text style={styles.subtitle}>Hello,</Text>
					<Text style={styles.title}>Jordan</Text>
				</View>
			</View>
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	root: {
		flex: 1,
	},
	container: {
		flex: 1,
		paddingTop: "3%",
		paddingLeft: "5%",
		alignItems: "center",
	},
	title: {
		fontFamily: "Inter-ExtraBold",
	},
	title: {
		color: "#3E54AC",
		fontFamily: "Inter-Bold",
		fontSize: 40,
	},
	subtitle: {
		color: "#202020",
		fontFamily: "Inter",
		fontSize: 20,
	},
});

export default HomeScreen;

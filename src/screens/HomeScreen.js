import { View, SafeAreaView, Text, Pressable, StyleSheet } from "react-native";
import React from "react";
import InfoCard from "../components/InfoCard";
import Selector from "../components/Selector";

const HomeScreen = ({ navigation }) => {
	return (
		<SafeAreaView style={styles.root}>
			<View style={styles.container}>
				<View
					style={{
						width: "100%",
						paddingTop: "5%",
						paddingBottom: "3%",
						justifyContent: "flex-start",
					}}
				>
					<Text style={styles.subtitle}>Hello,</Text>
					<Text style={styles.title}>Jordan</Text>
				</View>
				<InfoCard progress={50}></InfoCard>
				<View style={{ flexDirection: "row" }}>
					<Selector></Selector>
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
		paddingRight: "5%",
		justifyContent: "flex-start",
	},
	title: {
		color: "#3E54AC",
		fontFamily: "Inter-Bold",
		fontSize: 40,
		padding: 0,
		lineHeight: 45,
	},
	subtitle: {
		color: "#202020",
		fontFamily: "Inter",
		fontSize: 20,
	},
});

export default HomeScreen;

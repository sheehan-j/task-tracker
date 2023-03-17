import {
	View,
	SafeAreaView,
	Text,
	Pressable,
	StyleSheet,
	ScrollView,
} from "react-native";
import { useState } from "react";
import InfoCard from "../components/InfoCard";
import Selector from "../components/Selector";
import TaskContainer from "../components/TaskContainer";
import colors from "../config/colors";

const HomeScreen = ({ navigation }) => {
	const [active, setActive] = useState("One");

	return (
		<SafeAreaView style={styles.root}>
			<View style={styles.container}>
				<View
					style={{
						width: "100%",
						paddingTop: 20,
						paddingBottom: 15,
						paddingLeft: 20,
						paddingRight: 20,
						justifyContent: "flex-start",
					}}
				>
					<Text style={styles.subtitle}>Hello,</Text>
					<Text style={styles.title}>Jordan</Text>
				</View>
				<InfoCard progress={50}></InfoCard>
				<ScrollView
					style={{ flexGrow: 0, marginTop: 20 }}
					contentContainerStyle={{
						paddingLeft: 20,
						paddingRight: 20,
					}}
					horizontal={true}
					showsHorizontalScrollIndicator={false}
				>
					<Selector
						value={"One"}
						active={active}
						setActive={setActive}
					></Selector>
					<Selector
						value={"Two"}
						active={active}
						setActive={setActive}
					></Selector>
					<Selector
						value={"Three"}
						active={active}
						setActive={setActive}
					></Selector>
					<Selector
						value={"Four"}
						active={active}
						setActive={setActive}
					></Selector>
					<Selector
						value={"Five"}
						active={active}
						setActive={setActive}
					></Selector>
					<Selector
						value={"Six"}
						active={active}
						setActive={setActive}
					></Selector>
				</ScrollView>
				<TaskContainer />
			</View>
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	root: {
		flex: 1,
		backgroundColor: colors.lightgray,
	},
	container: {
		flex: 1,
		paddingTop: "3%",
		justifyContent: "flex-start",
	},
	title: {
		color: colors.medpurple,
		fontFamily: "Inter-Bold",
		fontSize: 40,
		padding: 0,
		lineHeight: 45,
	},
	subtitle: {
		color: colors.gray,
		fontFamily: "Inter",
		fontSize: 22,
	},
});

export default HomeScreen;

import { Animated, Pressable, StyleSheet, Text, View } from "react-native";
import { Swipeable } from "react-native-gesture-handler";
import colors from "../config/colors";
import { EvilIcons } from "@expo/vector-icons";

const Task = ({ title, subtitle, completed, important }) => {
	const renderRightActions = (progress, dragX) => {
		const translateX = dragX.interpolate({
			inputRange: [-80, 0, 0],
			outputRange: [0, 80, 80],
			extrapolate: "clamp",
		});
		return (
			<Pressable onPress={() => alert("Deleted")}>
				<Animated.View
					style={[
						styles.deleteButton,
						{ transform: [{ translateX }] },
					]}
				>
					<EvilIcons name="trash" size={36} color="white" />
				</Animated.View>
			</Pressable>
		);
	};

	return (
		<Swipeable
			renderRightActions={renderRightActions}
			overshootLeft={false}
			overshootRight={false}
		>
			<View style={styles.container}>
				<Text style={styles.title}>{title}</Text>
				{subtitle && <Text style={styles.subtitle}>{subtitle}</Text>}
			</View>
		</Swipeable>
	);
};

export default Task;

const styles = StyleSheet.create({
	container: {
		paddingLeft: 22,
		paddingRight: 22,
		paddingTop: 20,
		paddingBottom: 20,
		borderBottomWidth: 1,
		borderBottomColor: colors.purpletrans,
	},
	title: {
		fontFamily: "Inter-Semi",
		fontSize: 18,
		color: colors.purpletext,
	},
	subtitle: {
		fontFamily: "Inter-Light",
		fontSize: 16,
		color: colors.gray,
	},
	deleteButton: {
		backgroundColor: "#f74f4f",
		justifyContent: "center",
		alignItems: "center",
		height: "100%",
		width: 80,
	},
	deleteText: {
		color: "white",
		fontWeight: "600",
	},
});

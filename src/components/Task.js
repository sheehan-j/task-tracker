import { Animated, Pressable, StyleSheet, Text, View } from "react-native";
import { Swipeable } from "react-native-gesture-handler";
import { useState } from "react";
import colors from "../config/colors";
import { EvilIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

const Task = ({
	id,
	title,
	subtitle,
	onDelete,
	completed,
	onComplete,
	important,
}) => {
	const [parentHeight, setParentHeight] = useState(0);
	const handleParentLayout = (e) => {
		const { height } = e.nativeEvent.layout;
		setParentHeight(height);
	};

	const renderRightActions = (progress, dragX) => {
		const translateX = dragX.interpolate({
			inputRange: [-80, 0, 0],
			outputRange: [0, 80, 80],
			extrapolate: "clamp",
		});
		return (
			<Pressable onPress={() => onDelete()}>
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
			overshootRight={false}
			useNativeDriver={true}
		>
			<View style={styles.container} onLayout={handleParentLayout}>
				<View
					style={[styles.important_marker, { height: parentHeight }]}
				></View>
				<View style={{ width: "78%" }}>
					<Text style={styles.title}>{title}</Text>
					{subtitle && (
						<Text style={styles.subtitle}>{subtitle}</Text>
					)}
				</View>
				<Pressable
					style={styles.completed_button}
					onPress={() => onComplete()}
				>
					{completed && (
						<LinearGradient
							colors={[colors.extralightpurple, colors.medpurple]}
							style={{
								borderRadius: 17.5,
								width: "100%",
								height: "100%",
							}}
							start={{ x: 0, y: 0 }}
							end={{ x: 1, y: 0 }}
						/>
					)}
				</Pressable>
			</View>
		</Swipeable>
	);
};

export default Task;

const styles = StyleSheet.create({
	container: {
		paddingLeft: 26,
		paddingRight: 22,
		paddingTop: 20,
		paddingBottom: 20,
		position: "relative",
		borderBottomWidth: 1,
		borderBottomColor: colors.purpletrans,
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
	},
	important_marker: {
		position: "absolute",
		left: 0,
		bottom: 0,
		width: 8,
		height: "100%",
		backgroundColor: colors.medpurple,
	},
	completed_button: {
		width: 35,
		height: 35,
		backgroundColor: "white",
		borderColor: colors.gray,
		borderWidth: 0.25,
		borderRadius: 17.5,
	},
	title: {
		fontFamily: "Inter-Semi",
		fontSize: 16,
		color: colors.purpletext,
	},
	subtitle: {
		fontFamily: "Inter-Light",
		fontSize: 14,
		color: colors.gray,
		width: "100%",
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

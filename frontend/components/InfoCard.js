import { StyleSheet, Text, View, Animated } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useState, useEffect, useRef, useLayoutEffect } from "react";
import colors from "../config/colors";

const InfoCard = ({ activeName, taskCount, completedCount }) => {
	// Get the height of the gray background for the progress bar
	const [parentWidth, setParentWidth] = useState(0);
	const handleParentLayout = (e) => {
		const { width } = e.nativeEvent.layout;
		setParentWidth(width);
	};

	// Initialize variables for progress bar width
	const [progressWidth, setProgressWidth] = useState(0);
	const animatedWidth = useRef(new Animated.Value(0)).current;
	const progress =
		Math.round((completedCount / taskCount) * 100).toString() + "%";

	// Set progress width when task or completed count updates
	useLayoutEffect(() => {
		setProgressWidth(
			taskCount !== 0 ? (completedCount / taskCount) * parentWidth : 0
		);
	}, [parentWidth, taskCount, completedCount]);

	// Trigger animation for progress bar when progressWidth changess
	useEffect(() => {
		Animated.timing(animatedWidth, {
			toValue: progressWidth,
			duration: 250,
			useNativeDriver: false,
		}).start();
	}, [progressWidth]);

	return (
		<View style={styles.card_container}>
			<View style={styles.card}>
				<Text style={styles.info_card_title}>{activeName}</Text>
				<Text style={styles.info_card_subtitle}>
					{taskCount} Total Task{taskCount !== 1 && "s"}
				</Text>

				{/* Container for progress bar and percentage */}
				<View
					style={{
						flexDirection: "row",
						alignItems: "center",
						paddingTop: 5,
						paddingBottom: 5,
					}}
				>
					<View
						style={{
							flex: 1,
							backgroundColor: "rgba(138, 138, 138, 0.3)",
							height: 10,
							borderRadius: 10,
							marginRight: 10,
							overflow: "hidden",
						}}
						onLayout={handleParentLayout}
					>
						<Animated.View
							style={{
								width: animatedWidth,
							}}
						>
							<LinearGradient
								colors={[
									colors.extralightpurple,
									colors.medpurple,
								]}
								style={{
									width: "100%",
									borderRadius: 10,
									height: "100%",
								}}
								start={{ x: 0, y: 0 }}
								end={{ x: 1, y: 0 }}
							/>
						</Animated.View>
					</View>
					<Text style={styles.info_card_title}>
						{taskCount != 0 && progress}
						{taskCount == 0 && "0%"}
					</Text>
				</View>
			</View>
		</View>
	);
};

export default InfoCard;

const styles = StyleSheet.create({
	card_container: {
		backgroundColor: colors.extralightgray,
		marginLeft: 20,
		marginRight: 20,
	},
	card: {
		width: "100%",
		paddingLeft: 20,
		paddingRight: 20,
		paddingTop: 25,
		paddingBottom: 25,
		backgroundColor: colors.purpletrans,
		borderRadius: 10,
	},
	info_card_title: {
		fontFamily: "Inter-Semi",
		fontSize: 24,
		color: colors.medpurple,
	},
	info_card_subtitle: {
		fontFamily: "Inter-Light",
		fontSize: 17,
		color: "#404040",
		marginTop: 4,
	},
});

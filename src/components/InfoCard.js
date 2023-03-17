import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";

const InfoCard = ({ progress }) => {
	return (
		<View
			style={{
				width: "100%",
				paddingLeft: 20,
				paddingRight: 20,
				paddingTop: 25,
				paddingBottom: 25,
				backgroundColor: "rgba(62, 84, 172, 0.15)",
				borderRadius: 10,
			}}
		>
			<Text
				style={{
					fontFamily: "Inter-Semi",
					fontSize: 20,
					color: "#2d3c78",
				}}
			>
				Task Progress in [Category]
			</Text>
			<View
				style={{
					flexDirection: "row",
					alignItems: "center",
					paddingTop: 10,
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
				>
					<LinearGradient
						colors={["#BFACE2", "#655DBB"]}
						style={{
							width: progress + "%",
							borderRadius: 10,
							height: "100%",
						}}
						start={{ x: 0, y: 0 }}
						end={{ x: 1, y: 0 }}
					/>
				</View>
				<Text
					style={{
						color: "#2d3c78",
						fontFamily: "Inter-Bold",
						fontSize: 30,
					}}
				>
					{progress}%
				</Text>
			</View>
		</View>
	);
};

export default InfoCard;

const styles = StyleSheet.create({});

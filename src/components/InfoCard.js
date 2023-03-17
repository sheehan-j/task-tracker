import { StyleSheet, Text, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

const InfoCard = ({ progress }) => {
	return (
		<View style={styles.card_container}>
			<View style={styles.card}>
				<Text style={styles.info_card_title}>[Category]</Text>
				<Text style={styles.info_card_subtitle}>
					[Number] Tasks Total
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
					<Text style={styles.info_card_title}>{progress}%</Text>
				</View>
			</View>
		</View>
	);
};

export default InfoCard;

const styles = StyleSheet.create({
	card_container: {
		backgroundColor: "#f8f8f8",
		marginLeft: 20,
		marginRight: 20,
		// shadowColor: "#000000",
		// shadowOpacity: 0.1,
		// shadowOffset: {
		// 	width: 0,
		// 	height: 1,
		// },
		// borderRadius: 10,
		// shadowRadius: 2,
		// elevation: Platform.OS === "android" ? 1 : 0,
	},
	card: {
		width: "100%",
		paddingLeft: 20,
		paddingRight: 20,
		paddingTop: 25,
		paddingBottom: 25,
		backgroundColor: "rgba(62, 84, 172, 0.15)",
		borderRadius: 10,
	},
	info_card_title: {
		fontFamily: "Inter-Semi",
		fontSize: 24,
		color: "#2d3c78",
	},
	info_card_subtitle: {
		fontFamily: "Inter",
		fontSize: 17,
		color: "#3E54AC",
		marginTop: 4,
	},
});

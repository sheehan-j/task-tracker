import { StyleSheet, Text, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import colors from "../config/colors";

const InfoCard = ({ task_count, completed_count }) => {
	const progress =
		Math.round((completed_count / task_count) * 100).toString() + "%";

	return (
		<View style={styles.card_container}>
			<View style={styles.card}>
				<Text style={styles.info_card_title}>Projects</Text>
				<Text style={styles.info_card_subtitle}>
					{task_count} Total Task{task_count !== 1 && "s"}
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
							colors={[colors.extralightpurple, colors.medpurple]}
							style={{
								width: progress,
								borderRadius: 10,
								height: "100%",
							}}
							start={{ x: 0, y: 0 }}
							end={{ x: 1, y: 0 }}
						/>
					</View>
					<Text style={styles.info_card_title}>
						{task_count != 0 && progress}
						{task_count == 0 && "0%"}
					</Text>
				</View>
			</View>
		</View>
	);
};

export default InfoCard;

const styles = StyleSheet.create({
	card_container: {
		backgroundColor: colors.lightgray,
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

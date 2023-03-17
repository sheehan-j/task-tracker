import { StyleSheet, Text, View, Pressable } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

const Selector = ({ value, active, setActive }) => {
	return (
		<>
			{value === active && (
				<LinearGradient
					colors={["#BFACE2", "#655DBB"]}
					start={{ x: 0, y: 0 }}
					end={{ x: 1, y: 0 }}
					style={styles.active}
				>
					<Pressable
						onPress={() => {
							setActive(value);
						}}
					>
						<Text style={styles.active_text}>{value}</Text>
					</Pressable>
				</LinearGradient>
			)}
			{value !== active && (
				<Pressable
					style={styles.inactive}
					onPress={() => {
						setActive(value);
					}}
				>
					<Text style={styles.inactive_text}>{value}</Text>
				</Pressable>
			)}
		</>
	);
};

export default Selector;

const styles = StyleSheet.create({
	inactive: {
		backgroundColor: "rgba(62, 84, 172, 0.15)",
		paddingTop: 8,
		paddingBottom: 8,
		paddingLeft: 20,
		paddingRight: 20,
		marginRight: 7,
		borderRadius: 30,
	},
	inactive_text: {
		color: "#2d3c78",
		fontFamily: "Inter",
		fontSize: 16,
	},
	active: {
		paddingTop: 8,
		paddingBottom: 8,
		paddingLeft: 20,
		paddingRight: 20,
		marginRight: 7,
		borderRadius: 30,
	},
	active_text: {
		color: "#fff",
		fontFamily: "Inter-Bold",
		fontSize: 16,
	},
});

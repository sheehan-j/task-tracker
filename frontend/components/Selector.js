import {
	StyleSheet,
	Text,
	View,
	Pressable,
	LayoutAnimation,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import colors from "../config/colors";

const Selector = ({ value, setActiveName, active, setActive, _id }) => {
	return (
		<>
			{_id === active && (
				<LinearGradient
					colors={[colors.extralightpurple, colors.medpurple]}
					start={{ x: 0, y: 0 }}
					end={{ x: 1, y: 0 }}
					style={styles.active}
				>
					<Pressable>
						<Text style={styles.active_text}>{value}</Text>
					</Pressable>
				</LinearGradient>
			)}
			{_id !== active && (
				<Pressable
					style={styles.inactive}
					onPress={() => {
						setActive(_id);
						setActiveName(value);
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
		backgroundColor: colors.purpletrans,
		paddingTop: 8,
		paddingBottom: 8,
		paddingLeft: 20,
		paddingRight: 20,
		marginRight: 7,
		borderRadius: 30,
	},
	inactive_text: {
		color: colors.purpletext,
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

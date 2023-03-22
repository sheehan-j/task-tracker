import {
	StyleSheet,
	Text,
	View,
	TextInput,
	Pressable,
	Keyboard,
	TouchableWithoutFeedback,
} from "react-native";
import { useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import CategoriesApi from "../api/CategoriesApi";
import UsersApi from "../api/UsersApi";
import colors from "../config/colors";

const CreateTaskModal = ({
	categories,
	setCategories,
	handleCategoryModalVisibleChange,
}) => {
	const [name, setName] = useState("");

	const handleCreate = async () => {
		const userId = await UsersApi.getUserIdByEmail(
			"jordansheehan26@gmail.com"
		);
		const newCategory = {
			name: name,
			user: userId,
		};
		const categoryResponse = await CategoriesApi.addCategory(newCategory);

		setCategories([...categories, categoryResponse]);
		setName("");
		handleCategoryModalVisibleChange();
	};

	return (
		<TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
			<View style={styles.root}>
				<View style={styles.container}>
					<Text style={styles.modal_title}>Create new category</Text>

					<Text style={styles.input_label}>Name</Text>
					<TextInput
						placeholderTextColor={colors.lightgray}
						style={styles.input}
						value={name}
						onChangeText={setName}
					/>

					<View
						style={{
							width: "100%",
							flexDirection: "row",
							paddingHorizontal: 20,
						}}
					>
						<View style={styles.cancel_button_container}>
							<Pressable
								style={({ pressed }) => [
									{
										backgroundColor: pressed
											? colors.pressed
											: null,
									},
									styles.button_pressable,
								]}
								onPress={() => {
									setName("");
									handleCategoryModalVisibleChange();
								}}
							>
								<Text style={styles.cancel_button_text}>
									Cancel
								</Text>
							</Pressable>
						</View>

						<LinearGradient
							colors={[colors.extralightpurple, colors.medpurple]}
							start={{ x: 0, y: 0 }}
							end={{ x: 1, y: 0 }}
							style={styles.create_button_container}
						>
							<Pressable
								style={({ pressed }) => [
									{
										backgroundColor: pressed
											? colors.pressed
											: null,
									},
									styles.button_pressable,
								]}
								onPress={() => {
									handleCreate();
								}}
							>
								<Text style={styles.create_button_text}>
									Create
								</Text>
							</Pressable>
						</LinearGradient>
					</View>
				</View>
			</View>
		</TouchableWithoutFeedback>
	);
};

export default CreateTaskModal;

const styles = StyleSheet.create({
	root: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
	container: {
		width: "85%",
		backgroundColor: "white",
		borderRadius: 10,
		paddingVertical: 20,
	},
	modal: {
		width: 100,
		height: 100,
		backgroundColor: "red",
	},
	modal_title: {
		fontFamily: "Inter-Semi",
		fontSize: 20,
		color: colors.medpurple,
		marginBottom: 20,
		paddingHorizontal: 20,
	},
	input_label: {
		fontFamily: "Inter",
		fontSize: 16,
		color: colors.lightgray,
		paddingHorizontal: 20,
	},
	input: {
		height: 40,
		borderWidth: 1,
		borderColor: "#9e9e9e",
		borderRadius: 7,
		padding: 6,
		marginTop: 5,
		fontFamily: "Inter",
		fontSize: 14,
		marginBottom: 20,
		textAlign: "left",
		marginHorizontal: 20,
	},
	important_button: {
		width: 25,
		height: 25,
		backgroundColor: "white",
		borderColor: colors.gray,
		borderWidth: 0.25,
		borderRadius: 17.5,
	},
	cancel_button_container: {
		flex: 1,
		marginRight: 5,
		backgroundColor: "#fff",
		borderColor: "#9e9e9e",
		borderWidth: 1,
		borderRadius: 7,
	},
	button_pressable: {
		width: "100%",
		justifyContent: "center",
		alignItems: "center",
		padding: 7,
		borderRadius: 7,
	},
	cancel_button_text: {
		fontFamily: "Inter",
		fontSize: 14,
		color: colors.gray,
		textAlign: "center",
		width: "100%",
	},
	create_button_container: {
		flex: 1,
		marginLeft: 5,
		justifyContent: "center",
		alignItems: "center",
		borderRadius: 7,
	},
	create_button_text: {
		fontFamily: "Inter-Semi",
		fontSize: 14,
		color: "white",
		textAlign: "center",
		width: "100%",
	},
});

import {
	StyleSheet,
	Text,
	View,
	TextInput,
	Pressable,
	Keyboard,
	ScrollView,
	TouchableWithoutFeedback,
} from "react-native";
import { useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import Selector from "./Selector";
import colors from "../config/colors";

const CreateTaskModal = ({
	tasks,
	setTasks,
	categories,
	handleModalVisibleChange,
}) => {
	const [title, setTitle] = useState("");
	const [description, setDescription] = useState("");
	const [important, setImportant] = useState(false);
	const [selectedCategory, setSelectedCategory] = useState(
		categories[0].name
	);

	const resetFields = () => {
		setTitle("");
		setDescription("");
		setSelectedCategory(categories[0].name);
		setImportant(false);
	};

	const handleCreate = () => {
		const tempId = tasks[tasks.length - 1]._id + 1;
		const newTask = {
			_id: tempId,
			category: selectedCategory,
			title: title,
			subtitle: description,
			completed: false,
			important: important,
		};

		setTasks([...tasks, newTask]);
		resetFields();
		handleModalVisibleChange();
	};

	return (
		<TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
			<View style={styles.root}>
				<View style={styles.container}>
					<Text style={styles.modal_title}>Create new task</Text>

					<Text style={styles.input_label}>Title</Text>
					<TextInput
						// placeholder="Title"
						placeholderTextColor={colors.lightgray}
						style={styles.input}
						value={title}
						onChangeText={setTitle}
					/>

					<Text style={styles.input_label}>Description</Text>
					<TextInput
						// placeholder="Description"
						placeholderTextColor={colors.lightgray}
						style={styles.input}
						value={description}
						onChangeText={setDescription}
					/>

					<Text style={styles.input_label}>Category</Text>
					<ScrollView
						style={{ flexGrow: 0, marginBottom: 20, marginTop: 5 }}
						contentContainerStyle={{
							paddingLeft: 20,
							paddingRight: 20,
						}}
						horizontal={true}
						showsHorizontalScrollIndicator={false}
					>
						{categories.map((category) => (
							<Selector
								key={category._id}
								value={category.name}
								active={selectedCategory}
								setActive={setSelectedCategory}
							></Selector>
						))}
					</ScrollView>

					<View
						style={{
							width: "100%",
							flexDirection: "row",
							justifyContent: "space-between",
							marginBottom: 20,
							paddingRight: 20,
						}}
					>
						<Text style={styles.input_label}>Important</Text>
						<Pressable
							style={styles.important_button}
							hitSlop={15}
							onPress={() => setImportant(!important)}
						>
							{important && (
								<LinearGradient
									colors={[
										colors.extralightpurple,
										colors.medpurple,
									]}
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
									resetFields();
									handleModalVisibleChange();
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

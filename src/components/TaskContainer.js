import { StyleSheet, Text, ScrollView, View } from "react-native";

const TaskContainer = () => {
	return (
		<ScrollView
			style={{
				flex: 1,
				backgroundColor: "#fff",
				marginTop: 20,
				marginLeft: 20,
				marginRight: 20,
				borderRadius: 10,
			}}
		>
			<Text>TaskContainer</Text>
		</ScrollView>
	);
};

export default TaskContainer;

const styles = StyleSheet.create({});

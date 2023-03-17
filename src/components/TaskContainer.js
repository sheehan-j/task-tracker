import { StyleSheet, Text, ScrollView, View } from "react-native";
import Task from "./Task";

const TaskContainer = ({ tasks }) => {
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
			{tasks.map((task, index) => (
				<Task
					key={index}
					title={task.title}
					subtitle={task.subtitle}
					important={task.important}
					completed={task.completed}
				/>
			))}
		</ScrollView>
	);
};

export default TaskContainer;

const styles = StyleSheet.create({});

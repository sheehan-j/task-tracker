import { StyleSheet, LayoutAnimation, ScrollView } from "react-native";
import Task from "./Task";

const TaskContainer = ({ tasks, setTasks }) => {
	const handleOnDelete = (id) => {
		setTasks(tasks.filter((task) => task.id != id));

		// Animate the deletion of the task
		LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
	};

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
			{tasks.map((task) => (
				<Task
					key={task.id}
					onDelete={() => handleOnDelete(task.id)}
					{...task}
				/>
			))}
		</ScrollView>
	);
};

export default TaskContainer;

const styles = StyleSheet.create({});

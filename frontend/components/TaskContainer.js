import {
	StyleSheet,
	LayoutAnimation,
	ScrollView,
	View,
	Text,
} from "react-native";
import colors from "../config/colors";
import Task from "./Task";
import TasksApi from "../api/TasksApi";

const TaskContainer = ({ tasks, taskCount, setTasks, active }) => {
	const handleOnDelete = async (id) => {
		await TasksApi.deleteTask(id);
		setTasks(tasks.filter((task) => task._id != id));

		// Animate the deletion of the task
		const animConfig = {
			duration: 200,
			update: {
				type: LayoutAnimation.Types.easeInEaseOut,
			},
			delete: {
				duration: 100,
				type: LayoutAnimation.Types.easeInEaseOut,
				property: LayoutAnimation.Properties.opacity,
			},
		};

		LayoutAnimation.configureNext(animConfig);
	};

	const handleOnComplete = async (id) => {
		const updatedTasks = tasks.map((task) => {
			if (task._id === id) {
				return {
					...task,
					completed: (task.completed = !task.completed),
				};
			}

			return task;
		});
		setTasks(updatedTasks);

		const updatedTask = tasks.find((task) => task._id === id);
		await TasksApi.updateTask(updatedTask);
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
			{tasks.map((task) => {
				if (task.category === active) {
					return (
						<Task
							key={task._id}
							onDelete={() => handleOnDelete(task._id)}
							onComplete={() => handleOnComplete(task._id)}
							{...task}
						/>
					);
				}
			})}
			{taskCount === 0 && (
				<Text
					style={{
						fontFamily: "Inter",
						color: colors.gray,
						fontSize: 14,
						width: "100%",
						textAlign: "center",
						paddingTop: 15,
					}}
				>
					No tasks here :(
				</Text>
			)}
		</ScrollView>
	);
};

export default TaskContainer;

const styles = StyleSheet.create({});

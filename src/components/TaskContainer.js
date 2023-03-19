import { StyleSheet, LayoutAnimation, ScrollView } from "react-native";
import Task from "./Task";

const TaskContainer = ({ tasks, setTasks, active }) => {
	const handleOnDelete = (id) => {
		setTasks(tasks.filter((task) => task.id != id));

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

	const handleOnComplete = (id) => {
		const updatedTasks = tasks.map((task) => {
			if (task.id === id) {
				return {
					...task,
					completed: (task.completed = !task.completed),
				};
			}

			return task;
		});

		setTasks(updatedTasks);
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
							key={task.id}
							onDelete={() => handleOnDelete(task.id)}
							onComplete={() => handleOnComplete(task.id)}
							{...task}
						/>
					);
				}
			})}
		</ScrollView>
	);
};

export default TaskContainer;

const styles = StyleSheet.create({});

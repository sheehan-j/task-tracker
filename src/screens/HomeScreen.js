import {
	View,
	SafeAreaView,
	Text,
	Pressable,
	StyleSheet,
	ScrollView,
} from "react-native";
import { useState, useEffect } from "react";
import InfoCard from "../components/InfoCard";
import Selector from "../components/Selector";
import TaskContainer from "../components/TaskContainer";
import CreateTaskButton from "../components/CreateTaskButton";
import colors from "../config/colors";
import { TurboModuleRegistry } from "react-native";

const HomeScreen = ({ navigation }) => {
	const [tasks, setTasks] = useState([
		{
			id: 1,
			category: "One",
			title: "Buy groceries",
			subtitle: "Get apples, oranges, and pears from Publix",
			completed: true,
			important: false,
		},
		{
			id: 2,
			category: "Two",
			title: "Wash car",
			subtitle: "",
			completed: true,
			important: true,
		},
		{
			id: 3,
			category: "One",
			title: "Register for classes",
			subtitle: "Appointment is March 27th at 2:00p.m.",
			completed: false,
			important: true,
		},
	]);
	const [active, setActive] = useState("One");
	const [taskCount, setTaskCount] = useState(
		tasks.filter((task) => task.category === active).length
	);
	const [completedCount, setCompletedCount] = useState(
		tasks.filter(
			(task) => task.category === active && task.completed === true
		).length
	);

	useEffect(() => {
		setTaskCount(tasks.filter((task) => task.category === active).length);
		setCompletedCount(
			tasks.filter(
				(task) => task.category === active && task.completed === true
			).length
		);
	}, [active, tasks]);

	return (
		<SafeAreaView style={styles.root}>
			<View style={styles.container}>
				<View
					style={{
						width: "100%",
						paddingTop: 20,
						paddingBottom: 15,
						paddingLeft: 20,
						paddingRight: 20,
						justifyContent: "flex-start",
					}}
				>
					<Text style={styles.subtitle}>Hello,</Text>
					<Text style={styles.title}>Jordan</Text>
				</View>
				<InfoCard
					active={active}
					taskCount={taskCount}
					completedCount={completedCount}
				></InfoCard>
				<ScrollView
					style={{ flexGrow: 0, marginTop: 20 }}
					contentContainerStyle={{
						paddingLeft: 20,
						paddingRight: 20,
					}}
					horizontal={true}
					showsHorizontalScrollIndicator={false}
				>
					<Selector
						value={"One"}
						active={active}
						setActive={setActive}
					></Selector>
					<Selector
						value={"Two"}
						active={active}
						setActive={setActive}
					></Selector>
					<Selector
						value={"Three"}
						active={active}
						setActive={setActive}
					></Selector>
					<Selector
						value={"Four"}
						active={active}
						setActive={setActive}
					></Selector>
					<Selector
						value={"Five"}
						active={active}
						setActive={setActive}
					></Selector>
					<Selector
						value={"Six"}
						active={active}
						setActive={setActive}
					></Selector>
				</ScrollView>
				<TaskContainer
					tasks={tasks}
					setTasks={setTasks}
					active={active}
				/>
				<CreateTaskButton />
			</View>
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	root: {
		flex: 1,
		backgroundColor: colors.lightgray,
		paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
	},
	container: {
		flex: 1,
		paddingTop: 5,
		paddingBottom: 15,
		justifyContent: "flex-start",
	},
	title: {
		color: colors.medpurple,
		fontFamily: "Inter-Bold",
		fontSize: 40,
		padding: 0,
		lineHeight: 45,
	},
	subtitle: {
		color: colors.gray,
		fontFamily: "Inter",
		fontSize: 22,
	},
});

export default HomeScreen;

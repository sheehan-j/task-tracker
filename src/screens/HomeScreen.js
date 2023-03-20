import {
	Animated,
	View,
	SafeAreaView,
	Text,
	Modal,
	StyleSheet,
	ScrollView,
} from "react-native";
import { useState, useEffect, useRef } from "react";
import { StatusBar } from "expo-status-bar";
import InfoCard from "../components/InfoCard";
import Selector from "../components/Selector";
import TaskContainer from "../components/TaskContainer";
import CreateTaskButton from "../components/CreateTaskButton";
import colors from "../config/colors";
import CreateTaskModal from "../components/CreateTaskModal";

const HomeScreen = ({ navigation }) => {
	const [tasks, setTasks] = useState([
		{
			_id: 1,
			category: "One",
			title: "Buy groceries",
			subtitle: "Get apples, oranges, and pears from Publix",
			completed: true,
			important: false,
		},
		{
			_id: 2,
			category: "Two",
			title: "Wash car",
			subtitle: "",
			completed: true,
			important: true,
		},
		{
			_id: 3,
			category: "One",
			title: "Register for classes",
			subtitle: "Appointment is March 27th at 2:00p.m.",
			completed: false,
			important: true,
		},
		{
			_id: 4,
			category: "One",
			title: "Register for classes",
			subtitle: "Appointment is March 27th at 2:00p.m.",
			completed: false,
			important: true,
		},
	]);

	const [categories, setCategories] = useState([
		{ _id: 1, name: "One" },
		{ _id: 2, name: "Two" },
		{ _id: 3, name: "Three" },
		{ _id: 4, name: "Four" },
		{ _id: 5, name: "Five" },
	]);

	const [active, setActive] = useState("One");
	const [modalVisible, setModalVisible] = useState(false);
	const [taskCount, setTaskCount] = useState(
		tasks.filter((task) => task.category === active).length
	);
	const [completedCount, setCompletedCount] = useState(
		tasks.filter(
			(task) => task.category === active && task.completed === true
		).length
	);

	// Recalculate task and complete tasks counts when they update
	useEffect(() => {
		setTaskCount(tasks.filter((task) => task.category === active).length);
		setCompletedCount(
			tasks.filter(
				(task) => task.category === active && task.completed === true
			).length
		);
	}, [active, tasks]);

	// Animated modal background fade in
	const animatedOpacity = useRef(new Animated.Value(0)).current;

	const handleModalVisibleChange = () => {
		setModalVisible(!modalVisible);

		animatedOpacity.setValue(0);

		Animated.timing(animatedOpacity, {
			toValue: animatedOpacity._value === 1 ? 0 : 1,
			duration: 300,
			useNativeDriver: true,
		}).start();
	};

	return (
		<View style={{ flex: 1 }}>
			{/* Transparent Gray Background for Modal */}
			<Animated.View
				style={[
					styles.modal_background,
					{ opacity: animatedOpacity },
					{ display: modalVisible ? "flex" : "none" },
				]}
				visible={modalVisible}
			/>
			<SafeAreaView style={styles.root}>
				<View style={styles.container}>
					{/* Header w/ User's Name */}
					<View style={styles.header_container}>
						<Text style={styles.subtitle}>Hello,</Text>
						<Text style={styles.title}>Jordan</Text>
					</View>

					<InfoCard
						active={active}
						taskCount={taskCount}
						completedCount={completedCount}
					></InfoCard>

					{/* Container for Category Selectors */}
					<ScrollView
						style={{ flexGrow: 0, marginTop: 20 }}
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
								active={active}
								setActive={setActive}
							></Selector>
						))}
						<Selector
							value={"+"}
							active={active}
							setActive={setActive}
						></Selector>
					</ScrollView>

					<TaskContainer
						tasks={tasks}
						taskCount={taskCount}
						setTasks={setTasks}
						active={active}
					/>

					<Modal
						animationType="slide"
						transparent={true}
						visible={modalVisible}
					>
						<CreateTaskModal
							tasks={tasks}
							setTasks={setTasks}
							categories={categories}
							handleModalVisibleChange={handleModalVisibleChange}
						/>
					</Modal>

					<CreateTaskButton
						modalVisible={modalVisible}
						setModalVisible={setModalVisible}
						handleModalVisibleChange={handleModalVisibleChange}
					/>
				</View>
			</SafeAreaView>
		</View>
	);
};

const styles = StyleSheet.create({
	root: {
		flex: 1,
		backgroundColor: colors.extralightgray,
		paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
	},
	container: {
		flex: 1,
		paddingTop: 5,
		paddingBottom: 15,
		justifyContent: "flex-start",
	},
	header_container: {
		width: "100%",
		paddingTop: 20,
		paddingBottom: 15,
		paddingLeft: 20,
		paddingRight: 20,
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
	modal_container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
	modal_background: {
		width: "100%",
		height: "100%",
		backgroundColor: "rgba(0,0,0,0.3)",
		position: "absolute",
		top: 0,
		left: 0,
		zIndex: 1,
		elevation: 1,
	},
});

export default HomeScreen;

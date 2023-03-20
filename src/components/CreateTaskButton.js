import { View, Text, Pressable } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import colors from "../config/colors";

const CreateTaskButton = ({
	modalVisible,
	setModalVisible,
	handleTaskModalVisibleChange,
}) => {
	return (
		<LinearGradient
			colors={[colors.extralightpurple, colors.medpurple]}
			start={{ x: 0, y: 0 }}
			end={{ x: 1, y: 0 }}
			style={{
				borderRadius: 10,
				marginLeft: 20,
				marginRight: 20,
				marginTop: 15,
			}}
		>
			<Pressable
				style={({ pressed }) => [
					{
						backgroundColor: pressed ? colors.pressed : null,
					},
					{
						width: "100%",
						paddingTop: 10,
						paddingBottom: 10,
						alignItems: "center",
					},
				]}
				onPress={() => handleTaskModalVisibleChange()}
			>
				<Text
					style={{
						color: "#fff",
						fontFamily: "Inter-Semi",
						fontSize: 18,
					}}
				>
					Create New Task
				</Text>
			</Pressable>
		</LinearGradient>
	);
};

export default CreateTaskButton;

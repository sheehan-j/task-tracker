import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useFonts } from "expo-font";
import { gestureHandlerRootHOC } from "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import HomeScreen from "./screens/HomeScreen";

const Stack = createNativeStackNavigator();

const App = () => {
	const [loaded] = useFonts({
		"Inter-Bold": require("./assets/fonts/Inter-Bold.ttf"),
		"Inter-ExtraBold": require("./assets/fonts/Inter-ExtraBold.ttf"),
		"Inter-Light": require("./assets/fonts/Inter-Light.ttf"),
		Inter: require("./assets/fonts/Inter-Regular.ttf"),
		"Inter-Medium": require("./assets/fonts/Inter-Medium.ttf"),
		"Inter-Semi": require("./assets/fonts/Inter-SemiBold.ttf"),
	});

	if (!loaded) {
		return null;
	}

	return (
		<>
			<StatusBar barStyle={"dark-content"} />
			<NavigationContainer>
				<Stack.Navigator
					screenOptions={{
						headerShown: false,
					}}
				>
					<Stack.Screen name="Home" component={HomeScreen} />
				</Stack.Navigator>
			</NavigationContainer>
		</>
	);
};

// Wrap the App component with this to support gestures on Android
export default gestureHandlerRootHOC(App);

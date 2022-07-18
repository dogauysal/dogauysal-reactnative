import { createNativeStackNavigator } from "@react-navigation/native-stack"
import HomeNavigator from "./HomeNavigator";

const RootStack = () => {

    const Stack = createNativeStackNavigator();

    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false
            }}
        >
            <Stack.Screen
                name="Main"
                component={HomeNavigator}
            ></Stack.Screen>
        </Stack.Navigator>
    )
}

export default RootStack;
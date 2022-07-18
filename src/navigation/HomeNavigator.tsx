import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CreateProductScreen from "../screens/CreateProductScreen";
import HomeScreen from "../screens/HomeScreen";
import ProductDetailScreen from "../screens/ProductDetailScreen";

const HomeNavigator = () => {

    const Stack = createNativeStackNavigator();

    return (
        <Stack.Navigator>
            <Stack.Screen
                name="UPayments Store"
                component={HomeScreen}
            ></Stack.Screen>
            <Stack.Screen
                name="ProductDetail"
                component={ProductDetailScreen}
            ></Stack.Screen>
            <Stack.Screen
                name="CreateProduct"
                component={CreateProductScreen}
            ></Stack.Screen>
        </Stack.Navigator>
    )
}

export default HomeNavigator;
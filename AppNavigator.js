import { createStackNavigator } from "@react-navigation/stack";
import  WelcomeScreen1  from "./screens/WelcomeScreen1";
import  WelcomeScreen2  from "./screens/WelcomeScreen2";
import  WelcomeScreen3  from "./screens/WelcomeScreen3";
import  WelcomeScreen4  from "./screens/WelcomeScreen4";
import Signup from "./screens/Signup";

const Stack = createStackNavigator();

const AppNavigator = () => {
    return(
        <Stack.Navigator>
            <Stack.Screen name="Welcome1"component={WelcomeScreen1} />
            <Stack.Screen name="Welcome2"component={WelcomeScreen2} />
            <Stack.Screen name="Welcome3"component={WelcomeScreen3} />
            <Stack.Screen name="Welcome4"component={WelcomeScreen4} />
            <Stack.Screen name="Signup"component={Signup} />
        </Stack.Navigator>
    )
}

export default AppNavigator;
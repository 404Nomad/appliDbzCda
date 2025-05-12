import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/Home';

export type RootStackParamList = {
    Home: undefined;
    TabHome: undefined;
    Detail: {characterId: number};
}

const Stack = createStackNavigator<RootStackParamList>();

const MainNavigation = () => { 
    return (
        <Stack.Navigator initialRouteName='TabHome'>
            <Stack.Screen 
                name = 'TabHome'
                component={Home}
                options={{ headerShown: false }}
            />

        </Stack.Navigator>
    )
}
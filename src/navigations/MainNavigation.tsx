import { createStackNavigator } from '@react-navigation/stack';

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
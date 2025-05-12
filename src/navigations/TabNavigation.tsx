import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screens/Home";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Search from "../screens/Search";
import { StyleSheet } from "react-native";

const Tab = createBottomTabNavigator();

const TabNavigation = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen
                name="HomeTab"
                component={Home}
                options={{
                    tabBarLabel: 'Accueil',
                    tabBarIcon: ({ color, size }) => (
                        <Icon name="home" color={color} size={size} />
                    )
                }}
            />
            <Tab.Screen
                name="SearchTab"
                component={Search}
                options={{
                    tabBarLabel: 'Rechercher',
                    tabBarIcon: ({ color, size }) => (
                        <Icon name="magnify" color={color} size={size} />
                    ),
                }}
            />

        </Tab.Navigator>
    );
};

const styles = StyleSheet.create({
    tabBar: {
        backgroundColor: '#010101',
        
    }
})

export default TabNavigation;
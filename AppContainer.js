import React from 'react';
import { Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Start from './Screens/Start';
import Game from './Screens/Game';
import LeaderBoard from './Screens/LeaderBoard';

const StartRouter = () => {
    const Tabs = createNativeStackNavigator();
    return (
        <Tabs.Navigator initialRouteName='StartPage'>
            <Tabs.Screen name="StartPage" component={Start} options={{ title: 'Start' }} />
            <Tabs.Screen name="Game" component={Game} />
        </Tabs.Navigator>
    )
}

function AppContainer() {
    const Stack = createBottomTabNavigator()

    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Start" screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;

                    if (route.name === 'Start') {
                        iconName = `${Platform.OS === 'ios' ? 'ios' : 'md'}-home`;
                    } else if (route.name === 'LeaderBoard') {
                        iconName = `${Platform.OS === 'ios' ? 'ios' : 'md'}-star`;
                    }

                    return <Ionicons name={iconName} size={20} color={color} />;
                },
                tabBarActiveTintColor: 'tomato',
                tabBarInactiveTintColor: 'gray',
            })} >
                <Stack.Screen
                    name="Start"
                    component={StartRouter}
                    options={{ headerShown: false }}
                />
                <Stack.Screen name="LeaderBoard" component={LeaderBoard} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}
export default AppContainer;


//   {
//     initialRouteName: 'Start',
//     defaultNavigationOptions: ({ navigation }) => ({
//       tabBarIcon: ({ tintColor }) => {
//         const { routeName } = navigation.state;

//         let iconName;
//         if (routeName === 'Start') {
//           iconName = `${Platform.OS === 'ios' ? 'ios' : 'md'}-home`;
//         } else if (routeName === 'LeaderBoard') {
//           iconName = `${Platform.OS === 'ios' ? 'ios' : 'md'}-star`;
//         }

//         return <Ionicons name={iconName} size={20} color={tintColor} />;
//       },
//       tabBarOptions: {
//         activeTintColor: 'purple',
//         inactiveTintColor: '#556',
//       },
//     }),
//   },


// const AppNavigator = createNativeStackNavigator(
//     {
//         Start: {
//             screen: Tabs,
//         },
//         Game: {
//             screen: Game,
//         },
//     },
//     {
//         initialRouteName: 'Start',
//         mode: 'modal',
//         headerMode: 'none',
//     },
// );



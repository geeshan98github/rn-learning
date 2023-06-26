import React from 'react';
import {Text, View} from "native-base";
import {NavigationContainer, NavigationProp} from "@react-navigation/native";
import {NativeBaseProvider} from 'native-base';
import {Button} from "react-native";
import {createStackNavigator} from '@react-navigation/stack';

interface RootStackParamList {
    Home: undefined,
    Profile: undefined
}

interface BaseProps {
    navigation: NavigationProp<RootStackParamList>
}

function HomeScreen({navigation}: BaseProps) {
    return (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Text>Home Screen</Text>
            <Button title={'Go to profile'} onPress={() => {
                navigation.navigate('Profile')
            }}/>
        </View>
    );
}

function ProfileScreen({navigation}: BaseProps) {
    return (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Text>Profile Screen</Text>
            <Button title={'Go back'} onPress={() => {
                navigation.goBack()
            }}/>
        </View>
    );
}

const Stack = createStackNavigator();

function App(): JSX.Element {
    return (
        <NativeBaseProvider>
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={HomeScreen}/>
                <Stack.Screen name="Profile" component={ProfileScreen}/>
            </Stack.Navigator>
        </NavigationContainer>
        </NativeBaseProvider>
    );
}

export default App;



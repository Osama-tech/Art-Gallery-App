import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider } from 'react-redux';
import { ClerkProvider } from '@clerk/clerk-expo';
import Constants from 'expo-constants';
import store from './redux/store';

import HomeScreen from './screens/HomeScreen/HomeScreen.screen';
import SignUpScreen from './screens/SignUpScreen/SignUpScreen.screen';
import ProfileScreen from './screens/ProfileScreen/ProfileScreen.screen';

const Stack = createNativeStackNavigator();

export default function App() {
	return (
		<ClerkProvider
			publishableKey={Constants.expoConfig.extra.clerkPublishableKey}
		>
			<Provider store={store}>
				<NavigationContainer>
					<Stack.Navigator>
						<Stack.Screen
							name='Home'
							component={HomeScreen}
							options={{
								title: '',
								headerTransparent: true,
							}}
						/>
						<Stack.Screen
							name='SignUp'
							component={SignUpScreen}
							options={{
								title: '',
								headerTransparent: true,
								headerBackVisible: false,
							}}
						/>
						<Stack.Screen
							name='Profile'
							component={ProfileScreen}
							options={{
								title: '',
								headerTransparent: true,
								headerBackVisible: false,
							}}
						/>
					</Stack.Navigator>
				</NavigationContainer>
			</Provider>
		</ClerkProvider>
	);
}


// import React, { useEffect } from 'react';
// import { View, Text } from 'react-native';
// import db from './firebase-config';
// import { doc, setDoc } from 'firebase/firestore';

// const App = () => {
//   useEffect(() => {
//     const testFirestore = async () => {
//       try {
//         console.log("Testing Firestore write operation");
//         await setDoc(doc(db, 'test', 'testDoc'), {
//           testField: 'testValue',
//           timestamp: new Date(),
//         });
//         console.log("Firestore write test successful");
//       } catch (error) {
//         console.error("Error during Firestore write test:", error);
//       }
//     };

//     testFirestore();
//   }, []);

//   return (
//     <View>
//       <Text>Firestore Write Test</Text>
//     </View>
//   );
// };

// export default App;




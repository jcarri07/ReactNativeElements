import { createNativeStackNavigator } from '@react-navigation/native-stack';
import createTravel from '../screens/createTravel'

const Stack = createNativeStackNavigator();

export default function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" options={{headerShown: false}} component={createTravel} />
    </Stack.Navigator>

  );
}
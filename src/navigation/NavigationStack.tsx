import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CreateTravel from '../screens/CreateTravel'
import SecondStep from '../screens/SecondStep';

const Stack = createNativeStackNavigator();

export default function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" options={{headerShown: false}} component={CreateTravel} />
      <Stack.Screen name="SecondStep" options={{headerShown: false}} component={SecondStep} />
    </Stack.Navigator>

  );
}
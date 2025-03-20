import {Text, View} from 'react-native';
import RandomList from './src/RandomFlatList';

export default function App() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <RandomList />
    </View>
  );
}

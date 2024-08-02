import { Text, View } from 'react-native';
import { Link } from 'expo-router'

export default function index() {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text className="text-2xl font-pblack">Open up App.js to start working on your app!</Text>
      <Link href="/home" style={{color:'blue'}}>Go to profile</Link>
    </View>
  );
}

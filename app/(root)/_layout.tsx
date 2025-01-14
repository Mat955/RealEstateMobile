import {SafeAreaView} from "react-native-safe-area-context";
import {useGlobalContext} from "../../lib/global-provider";
import {ActivityIndicator} from "react-native";
import {Redirect, Slot} from "expo-router";

export default function AppLayout() {
  const {loading, isLogged} = useGlobalContext();

  if (loading) {
    return (
      <SafeAreaView className='bg-white h-full justify-center items-center'>
        <ActivityIndicator className='text-primary-300' size='large' />
      </SafeAreaView>
    );
  }

  return isLogged ? <Slot /> : <Redirect href='/sign-in' />;
}

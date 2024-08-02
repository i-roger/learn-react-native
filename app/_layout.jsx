import { SplashScreen, Stack } from 'expo-router';
import { NativeWindStyleSheet } from "nativewind";
import {  useFonts  } from 'expo-font';
import {  useEffect } from 'react';

/*  Usado para visualizar os estilos do NATIVEWIND na WEB
    apenas para desenvolvimento.
    Lembrar de apagar isso quando o app for para o celular.*/

NativeWindStyleSheet.setOutput({
  default: "native",
});
/*************************************************************/

/* Evita que a tela fique branca ao carregar as fontes...*/
SplashScreen.preventAutoHideAsync();

const rootLayout = () => {

/* Usado para carregar as fontes                                */
  const [fontsLoaded, error] = useFonts({
    "Poppins-Black": require("../assets/fonts/Poppins-Black.ttf")
  });

  useEffect(() => {
    if(error) throw error;

    if(fontsLoaded) SplashScreen.hideAsync();
  }, [fontsLoaded, error])

  if(!fontsLoaded && !error) return null;
/****************************************************************/

  return(
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false}}/>
    </Stack>
  )
}

export default rootLayout
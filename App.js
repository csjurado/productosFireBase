import "react-native-gesture-handler";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { cargarConfiguracion } from './app/utils/FirenseConfig';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ProductosForm } from './app/screens/ProductosForm';
import { ListaProductos } from './app/screens/ListaProductos';
import { RegistroForm } from './app/screens/RegistroForm'
import { LoginForm } from './app/screens/Login';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useState } from 'react';
import { CambioClaveForm } from './app/screens/CambioClaveForm';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { ContenidoA } from './app/screens/ContenidoA';
import { ContenidoB } from './app/screens/ContenidoB';
import { Icon} from '@rneui/themed';

const Stack = createNativeStackNavigator();
const LoginStack = createNativeStackNavigator();

const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

const TabNav = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name='TabContenidoA'
        component={ContenidoA}
        options={{
          headerShown: false,
          tabBarLabel: "Configuracion",
          tabBarIcon:({size,tintColor})=>{
            return <Icon
            name='setting'
            type='antdesign'
            size={size}
            color={tintColor}
          />
          }
        }}
      />
      <Tab.Screen
        name='TabContenidoB'
        component={ContenidoB}
        options={{
          headerShown: false,
          tabBarLabel: "Acerca De",
          tabBarIcon:({size,tintColor})=>{
            return <Icon
            name='information'
            type='ionicon'
            size={size}
            color={tintColor}
          />
          }
        }}
      />
    </Tab.Navigator>
  )
}

const LoginNav = () => {
  return (<LoginStack.Navigator>
    <LoginStack.Screen
      name='LoginNavigation'
      component={LoginForm}
      options={{
        headerShown: false
      }}
    />
    <LoginStack.Screen
      name="RegistroNavigation"
      component={RegistroForm}
      options={{
        headerShown: false,
      }}
    />
    <LoginStack.Screen
      name="CambioClaveNavigation"
      component={CambioClaveForm}
      options={{
        headerShown: false,
      }}
    />
  </LoginStack.Navigator>
  );
};
const DrawerNav = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name='DrawerProductosNav' component={ProductosNav} options={{ title: "Productos" }} />
      <Drawer.Screen name='DrawerEjemploTabs' component={TabNav} options={{ title: "Ejemplos Tabs" }} />
      <Drawer.Screen name='DrawerFinSesion' component={ProductosNav} options={{ title: "Finalizar Sesión" }} />
    </Drawer.Navigator>
  )
}
const ProductosNav = () => {
  return (
    <Stack.Navigator screenOptions={{
      headerStyle: {
        backgroundColor: '#355070',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }}>
      <Stack.Screen name='ListaProdcutosNav' component={ListaProductos} options={{ title: "Lista de Productos" }} />
      <Stack.Screen name='ProductoFormNav' component={ProductosForm} options={{ title: "Formulario Productos" }} />
    </Stack.Navigator>
  );
};
export default function App() {
  const [login, setLogin] = useState(false);

  const registrarObserver = () => {
    const auth = getAuth();
    if (!global.desSubscribirObs) {
      global.desSubscribirObs = onAuthStateChanged(auth, (user) => {
        if (user) {
          const uid = user.uid;
          console.log("OBSERERVER ->>>> CAMBIADE DE ESTADO A SIGN IN ");
          setLogin(true);
        } else {
          console.log("OBSERERVER ->>>> CAMBIADE DE ESTADO A SIGN OUT ");
          setLogin(false);
        }
      });
    }

  };
  cargarConfiguracion();
  registrarObserver();
  return (
    <NavigationContainer>
      {login ? <DrawerNav /> : <LoginNav />}
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

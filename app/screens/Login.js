import { View, Text, StyleSheet, FlatList } from 'react-native'
import { Input, Icon, Button } from '@rneui/themed';
import { useState } from 'react';
import { ingresar, finalizarSesion } from '../services/AutenticacionSrv';


export const LoginForm = ({ navigation }) => {
  const [usuario, setUsuario] = useState(null);
  const [clave, setClave] = useState(null);

  const validarLogin = () => {
    console.log("Validando");
    ingresar(usuario, clave);
  };
  const navegarRegistro = () => {
    navigation.navigate("RegistroNavigation");
  };
  const navegarRecuperarClave = () => {
    navigation.navigate("CambioClaveNavigation")
  }
  return <View style={styles.container}>
    <Text> INGRESO AL SISTEMA </Text>
    <Input
      value={usuario}
      onChangeText={setUsuario}
      label="Mail"
      keyboardType="email-address"
      leftIcon={
        <Icon
          name='user'
          type='antdesign'
          size={24}
          color='black'
        />
      }
      placeholder="usuario@gmail.com"
    />
    <Input
      value={clave}
      onChangeText={setClave}
      label="Contraseña"
      leftIcon={
        <Icon
          name='form-textbox-password'
          type='material-community'
          size={24}
          color='black'
        />
      }
      placeholder="*********"
    />
    <Button
      title="Ingresar "
      icon={{
        name: 'login',
        type: 'antdesign',
        size: 15,
        color: 'white',
      }}
      iconContainerStyle={{ marginRight: 10 }}
      titleStyle={{ fontWeight: '700' }}
      buttonStyle={{
        backgroundColor: '#74c69d',
        borderColor: 'transparent',
        borderWidth: 0,
        borderRadius: 30,
      }}
      onPress={validarLogin}
    />
    <Button
      title="Registrar Usuario "
      icon={{
        name: 'login',
        type: 'antdesign',
        size: 15,
        color: 'white',
      }}
      iconContainerStyle={{ marginRight: 10 }}
      titleStyle={{ fontWeight: '700' }}
      buttonStyle={{
        backgroundColor: '#74c69d',
        borderColor: 'transparent',
        borderWidth: 0,
        borderRadius: 30,
      }}
      onPress={() => {
        navegarRegistro();
      }}
    />
    <Button
      title="Cerrar Sesión "
      icon={{
        name: 'logout',
        type: 'antdesign',
        size: 15,
        color: 'white',
      }}
      iconContainerStyle={{ marginRight: 10 }}
      titleStyle={{ fontWeight: '700' }}
      buttonStyle={{
        backgroundColor: '#e63946',
        borderColor: 'transparent',
        borderWidth: 0,
        borderRadius: 30,
      }}
      onPress={() => {
        finalizarSesion();
      }}
    />
    <Button
      title="Cambiar Clave  "
      icon={{
        name: 'login',
        type: 'antdesign',
        size: 15,
        color: 'white',
      }}
      iconContainerStyle={{ marginRight: 10 }}
      titleStyle={{ fontWeight: '700' }}
      buttonStyle={{
        backgroundColor: '#74c69d',
        borderColor: 'transparent',
        borderWidth: 0,
        borderRadius: 30,
      }}
      onPress={() => {
        navegarRecuperarClave();
      }}
    />

  </View>
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

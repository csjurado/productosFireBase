import { View, Text, StyleSheet, FlatList } from 'react-native'
import { Input, Icon, Button } from '@rneui/themed';
import { useState, useEffect } from 'react';
import { registrarUsuario } from '../services/AutenticacionSrv'

export const RegistroForm = () => {
    const [usuario, setUsuario] = useState(null);
    const [clave, setClave] = useState(null);
    const [confirmacion, setConfirmacion] = useState(null);
    const registrar = () => {
        registrarUsuario(usuario, clave);
    }
    return <View style={styles.container}>
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
            keyboardType="email-address"
            leftIcon={
                <Icon
                    name='form-textbox-password'
                    type='material-community'
                    size={24}
                    color='black'
                />
            }
            placeholder="Contraseña"
        />
        <Input
            value={confirmacion}
            onChangeText={setConfirmacion}
            label="Confirmar contraseña"
            keyboardType="email-address"
            leftIcon={
                <Icon
                    name='form-textbox-password'
                    type='material-community'
                    size={24}
                    color='black'
                />
            }
            placeholder="Confirmar contraseña"
        />
        
        <Button
            title="Guardar"
            icon={{
                name: 'save',
                type: 'feather',
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
            onPress={()=>{
                registrar();
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

import { View, Text, StyleSheet } from 'react-native';
import { Input, Icon, Button } from '@rneui/themed';
import { useState } from 'react';
import { guardar } from '../services/ProdcutosServices'


export const ProductosForm = ({ navigation, route }) => {
    const [codigo, setCodigo] = useState(null);
    const [nombre, setNombre] = useState(null);
    const [precio, setPrecio] = useState(null);
    const guardarProducto = () => {
        guardar({
            codigo: codigo,
            nombre: nombre,
            precio: parseFloat(precio),
        });
        limpiar();
        navigation.goBack();
        if (route.params && route.params.fnRepintarLista) {
            route.params.fnRepintarLista();
        }

    }
    const limpiar = () => {
        setCodigo(null),
            setNombre(null),
            setPrecio(null)
    }
    return <View style={styles.container}>
        <Text>PANTALLA DE FORMULARIO PRODUCTO </Text>
        <Input
            value={codigo}
            onChangeText={setCodigo}
            label="Código"
            keyboardType="number-pad"
            leftIcon={
                <Icon
                    name='codepen'
                    type='antdesign'
                    size={24}
                    color='black'
                />
            }
            placeholder="Ejemplo : 965448"
        />
        <Input
            value={nombre}
            onChangeText={setNombre}
            label="Nombre"
            leftIcon={
                <Icon
                    name='user'
                    type='antdesign'
                    size={24}
                    color='black'
                />
            }
            placeholder="Ejemplo : Clavos"
        />
        <Input
            value={precio}
            onChangeText={setPrecio}
            label="Precio"
            keyboardType="number-pad"
            leftIcon={
                <Icon
                    name='attach-money'
                    type='material'
                    size={24}
                    color='black'
                />
            }
            placeholder="Ejemplo : 6.50 "
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
            onPress={guardarProducto}

        />
    </View>
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#fff',
        justifyContent: 'flex-start', // Eje principal (eje vertical ->> columna )
        alignItems: 'stretch', // Eje secundario (eje horizontal ---> filas )
    },
});
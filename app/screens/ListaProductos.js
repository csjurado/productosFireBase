import { View, Text, StyleSheet, FlatList } from 'react-native'
import { Button, FAB, ListItem, Avatar } from '@rneui/themed';
import { consultar } from '../services/ProdcutosServices';
import { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { color } from '@rneui/base';
import { finalizarSesion } from '../services/AutenticacionSrv'

export const ListaProductos = ({ navigation }) => {
    const [productos, setProductos] = useState([]);
    useEffect(() => {
        recuperarProductos();
        console.log("----------------------------------ejecuntadno useEffect ")
    }, []);
    const recuperarProductos = () => {
        console.log("RECUPERANDO PRODUCTOS")
        consultar(setProductos);
    }
    return <View style={styles.container}>
        <View style={styles.itemPersona}>
            <Text style={styles.titulo}>
                LISTA DE PRODUCTOS
            </Text>
        </View>

        <Text>
            <FlatList
                data={productos}
                renderItem={({ item }) => {
                    return <Text >
                        <ListItem bottomDivider>
                            <Avatar
                                title={item.nombre.substring(0, 1)}
                                containerStyle={{ backgroundColor: '#00a7f7' }}
                                rounded
                            />
                            <ListItem.Content>
                                <ListItem.Title>{item.codigo}</ListItem.Title>
                            </ListItem.Content>
                            <ListItem.Content>
                                <ListItem.Title>{item.nombre}</ListItem.Title>
                            </ListItem.Content>
                            <ListItem.Content>
                                <ListItem.Subtitle>{item.precio}</ListItem.Subtitle>
                            </ListItem.Content>
                        </ListItem>

                    </Text>
                }}
                keyExtractor={(item) => { return item.codigo }}
            />

        </Text>
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
        <FAB
            title="+"
            placement="right"
            onPress={() => {
                navigation.navigate("ProductoFormNav", { fnRepintarLista: recuperarProductos });
            }}
        />
    </View>
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'stretch',
        justifyContent: "center"
    },
    titulo: {
        color: "#ffffff",
        fontStyle: "italic",
        fontSize: 20,
    },
    itemPersona: {
        backgroundColor: '#3c6e71',
        marginBottom: 8,
        padding: 7,
        borderRadius: 15,
        flexDirection: 'row',
        justifyContent: "space-between"
    },
    textoPrincipal: {
        fontSize: 20,
        fontStyle: "italic",
        padding: 15,
        backgroundColor: '#284b63',
        borderRadius: 15,
        flexDirection: "row",
    },
    textoSecundario: {
        fontStyle: "bold",
        fontSize: 16,
        color: "#f8f9fa",
        borderRadius: 15,
        flexDirection: "row",
        alignItems: "stretch",
        marginBottom: 15,
    },
});
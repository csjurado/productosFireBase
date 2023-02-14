import { View, Text, StyleSheet, FlatList } from 'react-native'
import { Input, Icon, Button } from '@rneui/themed';
import { useState, useEffect } from 'react';
import { resetearClave } from '../services/AutenticacionSrv'
export const CambioClaveForm = ({ navigation }) => {
    const [mail, setMail] = useState(null);
    const resetear = () => {
        resetearClave(mail);
    };
    return (
        <View style={styles.container}>
            <Input
                value={mail}
                onChangeText={setMail}
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
            <Button
                title="Cambiar Clave "
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
                onPress={()=>{
                    resetear();
                }}
            />
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
  
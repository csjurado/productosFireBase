import { View, Text, StyleSheet } from 'react-native';
export const ContenidoB=()=>{
    return (
        <View style={styles.container}>
            <Text> ACERCA DE </Text>
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
  
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native'
import React from 'react'
import { Colors } from 'react-native/Libraries/NewAppScreen'

interface LoadingType {
    message?: string
}

const Loading : React.FC<LoadingType> = ({message = "Chargement..."}) => {
  return (
    <View style={styles.container}>
        <ActivityIndicator size={"large"} color={'#FF6b6b'} />
      <Text style={styles.message}>{message}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    message: {
        marginTop: 12,
        fontSize: 16,
        color: '#666',
    }

})

export default Loading
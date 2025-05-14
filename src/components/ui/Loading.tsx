import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

interface LoadingType {
    message?: string
}

const Loading : React.FC<LoadingType> = ({message = "Chargement..."}) => {
  return (
    <View style={styles.container}>
      <Text>Loading</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    }
})

export default Loading
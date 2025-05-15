import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

interface DetailBiographieProps {
    description: string | undefined
}

const DetailBiographie: React.FC<DetailBiographieProps> = ({description}) => {
  return (
    <View style={style.container}>
      <Text style={style.title}>Biographie</Text>
      <Text style={style.description}>{description}</Text>
    </View>
  )
}

const style = StyleSheet.create({
    container: {
        backgroundColor: '#f8f8f8',
        padding: 16,
        borderRadius: 12,
        marginBottom: 24,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 12,
    },
    description: {
        fontSize: 16,
        lineHeight: 22,
        color: '#666',
        textAlign: 'justify',
    },
})

export default DetailBiographie
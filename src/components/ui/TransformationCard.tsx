import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { Transformation } from '../../types/character'

interface TransformationCardProps {
    transformation: Transformation
}

const TransformationCard: React.FC<TransformationCardProps> = ({ transformation }) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity
                onPress={() => { console.log('Press') }}
                activeOpacity={0.8}
            >
                <Image
                    source={{ uri: transformation.image }}
                    style={styles.image}
                />

            </TouchableOpacity>
            <Text style={styles.name}>{transformation?.name}</Text>
            <View style={styles.kiContainer}>
                <Text style={styles.kiLabel}>Ki:</Text>
                <Text style={styles.kiValue}>{transformation?.ki}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: 160,
        backgroundColor: '#F8F8F8',
        borderRadius: 12,
        marginRight: 12,
        padding: 12,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
        elevation: 2,
    },
    image: {
        width: 120,
        height: 120,
        marginBottom: 8,
        resizeMode: 'contain'
    },
    name: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#333',
        textAlign: 'center',
        marginBottom: 4,
    },
    kiContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    kiLabel: {
        fontSize: 14,
        color: '#666',
        marginRight: 4,
    },
    kiValue: {
        fontSize: 14,
        fontWeight: '600',
        color: '#FF6b6b',
    },


})

export default TransformationCard
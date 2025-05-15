import { View, Text, StyleSheet, Dimensions } from 'react-native'
import React from 'react'

const {width} = Dimensions.get('window'); // recuperer la largeur de l'ecran

interface StatCardProps {
    label: string;
    value: string;
}

const StatCard: React.FC<StatCardProps> = ({label, value}) => {
  return (
    <View style={styles.statCard}>
        <Text style={styles.statLabel}>{label}</Text>
        <Text style={styles.statValue}>{value}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    statCard: {
        width: (width - 48) / 2,
        backgroundColor: '#F8F8F8',
        padding: 16,
        borderRadius: 12,
        marginBottom: 16,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
        elevation: 1,
    },
    statLabel: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
    },
    statValue: {

    },

})

export default StatCard
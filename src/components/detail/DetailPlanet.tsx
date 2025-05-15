import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import { Planet } from '../../types/character'

interface DetailPlanetProps {
    planet: Planet
}

const DetailPlanet: React.FC<DetailPlanetProps> = ({ planet }) => {

    if (!planet) {
        return null;
    }

    return (
        <View style={styles.container}>
            <Text style={styles.sectionTitle}>Planète d'origine</Text>
            <View style={styles.planetCard}>
                {planet?.image && (
                    <Image
                        source={{ uri: planet.image }}
                        style={styles.planetImage}
                    />
                )}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginBottom: 24,
    },
    sectionTitle: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 12,
    },
    planetCard: {
        backgroundColor: '#F8F8F8',
        borderRadius: 12,
        overflow: 'hidden',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 2,
    },
    planetImage: {
        width: '100%',
        height: 150,
        resizeMode: 'contain',
    },


})

export default DetailPlanet
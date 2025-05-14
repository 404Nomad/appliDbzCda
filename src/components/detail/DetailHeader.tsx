import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import { Character } from '../../types/character'
import { YELLOW } from '../../constants/colorConstants';

interface DetailHeaderProps {
    character: Character;
}

const DetailHeader: React.FC<DetailHeaderProps> = ({character}) => {
  return (
    <View style={styles.header}>
        <View style={ styles.imageWrapper } >
            <Image
                style={ styles.image } 
                source={{ uri: character?.image }} // image du personnage
            />
        </View>
        <View style={styles.overlay}>
            <Text style={styles.characterName}>{character?.name}</Text>
            <View style={styles.raceContainer}>
                <Text style={styles.raceText}>{character?.race}</Text>
            </View>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    header: {
        height: 350,
        position: 'relative',
        backgroundColor: '#F0F0F0',
    },
    imageWrapper: {
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        width: '100%',
        height: '100%',
        backgroundColor: '#F0F0F0',
        resizeMode: 'contain',

    },
    overlay: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.6)',
        padding: 16,
    },
    characterName: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#fff',
        marginBottom: 8,
    },
    raceContainer: {
        backgroundColor: YELLOW,
        alignSelf: 'flex-start',
        paddingHorizontal: 12,
        paddingVertical: 4,
        borderRadius: 16,
    },
    raceText: {
        fontSize: 14,
        fontWeight: '600',
        color: '#333',
    },
})

export default DetailHeader
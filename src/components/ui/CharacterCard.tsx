import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native'
import React from 'react'
import { Character } from '../../types/character'

interface CharacterCardProps {
  character: Character,
  onPress: (characterId: number) => void
}

const CharacterCard: React.FC<CharacterCardProps> = ({ character, onPress }) => {
  return (
    <TouchableOpacity
      onPress={() => onPress(character.id)}
      activeOpacity={0.7}
      style={styles.card}
    >
      <View style={styles.imageContainer}>
        <Image source={{ uri: character.image }} style={styles.image} />
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.name}>{character.name}</Text>
        <View style={styles.raceContainer}>
          <Text style={styles.race}>{character.race}</Text>
        </View>

      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    marginVertical: 8,
    marginHorizontal: 16,
    flexDirection: 'row',
    overflow: 'hidden',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  imageContainer: {
    width: 100,
    height: 140,
    backgroundColor: '#f0f0f0',
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain'
  },
  infoContainer: {
    flex: 1,
    padding: 12,
    justifyContent: 'space-between',
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 4,
  },
  raceContainer: {
    backgroundColor: '#ffd700',
    alignSelf: 'flex-start',
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 12,
    marginBottom: 6,
  },
  race: {
    fontSize: 12,
    fontWeight: '500',
    color: '#333',
  },
});

export default CharacterCard
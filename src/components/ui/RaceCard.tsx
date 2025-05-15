import {View, Text, TouchableOpacity, Image, StyleSheet} from 'react-native';
import React from 'react';
import {Character} from '../../types/character';

interface DetailRaceProps {
  character: Character;
  onPress: (characterId: number) => void;
}

const RaceCard: React.FC<DetailRaceProps> = ({character, onPress}) => {
  return (
    <TouchableOpacity
      onPress={() => onPress(character.id)}
      activeOpacity={0.7}
      style={styles.card}>
      <View style={styles.imageContainer}>
        <Image source={{uri: character.image}} style={styles.image} />
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.name}>{character.name}</Text>
        <View style={styles.raceContainer}>
          <Text style={styles.race}>{character.race}</Text>
        </View>
        <View style={styles.statsRow}>
          <View style={styles.affiliationContainer}>
            <Text style={styles.affiliation}>{character.affiliation}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 20,
    marginVertical: 16,
    marginHorizontal: 8,
    flexDirection: 'column',
    overflow: 'hidden',
    elevation: 6,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.15,
    shadowRadius: 8,
    width: 220,
    alignItems: 'center',
  },
  imageContainer: {
    width: '100%',
    height: 160,
    backgroundColor: '#f8f8f8',
    justifyContent: 'center',
    alignItems: 'center',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    overflow: 'hidden',
  },
  image: {
    width: 120,
    height: 140,
    resizeMode: 'contain',
  },
  infoContainer: {
    width: '100%',
    padding: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#222',
    marginBottom: 8,
    textAlign: 'center',
  },
  raceContainer: {
    backgroundColor: '#FFE066',
    alignSelf: 'center',
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 16,
    marginBottom: 8,
    marginTop: 2,
  },
  race: {
    fontSize: 13,
    fontWeight: '600',
    color: '#333',
    textAlign: 'center',
  },
  statsRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 4,
  },
  affiliationContainer: {
    backgroundColor: '#e0e0e0',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 16,
  },
  affiliation: {
    fontSize: 13,
    color: '#333',
    textAlign: 'center',
  },
});

export default RaceCard;
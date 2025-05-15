import {View, Text, Image, StyleSheet} from 'react-native';
import React from 'react';
import {Planet} from '../../types/character';

interface PlanetCardProps {
  planet: Planet;
}
/**
 * name
 * isDestroyed
 * description
 * image
 */
const PlanetCard: React.FC<PlanetCardProps> = ({planet}) => {
  const destroy = planet?.isDestroyed ? 'Planète détruite' : 'Planète intacte';
  return (
    <View style={styles.card}>
      <View style={styles.imageContainer}>
        <Image source={{uri: planet.image}} style={styles.image} />
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.name}>{planet.name}</Text>
        <View style={styles.raceContainer}>
          <Text style={styles.race}>{destroy}</Text>
        </View>
        <View style={styles.statsRow}>
          <Text style={styles.statLabel}>{planet?.description}</Text>
        </View>
      </View>
    </View>
  );
};
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
    shadowOffset: {width: 0, height: 2},
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
    resizeMode: 'contain',
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
    backgroundColor: '#FFD700',
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
  statsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  statItem: {
    flexDirection: 'column',
  },
  statLabel: {
    fontSize: 12,
    color: '#666',
  },
  statValue: {
    fontSize: 14,
    fontWeight: '600',
    color: '#333',
  },
  affiliationContainer: {
    backgroundColor: '#e0e0e0',
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 12,
  },
  affiliation: {
    fontSize: 12,
    color: '#333',
  },
});

export default PlanetCard;
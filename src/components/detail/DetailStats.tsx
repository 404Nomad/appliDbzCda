import { View, StyleSheet, Text } from 'react-native'
import React from 'react'
import { Character } from '../../types/character'
import StatCard from '../ui/StatCard';

interface DetailStatsProps {
    character: Character | null;
}

const DetailStats: React.FC<DetailStatsProps> = ({ character }) => {
  if (!character) {
    return (
      <View style={styles.statsContainer}>
        <Text>Aucune statistique disponible.</Text>
      </View>
    );
  }

  return (
    <View style={styles.statsContainer}>
      <StatCard label={'Ki'} value={character.ki} />
      <StatCard label={'Max Ki'} value={character.maxKi} />
      <StatCard label={'Genre'} value={character.gender} />
      <StatCard label={'Affiliation'} value={character.affiliation} />
    </View>
  );
};

const styles = StyleSheet.create({
    statsContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        marginBottom: 24,
    },
});

export default DetailStats
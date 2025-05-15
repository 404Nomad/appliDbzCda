import {View, Text, StyleSheet, ScrollView} from 'react-native';
import React from 'react';
import {Character} from '../../types/character';
import CharacterCard from '../ui/CharacterCard';
import {useDispatch} from 'react-redux';
import {AppDispatch} from '../../store/store';
import {setSelectedCharacterId} from '../../store/characters/characterSlice';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../../navigations/MainNavigation';
import RaceCard from '../ui/RaceCard';

interface DetailRaceProps {
  characters: Character[] | null;
}

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;

const DetailRace: React.FC<DetailRaceProps> = ({characters}) => {
  const dispatch = useDispatch<AppDispatch>();
  const navigation = useNavigation<HomeScreenNavigationProp>();

  const handleSelectCharacter = (characterId: number) => {
    dispatch(setSelectedCharacterId(characterId));
    navigation.navigate('Detail', {characterId});
  };

  return (
    <View style={styles.container}>
      <Text style={styles.sectionTitle}>Dans la même race</Text>
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        style={styles.transformationContainer}>
        {characters &&
          characters.map(character => (
            <RaceCard
              character={character}
              key={character.id}
              onPress={() => handleSelectCharacter(character.id)}
            />
          ))}
      </ScrollView>
    </View>
  );
};
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
  transformationContainer: {
    flexDirection: 'row',
    marginBottom: 8,
  },
});

export default DetailRace;
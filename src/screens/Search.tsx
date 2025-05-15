import { View, Text, StyleSheet } from 'react-native'
import React, { use, useEffect, useState } from 'react'
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../navigations/MainNavigation';
import { AppDispatch } from '../store/store';
import { useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { Character } from '../types/character';
import { setSelectedCharacterId } from '../store/characters/characterSlice';
import CharacterCard from '../components/ui/CharacterCard';

type SearchScreenNavigationProp = StackNavigationProp<RootStackParamList>;

const Search = () => {

  //on déclare nos states
  const [query, setQuery] = useState<string>('');
  const [results, setResults] = useState<Character[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>('');

  //on recupere les hooks
  const dispatch = useDispatch<AppDispatch>();
  const navigation = useNavigation<SearchScreenNavigationProp>();

  // ajout d'un useEffect pour tracker les changements de query
  useEffect(() => {
    console.log('query changed', query);
  }, [query])

  // méthode pour faire la recherche
  const handleSearch = async () => {}

  // handleselectCharacter
  const handleSelectCharacter = (characterId: number) => {
    dispatch(setSelectedCharacterId(characterId)); // on dispatch l'action pour set le personnage selectionne
    navigation.navigate('Detail', {characterId}); // on navigue vers la page de details du personnage
  }

  //methode qui retourne le rendu de la carte character
  const renderCharacterItem = ({item}: {item: Character}) => {
    return (
      <CharacterCard character={item} onPress={handleSelectCharacter} />
    )
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Recherche</Text>
        <Text style={styles.subtitle}>Trouvez vos personnages préférées</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container : {
    flex: 1,
    backgroundColor: '#F5F5F5'
  },
  header: {
    backgroundColor: '#010101',
    padding: 20,
    paddingTop: 40,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#FFF',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: '#AAA',
  }
})

export default Search
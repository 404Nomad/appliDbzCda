import { View, Text, StyleSheet, TextInput, TouchableOpacity, FlatList } from 'react-native'
import React, { use, useEffect, useState } from 'react'
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../navigations/MainNavigation';
import { AppDispatch } from '../store/store';
import { useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { Character } from '../types/character';
import { setSelectedCharacterId } from '../store/characters/characterSlice';
import CharacterCard from '../components/ui/CharacterCard';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Loading from '../components/ui/Loading';
import axios from 'axios';
import { API_URL } from '../constants/apiConstants';

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
  const handleSearch = async () => {
    if (query.trim() === '') return null;
    setLoading(true);
    setError(null);
    const trimmedQuery = query.trim();
    try {
      const response = await axios.get(`${API_URL}/characters?name=${trimmedQuery}`);
      setResults(response.data);
      if(response.data.length === 0){
        setError('Aucun personnage trouvé');
      }
    } catch (error) {
      setError('Une erreur est survenue lors de la recherche.');
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  // handleselectCharacter
  const handleSelectCharacter = (characterId: number) => {
    dispatch(setSelectedCharacterId(characterId)); // on dispatch l'action pour set le personnage selectionne
    navigation.navigate('Detail', { characterId }); // on navigue vers la page de details du personnage
  }

  //methode qui retourne le rendu de la carte character
  const renderCharacterItem = ({ item }: { item: Character }) => {
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

      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Nom du personnage..."
          placeholderTextColor={'#999'}
          value={query}
          onChangeText={setQuery}
          onSubmitEditing={handleSearch}

        />
        <TouchableOpacity
          style={styles.searchButton}
          onPress={handleSearch}
        >
          <Icon name="magnify" size={24} color="#fff" />


        </TouchableOpacity>
      </View>

      {loading ? (
        <Loading message="Recherche en cours..." />

      ) : error ? (
        <View style={styles.errorContainer}>
          <Icon name="alert-circle" size={48} color="#FF6b6b" />
          <Text style={styles.errorText}>{error}</Text>
        </View>
      ) : (
        <FlatList 
          data={results}
          renderItem={renderCharacterItem}
          keyExtractor={(item) => item.id.toString()}
          contentContainerStyle={styles.resultsList}
          ListEmptyComponent={
            <View style={styles.emptyContainer}>
              <Icon name="dragon" size={64} color="#999" />
              <Text style={styles.emptyText}>Recherchez vos personnages Dragon Ball préférées</Text>
            </View>
          }
        />
      )

      }

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
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
  },
  searchContainer: {
    flexDirection: 'row',
    margin: 16,
    borderRadius: 8,
    backgroundColor: '#FFF',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  searchInput: {
    flex: 1,
    height: 50,
    paddingHorizontal: 16,
    fontSize: 16,
    color: '#333',

  },
  searchButton: {
    width: 50,
    height: 50,
    backgroundColor: '#ff6b6b',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  errorText: {
    fontSize: 16,
    color: '#ff6B6B',
    textAlign: 'center',
  },
  resultsList: {
    padding: 16,
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    marginTop: 50,
  },
  emptyText: {
    marginTop: 16,
    fontSize: 16,
    color: '#999',
    textAlign: 'center',
    lineHeight: 24,
  }
});

export default Search
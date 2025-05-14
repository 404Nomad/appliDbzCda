import { View, Text, StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch } from '../store/store'
import { fetchCharacters } from '../store/characters/characterSlice'
import { RootState } from '../store/store'
import { useNavigation } from '@react-navigation/native'
import Loading from '../components/ui/Loading'
import HomeHeader from '../components/section/HomeHeader'

const Home = () => {
  // on recupere les hooks
  const dispatch = useDispatch<AppDispatch>(); // on recupere le hook dispatch
  const navigate = useNavigation(); // on recupere le hook de navigation

  // on declare nos states
  const [currentPage, setCurrentPage] = useState(1); // State to manage the current page, 1 by default
  const [refreshing, setRefreshing] = useState(false); // State to manage the refreshing state

  useEffect(() => {
    loadCharacters(); // Load characters when the component mounts
  }, [dispatch, currentPage]); // si currentpage change, on refait la requete

  //
  const loadCharacters = () => {
    dispatch(fetchCharacters(currentPage, 10)); // Fetch characters when the component mounts, page 1 et limit 10
  };

  const { characters, loading, error } = useSelector(
    (state: RootState) => state.Characters,
  );

  console.log('characters', characters);

  // on traite le cas du chargement des données
  // si loading est vrai et qu'il n'y a pas de personnages alors on affiche le loading
  if (loading && !characters) {
    return <Loading message={"Chargement des personnages..."} /> // on affiche le loading
  }

  // on traite le cas d'erreur
  // si il y a une erreur et qu'il n'y a pas de personnages alors on affiche l'erreur
  if (error && !characters) {
    //si dans notre store il y a une erreur
    return (
      <View style={styles.errorContainer}>
        <Text style={styles.errorText}>Error</Text>
        <Text style={styles.retryText} onPress={loadCharacters}>Appuyer pour réessayer</Text>
      </View>
    )
  }

  return (
    <View style={styles.container}>
      <HomeHeader />
      <Text >Home</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
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
    marginBottom: 16,
  },
  retryText: {
    fontSize: 16,
    color: '#5D5FEF',
    fontWeight: 'bold',
    padding: 8,
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
  },
})

export default Home
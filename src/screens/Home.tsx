import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch } from '../store/store'
import { fetchCharacters } from '../store/characters/characterSlice'
import { RootState } from '../store/store'
import { useNavigation } from '@react-navigation/native'
import Loading from '../components/ui/Loading'

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

  // cas du chargement des données
  if (!loading) {
    return <Loading message={"Chargement des personnages..."}/> // on affiche le loading
  }



  return (
    <View>
      <Text>Home</Text>
    </View>
  )
}

export default Home